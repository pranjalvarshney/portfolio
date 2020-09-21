import React from "react"
import { Route, Switch } from "react-router-dom"
import { Blog } from "./pages/Blog"
import { Contact } from "./pages/Contact"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"

export const Routing = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/blogs' component={Blog} />
    </Switch>
  )
}
