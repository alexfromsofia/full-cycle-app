import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client"
import { getMarkupFromTree } from "@apollo/client/react/ssr"
import express, { Request, Response } from "express"
import fs from "fs"
import helmet from "helmet"
import fetch from "isomorphic-fetch"
import { Provider } from "react-redux"
import { StaticRouter } from "react-router"
import serialize from "serialize-javascript"
import App from "../client/components/App"
import routes from "../shared/routes"
import { RootState, store } from "../store"
import { graphqlURI } from "../utils"

const app = express()
const port = process.env.SERVER_PORT || 3000
const clientPort = process.env.CLIENT_PORT || 8080
const origin = process.env.ORIGIN || "localhost"

app.use(helmet({ contentSecurityPolicy: false }))
app.use("/public", express.static(`${__dirname}/../../public`))

async function handleRender(req: Request, res: Response) {
  const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: graphqlURI,
      fetch,
      credentials: "same-origin",
      headers: {
        cookie: req.header("Cookie"),
      },
    }),
    cache: new InMemoryCache(),
  })

  const preloadedState = store.getState()

  const tree = (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <StaticRouter location={req.url}>
          <App />
        </StaticRouter>
      </Provider>
    </ApolloProvider>
  )
  const content = await getMarkupFromTree({ tree })

  // Send the rendered page back to the client
  // Extract the entirety of the Apollo Client cache's current state
  const initialState = client.extract()

  // Render the component to static markup and return it
  res.status(200)
  res.send(renderFullPage(content, initialState, preloadedState))
  res.end()
}
function renderFullPage(
  html: string,
  preloadedApolloState: NormalizedCacheObject,
  preloadedState: RootState
) {
  const clientBundleScript = `<script src="http://${origin}:${clientPort}/bundle.js"></script>`
  const apolloState = `<script>
  window.__APOLLO_STATE__ = ${serialize(
    JSON.stringify(preloadedApolloState)
  ).replace(/</g, "\\u003c")}
</script>`
  const preloadedStateScript = `<script>
  window.__PRELOADED_STATE__ = ${serialize(preloadedState).replace(
    /</g,
    "\\u003c"
  )}
</script>`

  try {
    const markup = fs.readFileSync(`${__dirname}/index.html`)

    return `
    ${markup
      .toString()
      .replace('<div id="root">', `<div id='root'>${html}`)
      .replace("</body>", `${apolloState}</body>`)
      .replace("</body>", `${preloadedStateScript}</body>`)
      .replace("</body>", `${clientBundleScript}</body>`)}
    `
  } catch {
    // This should never happen ;)
    return ""
  }
}

routes.forEach(async ({ route }) => {
  app.get(route, (req, res) => handleRender(req, res))
})

app.listen(port, () => {
  console.log(`App listening on http://${origin}:${port}`)
})
