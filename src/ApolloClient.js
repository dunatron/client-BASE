import React from "react"
import { ApolloClient } from "apollo-client"
import { HttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloProvider } from "react-apollo"
import { ApolloLink, concat } from "apollo-link"
import { connect } from "react-redux"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
// import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import customTheme from "./theme"

let GRAPHQL_ENDPOINT =
  "https://us1.prisma.sh/heath-dunlop-37e897/hacker-server-db/dev"

const httpLink = new HttpLink({ uri: GRAPHQL_ENDPOINT })
const createAuthMiddleware = token =>
  new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    if (token) {
      operation.setContext({
        headers: {
          Authorization: "Bearer " + token,
        },
      })
    }
    return forward(operation)
  })

const createClient = token =>
  new ApolloClient({
    link: concat(createAuthMiddleware(token), httpLink),
    cache: new InMemoryCache({
      dataIdFromObject: o => {
        if (o.ID >= 0 && o.__typename) {
          return `${o.__typename}:${o.ID}`
        }
        return null
      },
    }),
  })

const client = createClient(localStorage.getItem("jwt"))
// const theme = createMuiTheme(customTheme)

const ApolloApp = ({ token }) => (
  <ApolloProvider client={client}>
    {/* <MuiThemeProvider theme={theme}> */}
    <App />
    {/* </MuiThemeProvider> */}
  </ApolloProvider>
)

export default connect(state => ({
  token: state.token,
}))(ApolloApp)
