import React, { useEffect, useState } from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Order from '../components/profile/Order';
import HeaderContainer from '../containers/common/HeaderContainer';
import palette from '../lib/styles/palette';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import * as profileAPI from '../lib/api/profile';
import Board from '../components/profile/Board';

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
              color: ${palette.sub};
            }
          }
          .tags {
            margin-top: 0.5rem;

            .tag + .tag {
              margin-left: 0.5rem;
            }
          }
        }
        .description {
          width: 32rem;
          border: solid 0.125rem ${palette.gray[2]};
          padding: 1rem;
        }
      }
      .credit-area {
        padding: 1rem 0;
        display: flex;
        justify-content: space-between;
        color: ${palette.sub};
        font-family: Montserrat;
        font-size: 2rem;
        font-weight: 500;
      }
      .link-area {
        height: 4rem;
        margin-bottom: 2rem;
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

function ProfileUser({ match }) {
  const id = match.params.id;
  const [user, setUser] = useState({
    tags: [],
    profileImage: '',
    nickname: '',
    description: '',
    credit: 0,
  });

  useEffect(() => {
    async function callAPI() {
      try {
        const response = await profileAPI.getUserBreif({ id });
        setUser(response.data.data);
      } catch (e) {
        console.log('불러오기 오류');
      }
    }
    callAPI();
  }, [id]);

  const headerLinks = [
    {
      text: '주문내역',
      to: `/profile/user/${id}/order`,
    },
    {
      text: '관심글',
      to: `/profile/user/${id}/like`,
    },
    {
      text: '신청한글',
      to: `/profile/user/${id}/apply`,
    },
    {
      text: '파양관리',
      to: `/profile/user/${id}/board`,
    },
  ];

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
              src={user.profileImage}
            />
            <div className="brief">
              <div className="top">
                <span className="username">{user.nickname}님</span>
                <Link to="/profile/user-form">프로필수정</Link>
              </div>
              <div className="tags">
                {user.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="description">{user.description}</div>
          </div>
          <div className="credit-area">
            <div />
            <div>{user.credit}껌</div>
          </div>
          <div className="link-area">
            {headerLinks.map((i) => (
              <NavLink
                key={i.to}
                to={i.to}
                activeStyle={{
                  borderBottom: `solid 0.25rem ${palette.sub}`,
                  color: palette.sub,
                }}
              >
                {i.text}
              </NavLink>
            ))}
          </div>
        </div>
        <Switch>
          <Route
            path={['profile/user/:id', '/profile/user/:id/order']}
            component={Order}
            exact
          />
          <Route path="/profile/user/:id/board" component={Board} />
        </Switch>
      </div>
    </ProfileUserBlock>
  );
}

export default ProfileUser;
