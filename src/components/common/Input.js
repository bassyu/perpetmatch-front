import React from 'react';
import palette from '../../lib/styles/palette';
import styled from 'styled-components';

const StyledInput = styled.input`
  font-size: 1rem;
  font-family: inherit;
  border: solid 0.08rem ${palette.gray[4]};
  padding: 0.75rem;
  outline: none;
  width: ${({ width }) => width || '100%'};
  text-align: ${({ textAlign }) => textAlign || 'left'};
  &:focus {
    color: $oc-teal-7;
    border: solid 0.08rem ${palette.main[0]};
  }
  &::placeholder {
    font-size: 0.75rem;
    text-align: left;
  }
  &[type='checkbox'],
  &[type='radio'] {
    display: none;
  }
  &[type='checkbox'] + span,
  &[type='radio'] + span {
    font-size: 1rem;
    display: inline-block;
    background: none;
    padding: 0.75rem;
    width: ${({ width }) => width || '100%'};
    text-align: center;
    border: solid 0.08rem ${palette.gray[4]};
    cursor: pointer;
    user-select: none;
  }
  &[type='checkbox']:checked + span,
  &[type='radio']:checked + span {
    border: solid 0.08rem ${palette.sub[0]};
    background: ${palette.sub[0]};
    color: #fff;
  }
`;

const Input = (props) => <StyledInput {...props} />;

export default Input;
