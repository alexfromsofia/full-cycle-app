import express from "express"
import fs from "fs"
import React from "react"
import ReactDOMServer from "react-dom/server"
import App from "../client/components/App"
const app = express()
const port = 3000

app.get("/", (req, res) => {
  const jsx = ReactDOMServer.renderToString(<App />)
  const clientBundleScript = `<script src="http://localhost:8080/scripts/bundle.js"></script>`

  fs.readFile(`${__dirname}/index.html`, (error, data) => {
    if (error) {
      throw error
    }

    res.send(`
        ${data
          .toString()
          .replace("<div id='root'>", `<div id='root'>${jsx}`)
          .replace("</body>", `${clientBundleScript}</body>`)}
    `)
  })
})

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})
