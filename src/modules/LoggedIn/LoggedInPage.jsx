import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
// import Dashboard from './admin/Dashboard'
import Home from './user/Home'
<<<<<<< HEAD
=======
import ProfilCaketum from './user/ProfilCaketum.jsx'
>>>>>>> c7f6504cb532aa147d4f9adabd33a9e93f02b2ce
import Header from '../../components/header'
import Footer from '../../components/footer'
import Harapan from './user/Harapan'


const LoggedInPage = () => {
    return (
        <div>
            <Header />
            <Switch>
<<<<<<< HEAD
                <Route path="/evote" component={Harapan} />
=======
                <Route path="/evote/profile" component={ProfilCaketum} />
                <Route path="/evote" component={Home} />
>>>>>>> c7f6504cb532aa147d4f9adabd33a9e93f02b2ce
                <Redirect to="/evote" />
            </Switch>
            <Footer />
        </div>
    )
}

export default LoggedInPage
