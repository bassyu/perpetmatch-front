import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProfileUserForm from './ProfileUserForm';
import ProfileTasteForm from './ProfileTasteForm';
import ProfileUser from './ProfileUser';
import ProfileCardForm from './ProfileCardForm';
import PrivateRoute from '../components/PrivateRoute';
import Signin from './Signin';

function Profile() {
  return (
    <>
      <Switch>
        <Route path="/profile/user/:id" component={ProfileUser} />
        <PrivateRoute
          path="/profile/user-form"
          component={ProfileUserForm}
          redirectTo={Signin}
        />
        <PrivateRoute
          path="/profile/taste-form"
          component={ProfileTasteForm}
          redirectTo={Signin}
        />
        <PrivateRoute
          path="/profile/card-form"
          component={ProfileCardForm}
          redirectTo={Signin}
        />
      </Switch>
    </>
  );
}

export default Profile;
