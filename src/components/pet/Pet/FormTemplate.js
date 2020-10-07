import React from 'react';
import './FormTemplate.css';

const FormTemplate = ({form}) => {
  return (
    <main className="form-template">
      <div className="form-title">
        파양하기
      </div>
      <section className="form-wrapper">
        {form}
      </section>
      
    </main>
  );
};

export default FormTemplate;