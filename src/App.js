import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Pet from './pages/Pet';
import SignupComplete from './pages/SignupComplete';
import Check from './pages/Check';
import Commu from './pages/Commu';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path={['/', '/@:username']} component={Home} exact />
        <Route path="/profile" component={Profile} />
        <Route path="/pet" component={Pet} />
        <Route path="/shop" component={Shop} />
        <Route path="/commu" component={Commu} />
        <Route path="/check" component={Check} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} exact />
        <Route path="/signup/complete" component={SignupComplete} />
        <Route
          render={({ location }) => (
            <div>
              <h2>Page Not Found</h2>
              <h3>{location.pathname}</h3>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
