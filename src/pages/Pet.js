import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import PetBoard from './PetBoard';
import PetBoardApply from './PetBoardApply';
import PetForm from './PetForm';
import PetList from './PetList';
import Signin from './Signin';

function Pet() {
  return (
    <>
      <Switch>
        <PrivateRoute
          path="/pet/form"
          component={PetForm}
          redirectTo={Signin}
        />
        <Route path="/pet/list" component={PetList} />
        <Route path="/pet/board/:id" component={PetBoard} exact />
        <PrivateRoute
          path="/pet/board/:id/apply"
          component={PetBoardApply}
          redirectTo={Signin}
        />
      </Switch>
    </>
  );
}

export default Pet;
