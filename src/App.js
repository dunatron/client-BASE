import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import LinkList from "./components/LinkList"

localStorage.setItem(
  "jwt",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJoYWNrZXItc2VydmVyLWRiQGRldiIsInJvbGVzIjpbImFkbWluIl19LCJpYXQiOjE1MzYwMzk0ODQsImV4cCI6MTUzNjY0NDI4NH0.zig4HBuMGYcxTfK9H4Iz0ut81gAloSjk61zPv0Cq0Qg"
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <LinkList />
      </div>
    )
  }
}

export default App
