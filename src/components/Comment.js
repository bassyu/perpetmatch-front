import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';

const CommentBlock = styled.div`
  color: ${palette.main};
  font-size: 0.75rem;
  margin-top: 0.5rem;
  padding-left: 0.2rem;
`;

const Comment = ({ children }) => {
  return <CommentBlock>&#8251; {children}</CommentBlock>;
};

export default Comment;
