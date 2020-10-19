import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../lib/styles/palette';
import { GoSearch } from 'react-icons/go';
import { Menu, Dropdown } from 'antd';

const headerLinks = [
  {
    key: 'petlist',
    text: '입양하기',
    to: '/pet/list',
  },
  {
    key: 'petform',
    text: '파양하기',
    to: '/pet/form',
  },
  {
    key: 'shoplist',
    text: '쇼핑하기',
    to: '/shop/list/main',
  },
];

const HeaderBlock = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${palette.main[0]};
  color: #204030;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);

  .wrapper {
    position: relative;
    width: 80rem;
    height: 4.5rem;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    color: white;

    .logo-area {
      margin-right: 4rem;
      img {
        width: 10rem;
      }
    }
    .search-area {
      margin-left: auto;
      button {
        background: none;
        outline: none;
        border: none;
        color: ${palette.gray[0]};
        cursor: pointer;
        &:hover {
          color: ${palette.gray[4]};
        }
      }
    }
    .user-area {
      margin-left: 2rem;
      font-weight: bold;
      cursor: pointer;

      a {
        color: ${palette.gray[1]};

        &:hover {
          color: ${palette.gray[4]};
        }
      }
      .user {
        margin-left: 1rem;
        font-size: 1rem;
        text-decoration: underline;

        &:hover {
          color: ${palette.gray[4]};
        }
      }
    }
  }
`;

const HeaderLink = styled(NavLink)`
  padding-top: 0.4rem;
  cursor: pointer;
  white-space: pre;
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    color: ${palette.main[1]};
  }
  & + & {
    margin-left: 3rem;
  }
`;

const HeaderLine = styled.hr`
  border: 0;
  height: 0;
  margin: 0;
  //border-top: 1px solid rgba(0, 0, 0, 0.3);
`;

const Spacer = styled.div`
  height: 4.5rem;
`;

const Header = ({ nickname, onSignout }) => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="/profile/user">프로필</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2" onClick={onSignout}>
        로그아웃
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <HeaderBlock>
        <div className="wrapper">
          <div className="logo-area">
            <Link to="/">
              <img src="/images/common/logo_w.png" alt="logo" />
            </Link>
          </div>
          {headerLinks.map((i) => (
            <HeaderLink
              key={i.key}
              to={i.to}
              activeStyle={{
                color: palette.main[1],
              }}
            >
              {i.text}
            </HeaderLink>
          ))}
          <div className="search-area">
            <button>
              <GoSearch />
            </button>
          </div>
          <div className="user-area">
            {nickname ? (
              <Dropdown overlay={menu} placement="bottomRight">
                <span>
                  환영합니다!<span className="user">{nickname}님</span>
                </span>
              </Dropdown>
            ) : (
              <Link to="/signin">회원가입 / 로그인</Link>
            )}
          </div>
        </div>
        <HeaderLine />
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
