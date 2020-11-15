import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProfileUserForm from './ProfileUserForm';
import ProfileTasteForm from './ProfileTasteForm';
import ProfileUser from './ProfileUser';
import ProfileCardForm from './ProfileCardForm';

function Profile() {
  return (
    <>
      <Switch>
        <Route path="/profile/user/:id" component={ProfileUser} exact />
        <Route path="/profile/user-form" component={ProfileUserForm} />
        <Route path="/profile/taste-form" component={ProfileTasteForm} />
        <Route path="/profile/card-form" component={ProfileCardForm} />
      </Switch>
    </>
  );
}

export default Profile;
