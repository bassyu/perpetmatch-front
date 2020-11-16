import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../lib/styles/palette';
import { Menu, Dropdown } from 'antd';
import client from '../lib/api/client';

const HeaderBlock = styled.div`
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${palette.main};
  color: #204030;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);

  .header-wrapper {
    position: relative;
    width: 80rem;
    height: 4.5rem;
    margin: 0 auto;
    padding: 0 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;

    .logo-area {
      width: 10rem;

      img {
        width: 100%;
      }
    }
    .search-area {
      margin-left: auto;
    }
    .link-area {
      width: 32rem;
      display: flex;
      justify-content: space-between;
    }
    .user-area {
      width: 10rem;
      font-weight: 500;
      cursor: pointer;

      button {
        margin-right: 1rem;
        border: none;
        background: none;
        color: ${palette.gray[0]};
        cursor: pointer;
        outline: none;

        &:hover {
          color: ${palette.gray[4]};
        }
      }
      a {
        color: ${palette.gray[1]};

        &:hover {
          color: ${palette.gray[4]};
        }
      }
      .user {
        margin-left: 1rem;
        font-size: 1rem;
        font-weight: 700;
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
  color: ${palette.gray[1]};
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    color: ${palette.hover};
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

function Header({ user, onSignout }) {
  const { nickname, id, credit } = user;

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link to={`/profile/user/${id}`}>프로필</Link>
      </Menu.Item>
      <Menu.Item key="2" onClick={onSignout}>
        로그아웃
      </Menu.Item>
      <Menu.Divider />
      <Menu.ItemGroup title="보유 껌">
        <Menu.Item key="0">
          <span className="credit">{credit} 껌</span>
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );

  const headerLinks = [
    {
      key: 'commu',
      text: '소통하기',
      to: '/commu',
    },
    {
      key: 'check',
      text: '인증하기',
      to: '/check',
    },
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

  return (
    <>
      <HeaderBlock>
        <div className="header-wrapper">
          <div className="logo-area">
            <Link to="/">
              <img src="/images/common/logo_w.png" alt="logo" />
            </Link>
          </div>
          <div className="link-area">
            {headerLinks.map((i) => (
              <HeaderLink
                key={i.key}
                to={i.to}
                activeStyle={{
                  color: palette.hover,
                }}
              >
                {i.text}
              </HeaderLink>
            ))}
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
}

export default Header;
