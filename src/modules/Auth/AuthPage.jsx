import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import LoginPage from './Login/LoginPage'
const AuthPage = () => {
    return (
        <Switch>
            <Route path="/auth/login" component={LoginPage} />
            <Redirect to="/auth/login" />
        </Switch>
    )
}

export default AuthPage
