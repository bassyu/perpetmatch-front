import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HeaderContainer from '../containers/common/HeaderContainer';
import { Card, Modal, Avatar, Tag } from 'antd';
import { UserOutlined, CheckCircleOutlined } from '@ant-design/icons';
import palette from '../lib/styles/palette';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
import { FaBone, FaCommentDots } from 'react-icons/fa';
import getCommaNumber from '../lib/getCommaNumber';
const { Meta } = Card;

const CommuBlock = styled.div`
  background: ${palette.gray[0]};

  .header {
    position: fixed;
    top: 4.5rem;
    left: 0;
    right: 0;
    width: 80rem;
    height: 1rem;
    margin: 0 auto;
    padding: 2rem 8rem;

    .box {
      float: right;
      width: 20rem;
      height: 20rem;

      .top {
        display: flex;
        justify-content: space-between;

        .brief {
          width: 15rem;
          display: flex;
          flex-direction: column;
          justify-content: center;

          .nickname {
            font-size: 1.125rem;
            font-weight: 500;
          }
          .tags {
            font-size: 0.75rem;
            font-weight: 700;
            color: ${palette.gray[6]};

            span + span {
              margin-left: 0.5rem;
            }
          }
        }
      }
      .check-info {
        margin: 0;
        margin-top: 1rem;
        border-top: dashed 0.01rem ${palette.gray[4]};
        padding-top: 1rem;
        color: ${palette.main};
        font-size: 1.125rem;
        font-weight: 500;

        .count {
          font-size: 1.5rem;
          font-weight: 700;
        }
      }
      button {
        margin-top: 1rem;
      }
      .btn-write {
        padding: 0.25rem 1rem;
        background: ${palette.main};
      }
      .btn-check {
        padding: 0.75rem;
        font-size: 1rem;
      }
      .bottom {
        margin-top: 1.5rem;
        color: ${palette.gray[5]};
        font-size: 0.75rem;
        font-weight: 500;

        a {
          color: ${palette.gray[5]};

          &:hover {
            opacity: 0.8;
          }
        }
        div + div {
          margin-top: 0.5rem;
        }
      }
    }
  }
  .wrapper {
    width: 80rem;
    margin: 0 auto;
    padding: 2rem 8rem;

    .cards {
      width: 40rem;

      .ant-card + .ant-card {
        margin-top: 4rem;
      }
      .tag {
        margin-bottom: 1rem;
      }
      .ant-avatar {
        margin-right: 1rem;
      }
      .action-icon {
        padding-top: 0.25rem;
        margin-right: 0.5rem;
      }
    }
  }
`;

const Commu = ({ history, location }) => {
  const [user, setUser] = useState({
    tags: ['태그'],
    profileImage: '',
    nickname: '',
    description: '',
    credit: 0,
  });
  const [cards, setCards] = useState([
    {
      id: 1,
      checked: false,
      nickname: '제니',
      image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
      likes: 107208,
      description: '셀카한번 올려봤어요',
      comments: ['우왕..', '여기서 왜 셀카를?'],
    },
    {
      id: 2,
      checked: false,
      nickname: '김재민',
      image: '',
      likes: 0,
      description: '이거뭐임',
      comments: [],
    },
    {
      id: 3,
      checked: true,
      nickname: '제니',
      image: '',
      likes: 9,
      description: '',
      comments: [],
    },
  ]);

  useEffect(() => {
    if (location.pathname === '/') {
      history.push('/commu');
    }
  }, []);

  useEffect(() => {}, []);

  return (
    <CommuBlock>
      <HeaderContainer />
      <div className="header">
        <div className="box">
          <div className="top">
            <Avatar size={4 * 16} icon={<UserOutlined />} />
            <div className="brief">
              <div className="nickname">유강현</div>
              <div className="tags">
                {user.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <Button className="btn-write">글쓰기</Button>
          <p className="check-info">
            이번달은 총 <span className="count">{getCommaNumber(109)}</span>
            분께서 인증하셨습니다!
          </p>
          <Button className="btn-check" fullWidth>
            나도 인증하기
          </Button>
          <div className="bottom">
            <div>
              <Link to="/about">
                소개 | 도움말 | 홍보센터 | 채용 | 개인정보처리방침 | 약관 | 위치
              </Link>
            </div>
            <div>© 2020 PERPET MATCH from SOFTWARE MAESTRO</div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="cards">
          {cards.map((card) => (
            <Card
              hoverable
              key={card.id}
              title={
                <div>
                  {card.checked && (
                    <div className="tag">
                      <Tag icon={<CheckCircleOutlined />} color="success">
                        AI 인증글
                      </Tag>
                    </div>
                  )}
                  <Avatar size={2 * 16} icon={<UserOutlined />} />
                  {card.nickname}
                </div>
              }
              cover={card.image && <img alt="card-img" src={card.image} />}
              actions={[
                <div key="like">
                  <FaBone className="action-icon" />
                  좋아요
                </div>,
                <div key="comment">
                  <FaCommentDots className="action-icon" />
                  댓글달기
                </div>,
              ]}
            >
              <Meta
                title={`좋아요 ${card.likes}개`}
                description={card.description}
              />
            </Card>
          ))}
        </div>
      </div>
      <div className="modal"></div>
    </CommuBlock>
  );
};

export default Commu;
