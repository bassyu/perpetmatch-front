import React from 'react';
import palette from '../../lib/styles/palette';
import styled from 'styled-components';

const StyledSelect = styled.select`
  font-size: 1rem;
  font-family: inherit;
  color: white;
  padding: 0.75rem;
  outline: none;
  width: ${({ width }) => width || '100%'};
  text-align-last: center;
  border: solid 0.08rem ${palette.sub};
  background: ${palette.sub};
  -webkit-appearance: none;
`;

const Select = (props) => <StyledSelect {...props} />;

export default Select;
