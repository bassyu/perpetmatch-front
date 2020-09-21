import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';

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
`;

const WhiteBox = styled.div`
  .title-area {
    display: block;
    margin-bottom: 1.25rem;
    text-align: center;
    font-weight: bold;
    font-size: 1.25rem;
    letter-spacing: 2px;
  }
  form {
    p {
      font-size: 0.875rem;
      font-weight: 500;
      margin-top: 1.75rem;
      margin-bottom: 0.5rem;
    }
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.125);
  padding: 3rem 2rem;
  width: 34rem;
  background: white;
  border-radius: 2px;
`;

const FormTemplate = ({ children, title }) => {
  console.log(children);
  return (
    <FormTemplateBlock>
      <WhiteBox>
        <div className="title-area">{title}</div>
        {children}
      </WhiteBox>
    </FormTemplateBlock>
  );
};

export default FormTemplate;
