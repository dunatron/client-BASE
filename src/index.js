import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import ApolloApp from "./ApolloClient"
import { Provider as Redux } from "react-redux"
import store from "./state/store"

import registerServiceWorker from "./registerServiceWorker"

ReactDOM.render(
  <Redux store={store}>
    <ApolloApp />
  </Redux>,
  document.getElementById("root")
)
registerServiceWorker()
