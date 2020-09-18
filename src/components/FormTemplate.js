import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../lib/styles/palette';

const FormTemplateBlock = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${palette.gray[3]};

  display: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  .title-area {
    display: block;
    margin-bottom: 3rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 3rem;
  width: 480px;
  background: white;
  border-radius: 2px;
`;

const FormTemplate = ({ children }) => {
  console.log(children);
  return (
    <FormTemplateBlock>
      <WhiteBox>
        <div className="title-area">회원가입</div>
        {children}
      </WhiteBox>
    </FormTemplateBlock>
  );
};

export default FormTemplate;
