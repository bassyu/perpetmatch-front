import React from 'react';
import palette from '../../lib/styles/palette';
import styled from 'styled-components';

import tagify from '@yaireo/tagify/dist/react.tagify'; // React-wrapper file
import '@yaireo/tagify/dist/tagify.css'; // Tagify CSS

const StyledTags = styled(tagify)`
  border: none;
  .tagify__input {
    font-size: 1rem;
    border: solid 0.08rem ${palette.gray[4]};
    padding: 0.75rem;
    outline: none;
    width: ${({ width }) => width || '100%'};
    text-align: ${({ textAlign }) => textAlign || 'left'};
    order: -1;
    margin: 0;
    height: 3.25rem;
  }
`;

const Tags = (props) => <StyledTags {...props} />;

export default Tags;
