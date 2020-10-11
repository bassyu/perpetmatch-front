import React, { useState } from 'react';
//import FormTemplate from '../components/FormTemplate';
import Form from '../components/pet/Form';

const PetForm = () => {
  const [dataURL, setDataURL] = useState('');

  const onLoadImg = (e) => {
    e.persist();
    console.log(e);
    const render = new FileReader();
    render.onload = () => {
      setDataURL(render.result);
    };
    render.readAsDataURL(e.target.files[0]);
  };

  return (
    <>
      <Form />
      <input type="file" onChange={onLoadImg} />
      <img src={dataURL} />
    </>
  );
};

export default PetForm;
