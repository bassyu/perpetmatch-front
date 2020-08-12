import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.sub[0]};
  &:hover {
    //background: ${palette.sub[1]};
    opacity: 0.8;
  }
  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
  ${(props) =>
    props.main &&
    css`
      background: ${palette.main[0]};
      &:hover {
        //background: ${palette.main[1]};
        opacity: 0.8;
      }
    `}
`;

// 자동 import를 위해서 StyledButton을 바로 내보내지 않고, Button컴포넌트를 만들어서 내보냄
const Button = (props) => <StyledButton {...props} />;

export default Button;
