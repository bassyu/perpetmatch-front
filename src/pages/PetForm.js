import React, { useEffect } from 'react';
import FormTemplate from '../components/FormTemplate';
import Form from '../components/pet/Form';
import HeaderContainer from '../containers/common/HeaderContainer';
import { message } from 'antd';
import client from '../lib/api/client';

const PetForm = () => {
  return (
    <FormTemplate title="파양하기">
      <Form />
    </FormTemplate>
  );
};

export default PetForm;
