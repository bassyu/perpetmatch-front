import React from 'react';
import './FormTemplate.css';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

const FormTemplateBlock = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${palette.gray[2]};

  display: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

const FormTemplate = ({ form }) => {
  return (
    <FormTemplateBlock>
      <main className="form-template">
        <div className="form-title">파양하기</div>
        <section className="form-wrapper">{form}</section>
      </main>
    </FormTemplateBlock>
  );
};

export default FormTemplate;
