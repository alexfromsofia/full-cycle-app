import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { store } from "../store"
import { graphqlURI } from "../utils"
import App from "./components/App"

const client = new ApolloClient({
  cache: new InMemoryCache().restore(JSON.parse(window.__APOLLO_STATE__)),
  uri: graphqlURI,
})

ReactDOM.hydrate(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
)

// TODO: Setup local Jenkins with docker
