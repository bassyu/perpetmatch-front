import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Home from './pages/Home';
import PetList from './pages/PetList';
import PetForm from './pages/PetForm';
import ShopList from './pages/ShopList';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path={['/', '/@:username']} component={Home} exact />
        <Route path="/petlist" component={PetList} />
        <Route path="/petform" component={PetForm} />
        <Route path="/shoplist" component={ShopList} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
};

export default App;
