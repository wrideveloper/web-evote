import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
// import Dashboard from './admin/Dashboard'
import Home from './user/Home'

import Header from '../../components/header'
import Footer from '../../components/footer'

const LoggedInPage = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/evote" component={Home} />
                <Redirect to="/evote" />
            </Switch>
            <Footer />
        </div>
    )
}

export default LoggedInPage
