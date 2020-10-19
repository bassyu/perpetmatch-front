import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProfileUserForm from './ProfileUserForm';
import ProfileTasteForm from './ProfileTasteForm';
import ProfileUser from './ProfileUser';

const Profile = () => {
  return (
    <>
      <Switch>
        <Route path="/profile/user" component={ProfileUser} />
        <Route path="/profile/user-form" component={ProfileUserForm} />
        <Route path="/profile/taste-form" component={ProfileTasteForm} />
      </Switch>
    </>
  );
};

export default Profile;
