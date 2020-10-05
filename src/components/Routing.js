import { Container } from '@material-ui/core'
import React from 'react'
import { Route } from 'react-router-dom'

export const Routing = () => {
  return (
    <div>
      <Route
        exact
        path='/'
        component={Container}
        onEnter={function () {
          document.getElementsByClassName('home').scrollIntoView()
        }}
      />
      <Route exact path='/About' component={Container} />
      <Route exact path='/projects' component={Container} />
      <Route
        exact
        path='/contact'
        component={Container}
        onEnter={function () {
          document.getElementsByClassName('contact').scrollIntoView()
        }}
      />
      <Route exact path='/blogs' component={Container} />
    </div>
  )
}
