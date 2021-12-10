import express from "express"
import fs from "fs"
import React from "react"
import ReactDOMServer from "react-dom/server"
import { StaticRouter } from "react-router"
import App from "../client/components/App"
import routes from "../shared/routes"
const app = express()
const port = process.env.SERVER_PORT || 3000
const clientPort = process.env.CLIENT_PORT || 8080
const origin = process.env.ORIGIN || "localhost"

app.use("/js", express.static(`${__dirname}/../build/server`))

routes.forEach(({ route }) =>
  app.get(route, (req, res) => {
    const jsx = ReactDOMServer.renderToString(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    )
    const clientBundleScript = `<script src="http://${origin}:${clientPort}/bundle.js"></script>`
    fs.readFile(`${__dirname}/index.html`, (error, data) => {
      if (error) {
        throw error
      }

      res.send(`
        ${data
          .toString()
          .replace('<div id="root">', `<div id='root'>${jsx}`)
          .replace("</body>", `${clientBundleScript}</body>`)}
    `)
    })
  })
)

app.listen(port, () => {
  console.log(`App listening on http://${origin}:${port}`)
})
