import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import { Faq } from './scenes'

class AppWithRoute extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/" component={App} />
          <Route exact path="/faq" component={Faq} />
        </Fragment>
      </Router>
    )
  }
}

export default AppWithRoute
