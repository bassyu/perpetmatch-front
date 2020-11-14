import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PetBoard from './PetBoard';
import PetBoardApply from './PetBoardApply';
import PetForm from './PetForm';
import PetList from './PetList';

function Pet() {
  return (
    <>
      <Switch>
        <Route path="/pet/form" component={PetForm} />
        <Route path="/pet/list" component={PetList} />
        <Route path="/pet/board/:id" component={PetBoard} exact />
        <Route path="/pet/board/:id/apply" component={PetBoardApply} />
      </Switch>
    </>
  );
}

export default Pet;
