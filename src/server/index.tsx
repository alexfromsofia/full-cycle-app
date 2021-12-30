import { configureStore } from "@reduxjs/toolkit"
import express, { Request, Response } from "express"
import fs from "fs"
import helmet from "helmet"
import React from "react"
import ReactDOMServer from "react-dom/server"
import { Provider } from "react-redux"
import { StaticRouter } from "react-router"
import serialize from "serialize-javascript"
import App from "../client/components/App"
import routes from "../shared/routes"
import { RootState } from "../store"
import counter from "../store/slices/counter"
import price from "../store/slices/price"

const app = express()
const port = process.env.SERVER_PORT || 3000
const clientPort = process.env.CLIENT_PORT || 8080
const origin = process.env.ORIGIN || "localhost"

app.use(helmet({ contentSecurityPolicy: false }))
app.use("/js", express.static(`${__dirname}/../build/server`))

async function handleRender(req: Request, res: Response, initialData?: any) {
  const store = configureStore({
    reducer: {
      counter,
      price,
    },
    preloadedState: initialData,
  })

  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </Provider>
  )

  const preloadedState = store.getState()

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState))
}
function renderFullPage(html: string, preloadedState: RootState) {
  const clientBundleScript = `<script src="http://${origin}:${clientPort}/bundle.js"></script>`
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
      .replace("</body>", `${preloadedStateScript}</body>`)
      .replace("</body>", `${clientBundleScript}</body>`)}
    `
  } catch {
    // This should never happen ;)
    return ""
  }
}

routes.forEach(async ({ route, fetchData }) => {
  const data = await fetchData()

  app.get(route, (req, res) => handleRender(req, res, data))
})

app.listen(port, () => {
  console.log(`App listening on http://${origin}:${port}`)
})
