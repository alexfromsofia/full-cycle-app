import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./components/App"

window.addEventListener("DOMContentLoaded", () => {
  ReactDOM.hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("root")
  )
})

// TODO: Load app in docker
// -- latest NODE LTS image with minimum dependencies
// -- optimize docker build - do not run npm install if no new dependencies added
// TODO: Setup local Jenkins with docker
// TODO: react-router-config - https://subscription.packtpub.com/book/web_development/9781839215414/16/ch16lvl1sec91/server-side-rendering-with-data
// TODO: Add Redux store
