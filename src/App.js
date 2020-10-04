import React from "react"
import "./App.css"
import { BrowserRouter as Router } from "react-router-dom"
import { Header } from "./components/Header"
import { Routing } from "./components/Routing"

export const App = () => {
  return (
    <div
      className='app wrapper'
      style={{
        backgroundImage: `url(${"./home-wall.jpg"})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "center",
        opacity: "1",
      }}
    >
      <Router>
        <Header />
        <Routing />
      </Router>
    </div>
  )
}
