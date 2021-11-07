import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import LoginAdmin from './Login/LoginAdmin'
import LoginUser from './LoginUsers/LoginUser'

const AuthPage = () => {
    return (
        <Switch>
            <Route path="/login/user" component={LoginUser} />
            <Route path="/login/admin" component={LoginAdmin} />
            <Redirect to="/login/user" />
        </Switch>
    )
}

export default AuthPage
