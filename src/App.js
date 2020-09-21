import React from "react"
import "./App.css"
import { BrowserRouter as Router } from "react-router-dom"
import { Header } from "./components/Header"
import { Routing } from "./components/Routing"

export const App = () => {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Routing />
      </Router>
    </div>
  )
}
