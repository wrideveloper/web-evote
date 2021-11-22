import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
// import Dashboard from './admin/Dashboard'
import Home from './user/Home'
import ProfilCaketum from './user/ProfilCaketum.jsx'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Harapan from './user/Harapan'
import Done from './user/Done'


const LoggedInPage = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/evote/Done" component={Done} />
                <Route path="/evote/profile" component={ProfilCaketum} />
                <Route path="/evote/harapan" component={Harapan} />
                <Route path="/evote" component={Home} />
                <Redirect to="/evote" />
            </Switch>
            <Footer />
        </div>
    )
}

export default LoggedInPage
