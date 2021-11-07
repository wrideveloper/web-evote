import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
// import Dashboard from './admin/Dashboard'
import Home from './user/Home'

const LoggedInPage = () => {
    return (
        <Switch>
            <Route path="/evote" component={Home} />
            <Redirect to="/evote" />
        </Switch>
    )
}

export default LoggedInPage
