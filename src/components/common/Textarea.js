import React from 'react';
import palette from '../../lib/styles/palette';
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  font-size: 1rem;
  font-family: inherit;
  padding: 0.75rem;
  width: ${({ width }) => width || '100%'};
  height: 5rem;
  border: solid 0.08rem ${palette.gray[4]};
  outline: none;
  resize: none;
  &:focus {
    color: $oc-teal-7;
    border: solid 0.08rem ${palette.main};
  }
  &::placeholder {
    font-size: 0.75rem;
  }
`;

const Textarea = (props) => <StyledTextarea {...props} />;

export default Textarea;
