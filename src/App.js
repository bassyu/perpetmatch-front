import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import ShopList from './pages/ShopList';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Pet from './pages/Pet';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path={['/', '/@:username']} component={Home} exact />
        <Route path="/pet" component={Pet} />
        <Route path="/shoplist" component={ShopList} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={Profile} />
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
