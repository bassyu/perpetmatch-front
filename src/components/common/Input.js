import React from 'react';
import palette from '../../lib/styles/palette';
import styled from 'styled-components';

const StyledInput = styled.input`
  font-size: 1rem;
  border: solid 0.08rem ${palette.gray[4]};
  padding: 1rem;
  outline: none;
  width: ${({ width }) => width || '100%'};
  &:focus {
    color: $oc-teal-7;
    border: solid 0.08rem ${palette.main[0]};
  }
  & + & {
    margin-top: 1rem;
  }
  &::placeholder {
    font-size: 0.8rem;
  }
`;

const Input = (props) => <StyledInput {...props} />;

export default Input;
