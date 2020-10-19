import React from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Order from '../components/profile/Order';
import HeaderContainer from '../containers/common/HeaderContainer';
import palette from '../lib/styles/palette';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const headerLinks = [
  {
    text: '주문내역',
    to: '/profile/user/order',
  },
  {
    text: '관심글',
    to: '/profile/user/like',
  },
  {
    text: '신청한글',
    to: '/profile/user/apply',
  },
  {
    text: '파양관리',
    to: '/profile/user/board',
  },
];

const ProfileUserBlock = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  padding-top: 7rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
  background: white;

  .content {
    width: 80rem;
    padding: 0 4rem;

    .user-header {
      margin: 0 auto;

      .info {
        height: 7rem;
        display: flex;
        justify-content: space-between;

        .brief {
          width: 28rem;

          .top {
            border-bottom: solid 0.25rem black;
            padding-bottom: 0.5rem;
            display: flex;
            justify-content: space-between;
            font-weight: 700;

            .username {
              font-size: 1.5rem;
            }
            a {
              padding-top: 0.5rem;
              color: ${palette.sub[0]};
            }
          }
        }
        .description {
          width: 32rem;
          border: solid 0.125rem ${palette.gray[2]};
          padding: 1rem;
        }
      }
      .link-area {
        height: 4rem;
        margin-top: 2.5rem;
        border-top: solid 0.125rem ${palette.gray[1]};
        border-bottom: solid 0.125rem ${palette.gray[1]};
        display: flex;
        justify-content: space-around;
        background: ${palette.gray[0]};

        a {
          border-bottom: solid 0.25rem ${palette.gray[0]};
          width: 8rem;
          line-height: 3.25rem;
          text-align: center;
          color: ${palette.gray[6]};
          font-size: 1.125rem;
          font-weight: 700;
        }
      }
    }
  }
`;

const ProfileUser = () => {
  return (
    <ProfileUserBlock>
      <HeaderContainer />
      <div className="content">
        <div className="user-header">
          <div className="info">
            <Avatar
              shape="square"
              size={7 * 16}
              icon={<UserOutlined />}
              src="/images/sub/img_receive1.png"
            />
            <div className="brief">
              <div className="top">
                <span className="username">유강현님</span>
                <Link>프로필수정</Link>
              </div>
              <div className="tags">태구</div>
            </div>
            <div className="description">설명설명</div>
          </div>
          <div className="link-area">
            {headerLinks.map((i) => (
              <NavLink
                key={i.to}
                to={i.to}
                activeStyle={{
                  borderBottom: `solid 0.25rem ${palette.sub[0]}`,
                  color: palette.sub[0],
                }}
              >
                {i.text}
              </NavLink>
            ))}
          </div>
        </div>
        <Switch>
          <Route to="/profile/user/order" component={Order} />
        </Switch>
      </div>
    </ProfileUserBlock>
  );
};

export default ProfileUser;
