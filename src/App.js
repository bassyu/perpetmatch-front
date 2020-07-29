import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header';
import Home from './components/Home';
import PetList from './components/PetList';
import PetForm from './components/PetForm';
import ShopList from './components/ShopList';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/petlist" component={PetList} />
        <Route path="/petform" component={PetForm} />
        <Route path="/shoplist" component={ShopList} />
        <Route path="/signin" component={SignUp} />
      </Switch>
    </div>
  );
};

export default App;
