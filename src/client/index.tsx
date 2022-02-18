import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { store } from "../store"
import { graphqlURI } from "../utils"
import App from "./components/App"

const client = new ApolloClient({
  cache: window.__APOLLO_STATE__
    ? new InMemoryCache().restore(JSON.parse(window.__APOLLO_STATE__))
    : new InMemoryCache(),
  uri: graphqlURI,
})

ReactDOM.hydrate(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <div className="gradient" />
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
)

// TODO: Setup local Jenkins with docker
