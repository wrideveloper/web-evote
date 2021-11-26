import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AuthPage from './modules/Auth/AuthPage';
import LoggedInPage from './modules/LoggedIn/LoggedInPage';
import AdminPage from './modules/LoggedIn/admin/AdminPage';

function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        {
          user.length === 0 ?
          <>
            <Route path="/login" component={AuthPage} />
            <Redirect to="/login" />
          </>
          :
          <>
          {user.role === "Pemilih" ? 
          <>
            <Route path="/evote" component={LoggedInPage} /> 
            <Redirect to="/evote" />
          </>
          : 
          <>
            <Route path="/admin" component={AdminPage} />
            <Redirect to="/admin" />
          </>
          }
          
          </>
        }
      </Switch>
    </BrowserRouter>
  );
}

export default App;
