import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { store } from "../store"
import App from "./components/App"

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)

// TODO: Setup local Jenkins with docker
// TODO: react-router-config - https://subscription.packtpub.com/book/web_development/9781839215414/16/ch16lvl1sec91/server-side-rendering-with-data
