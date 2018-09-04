import React, { Component } from "react"
import Header from "./components/Header"
import { Switch, Route } from "react-router-dom"
import logo from "./logo.svg"
import "./App.css"
import Login from "./components/Login"
import MenuAppBar from "./components/MenuAppBar"
import LinkList from "./components/LinkList"
import CreateLink from "./components/CreateLink"

// localStorage.setItem(
//   "jwt",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJoYWNrZXItc2VydmVyLWRiQGRldiIsInJvbGVzIjpbImFkbWluIl19LCJpYXQiOjE1MzYwNTYwNjgsImV4cCI6MTUzNjY2MDg2OH0.cImcRd9EFoyV2hRXXY8H8gEpyhme0eZaV7xgTu1JCMQ"
// )

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={LinkList} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/create" component={CreateLink} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
