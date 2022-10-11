import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Shop from './pages/Shop';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Pet from './pages/Pet';
import SignupComplete from './pages/SignupComplete';
import Check from './pages/Check';
import Commu from './pages/Commu';
import OAuth2Redirection from './components/auth/OAuth2Redirection';
import Index from './pages/Index';
import PrivateRoute from './components/PrivateRoute';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={['/', '/about']} component={Index} exact />
        <Route path="/commu" component={Commu} />
        <Route path="/profile" component={Profile} />
        <Route path="/pet" component={Pet} />
        <Route path="/shop" component={Shop} />
        <PrivateRoute path="/check" component={Check} redirectTo={Signin} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} exact />
        <Route path="/signup/complete" component={SignupComplete} />
        <Route path="/oauth2" component={OAuth2Redirection} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
