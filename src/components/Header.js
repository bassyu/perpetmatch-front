import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const headerLinks = [
  {
    key: 'petlist',
    children: '입양하기',
    to: '/petlist',
  },
  {
    key: 'petform',
    children: '파양하기',
    to: '/petform',
  },
  {
    key: 'shoplist',
    children: '쇼핑하기',
    to: '/shoplist',
  },
];

const user = '';

const HeaderBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  color: #204030;
`;

const HeaderWrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
  width: 1200px;
  display: flex;
  height: 5rem;
  margin: 0 auto;
  align-items: center;
`;

const HeaderLogo = styled(Link)`
  font-family: 'Cinzel';
  text-decoration: none;
  color: #204030;
  font-size: 1.6rem;
  cursor: pointer;
  margin-right: 3.5rem;
`;

const HeaderLink = styled(Link)`
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: #204030;

  &:hover {
    color: #408060;
  }
  & + & {
    margin-left: 2rem;
  }
`;

const HeaderUser = styled.div`
  font-weight: bold;
  margin-left: auto;
  margin-top: 0.4rem;
  cursor: pointer;
  color: #204030;

  &:hover {
    color: #408060;
  }
`;

const HeaderSignin = styled(Link)`
  color: #204030;
  &:hover {
    color: #408060;
  }
`;

const HeaderLine = styled.hr`
  border: 0;
  height: 0;
  margin: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const Header = () => {
  return (
    <HeaderBlock>
      <HeaderWrapper>
        <HeaderLogo to="/">PERPET MATCH</HeaderLogo>
        {headerLinks.map((i) => (
          <HeaderLink key={i.key} to={i.to}>
            {i.children}
          </HeaderLink>
        ))}
        <HeaderUser>
          {user ? (
            user + '님'
          ) : (
            <HeaderSignin to="/signin">로그인/회원가입</HeaderSignin>
          )}
        </HeaderUser>
      </HeaderWrapper>
      <HeaderLine />
    </HeaderBlock>
  );
};

export default Header;
