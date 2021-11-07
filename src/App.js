import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AuthPage from './modules/Auth/AuthPage';
import LoggedInPage from './modules/LoggedIn/LoggedInPage';
import AdminPage from './modules/LoggedIn/admin/AdminPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={AuthPage} />
        <Route path="/evote" component={LoggedInPage} />
        <Route path="/admin" component={AdminPage} />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
