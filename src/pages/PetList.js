import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Tags from '../components/common/Tags';
import { locations } from '../constants/index';
import HeaderContainer from '../containers/common/HeaderContainer';
import palette from '../lib/styles/palette';

const PetListBlock = styled.div`
  background-color: white;
  .header {
    background-color: #c8e0e0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    .wrapper {
      width: 80rem;
      margin: 0 auto;
      padding: 0.125rem 0;
      background: url('../images/sub/sub_visual1.png') no-repeat center;
      background-size: cover;
      .top {
        padding-left: 4rem;
        p {
          color: ${palette.main[0]};
          font-size: 2rem;
          font-weight: 700;
          .count {
            font-size: 3rem;
          }
        }
      }
      .bottom {
        padding: 0 1rem;
        display: flex;
        justify-content: space-between;
        margin-top: 4rem;
        p {
          color: ${palette.gray[7]};
          font-weight: 500;
          margin-top: 1rem;
          font-size: 1.25rem;
        }
      }
    }
  }
  .contents {
    width: 80rem;
    margin: 0 auto;
    padding: 0 2rem;
    p {
      color: ${palette.main[0]};
      font-size: 2rem;
      font-weight: 700;
      margin-top: 4rem;
      margin-bottom: 2rem;
      span {
        color: ${palette.gray[5]};
        font-size: 1rem;
        margin-left: 2rem;
      }
    }
    ul {
      margin: 0;
      padding: 0;
      overflow: hidden;
      .item {
        width: 24rem;
        height: 36rem;
        margin: 0;
        margin-bottom: 3rem;
        margin-right: 2rem;

        float: left;
        overflow: hidden;
        img {
          height: 24rem;
          margin-left: -20%;
        }
        .title {
          font-size: 1.25rem;
          font-weight: 500;
          color: ${palette.main[0]};
          border-bottom: 1px solid #d2d2d2;
          padding: 0.5rem 0;
        }
        .tags {
          font-size: 1rem;
          border-bottom: 1px solid #d2d2d2;
          padding: 0.5rem 0.25rem;
          span + span {
            margin-left: 0.5rem;
          }
        }
        .price-area {
          font-size: 2rem;
          color: ${palette.sub[0]};
          .price {
            font-family: Montserrat;
            font-weight: 500;
            font-size: 2.5rem;
            margin-right: 0.5rem;
          }
        }
      }
      .item:nth-child(3n) {
        margin-right: 0;
      }
    }
  }
`;

const StyledTags = styled(Tags)`
  width: ${({ width }) => width};
  margin-right: 1rem;
  .tagify__input {
    height: 2.5rem;
    border: none;
    border-radius: 0.5rem;
  }
`;

const StyledInput = styled(Input)`
  width: 8rem;
  height: 3rem;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  margin-left: 2rem;
`;

const PetList = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      src: '/images/sub/img_adopt1.png',
      title: '[포메] 애교많은 복자 사랑해주실 견주 구합니다.',
      tags: ['남아', '포메라니안', '혈통서'],
      chew: 50000,
    },
    {
      id: 2,
      src: '/images/sub/img_adopt1.png',
      title: '[포메] 애교많은 복자 사랑해주실 견주 구합니다.',
      tags: ['남아', '포메라니안', '혈통서'],
      chew: 50000,
    },
    {
      id: 3,
      src: '/images/sub/img_adopt1.png',
      title: '[포메] 애교많은 복자 사랑해주실 견주 구합니다.',
      tags: ['남아', '포메라니안', '혈통서'],
      chew: 50000,
    },
    {
      id: 4,
      src: '/images/sub/img_adopt1.png',
      title: '[포메] 애교많은 복자 사랑해주실 견주 구합니다.',
      tags: ['남아', '포메라니안', '혈통서'],
      chew: 50000,
    },
    {
      id: 5,
      src: '/images/sub/img_adopt1.png',
      title: '[포메] 애교많은 복자 사랑해주실 견주 구합니다.',
      tags: ['남아', '포메라니안', '혈통서'],
      chew: 50000,
    },
    {
      id: 6,
      src: '/images/sub/img_adopt1.png',
      title: '[포메] 애교많은 복자 사랑해주실 견주 구합니다.',
      tags: ['남아', '포메라니안', '혈통서'],
      chew: 50000,
    },
    {
      id: 7,
      src: '/images/sub/img_adopt1.png',
      title: '[포메] 애교많은 복자 사랑해주실 견주 구합니다.',
      tags: ['남아', '포메라니안', '혈통서'],
      chew: 50000,
    },
  ]);

  return (
    <>
      <HeaderContainer />
      <PetListBlock>
        <div className="header">
          <div className="wrapper">
            <div className="top">
              <p>
                총 <span className="count">{items.length}</span> 아이들이
                기다리고 있어요!
              </p>
              <Input width="32rem" />
            </div>
            <div className="bottom">
              <StyledTags
                placeholder="지역"
                width="18rem"
                settings={{
                  enforceWhitelist: true,
                  whitelist: locations,
                  dropdown: {
                    position: 'input',
                    enabled: 0,
                  },
                  callbacks: {},
                }}
              />
              <StyledTags
                placeholder="견종"
                width="18rem"
                settings={{
                  enforceWhitelist: true,
                  whitelist: locations,
                  dropdown: {
                    position: 'input',
                    enabled: 0,
                  },
                  callbacks: {},
                }}
              />
              <StyledTags
                placeholder="나이"
                width="18rem"
                settings={{
                  enforceWhitelist: true,
                  whitelist: locations,
                  dropdown: {
                    position: 'input',
                    enabled: 0,
                  },
                  callbacks: {},
                }}
              />
              <StyledInput placeholder="최대" />
              <p>껌 까지</p>
            </div>
          </div>
        </div>
        <div className="contents">
          <p>
            베스트 매칭! <span>나에게 꼭 어울릴 만한 친구들이에요</span>
          </p>
          <ul>
            {items.map((i) => (
              <li key={i.id} className="item">
                <Link to="/pet/boadr">
                  <img src="/images/sub/img_adopt1.png" alt="" />
                  <div className="title">
                    [포메] 애교많은 복자 사랑해주실 견주
                  </div>
                  <div className="tags">
                    <span>#강아지</span>
                    <span>#포메라니안</span>
                    <span>#남아</span>
                    <span>#혈통서</span>
                    <span>#건강검진/예방접종</span>
                    <span>#5살</span>
                  </div>
                  <div className="price-area">
                    <span className="price">50,000</span>껌
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </PetListBlock>
    </>
  );
};

export default PetList;
