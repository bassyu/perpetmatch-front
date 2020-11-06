import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const SigninTemplateBlock = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${palette.main};

  display: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  border: solid 1.2rem ${palette.gray[2]};
  padding: 3rem;
  width: 480px;
  background: white;
  border-radius: 2px;

  .logo-area {
    display: block;
    margin-top: 1.5rem;
    margin-bottom: 3rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;

    img {
      width: 10rem;
    }
  }
`;

const SigninTemplate = ({ children }) => {
  return (
    <SigninTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/commu">
            <img src="/images/common/logo_b.png" alt="logo" />
          </Link>
        </div>
        {children}
      </WhiteBox>
    </SigninTemplateBlock>
  );
};

export default SigninTemplate;
