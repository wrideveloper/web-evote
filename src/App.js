import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './modules/Auth/LoginUsers/LoginUser';
import { 
  HomePage, 
  HarapanPage, 
  ProfilCaketumPage, 
  DonePage, 
  DashboardPage,
  Calon,
  HasilPemilihan,
  Pemilih,
  HarapanSaran,
  StatistikPage
} from './modules/LoggedIn';

import {
  Header, 
  SideBar,
  Footer,
  Content
} from './components'

function App() {
  const [user, setUser] = useState([]);
  const [open, setOpen] = useState(true)

  const handleTogle = () => {
      setOpen(prev => !prev)
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <BrowserRouter>
        {
          user.length === 0 ?
            <Switch>
              <Route exact path="/" component={LoginPage} />
            </Switch>
          :
          <>
            {
              user.role === "Pemilih" ?
              <>
              <Header />
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/harapan" component={HarapanPage} />
                  <Route path="/statistik" component={StatistikPage} />
                  <Route path="/profile-caketum/:id" component={ProfilCaketumPage} />
                  <Route path="/done" component={DonePage} />
                </Switch>
              <Footer />
              </> 
              :
              <>
              <Switch>
                <Route exact path="/" component={DashboardPage} />
                <div className="App wrapper">
                  <SideBar isOpen={open} handleTogle={handleTogle} />
                  <Content sidebarIsOpen={open} togleSidebar={handleTogle}>
                  <Switch>
                        <Route path="/admin/calon" component={Calon} />
                        <Route path="/admin/pemilih" component={Pemilih} />
                        <Route exact path="/admin/hasil-pemilihan" component={HasilPemilihan} />
                        <Route path="/admin/hasil-pemilihan/saran" component={HarapanSaran} />
                  </Switch>
                  </Content>  
                </div>
              </Switch>
              </>
            }
          </>
        }
    </BrowserRouter>
  );
}

export default App;
