import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginAdmin from './Login/LoginAdmin'
import LoginUser from './LoginUsers/LoginUser'

const AuthPage = () => {
    return (
        <Switch>
            <Route path="/login/user" component={LoginUser} />
            <Route path="/login/admin" component={LoginAdmin} />
        </Switch>
    )
}

export default AuthPage
