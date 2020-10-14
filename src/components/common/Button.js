import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  padding: 0.25rem 1rem;
  background: ${(props) => props.background || palette.sub[0]};
  font-size: 0.75rem;
  font-weight: bold;
  color: white;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 1rem;
      padding-bottom: 1rem;
      width: 100%;
      font-size: 0.875rem;
    `}
  ${(props) =>
    props.main &&
    css`
      background: ${palette.main[0]};
      &:hover {
        opacity: 0.8;
      }
    `}
`;

// 자동 import를 위해서 StyledButton을 바로 내보내지 않고, Button컴포넌트를 만들어서 내보냄
const Button = (props) => <StyledButton {...props} />;

export default Button;
