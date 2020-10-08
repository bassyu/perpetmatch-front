import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PetBoard from './PetBoard';
import PetForm from './PetForm';
import PetList from './PetList';

const Pet = () => {
  return (
    <>
      <Switch>
        <Route path="/pet/form" component={PetForm} />
        <Route path="/pet/list" component={PetList} />
        <Route path="/pet/boadr" component={PetBoard} />
      </Switch>
    </>
  );
};

export default Pet;