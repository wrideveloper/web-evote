import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import Dashboard from './Dashboard'

const AdminPage = () => {
    return (
        <Switch>
            <Route path="/admin" component={Dashboard} />
            <Redirect to="/admin" />
        </Switch>
    )
}

export default AdminPage
