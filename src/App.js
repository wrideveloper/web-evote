import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthPage from './modules/Auth/AuthPage';
import LoggedInPage from './modules/LoggedIn/LoggedInPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth" component={AuthPage} />
        <Route path="/" component={LoggedInPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
