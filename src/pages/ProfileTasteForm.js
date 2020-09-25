import React from 'react';
import FormTemplate from '../components/FormTemplate';
import TasteForm from '../components/profile/TasteForm';

const ProfileTasteForm = () => {
  return (
    <>
      <FormTemplate title="이런 입양을 원해요!">
        <TasteForm />
      </FormTemplate>
    </>
  );
};

export default ProfileTasteForm;
