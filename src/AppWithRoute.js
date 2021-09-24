import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import Login from './pages/auth/login'
import Dashboard from './pages/module/admin/dashboard'
import { Faq } from './scenes'


class AppWithRoute extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/" component={App} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/evote/admin/auth" component={Login} />
          <Route exact path="/evote/admin/dashboard" component={Dashboard} />
        </Fragment>
      </Router>
    )
  }
}

export default AppWithRoute
