import React from 'react';
import FormTemplate from '../components/FormTemplate';
import UserFormContainer from '../containers/profile/UserFormContainer';

function ProfileUserForm() {
  return (
    <>
      <FormTemplate title="저는 이런 사람이에요!">
        <UserFormContainer />
      </FormTemplate>
    </>
  );
}

export default ProfileUserForm;
