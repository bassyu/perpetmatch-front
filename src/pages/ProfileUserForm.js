import React from 'react';
import FormTemplate from '../components/FormTemplate';
import UserForm from '../components/profile/UserForm';

const ProfileUserForm = () => {
  return (
    <>
      <FormTemplate title="저는 이런 사람이에요!">
        <UserForm />
      </FormTemplate>
    </>
  );
};

export default ProfileUserForm;
