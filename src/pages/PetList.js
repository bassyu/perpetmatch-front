import React from 'react';
import styled from 'styled-components';
import Input from '../components/common/Input';
import Tags from '../components/common/Tags';
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
      padding: 0.125rem 3rem;
      background: url('../images/sub/sub_visual1.png') no-repeat center;
      background-size: cover;
      .top {
        p {
          color: ${palette.main[0]};
          font-size: 2rem;
          font-weight: 500;
          .count {
            font-size: 3rem;
          }
        }
      }
      .bottom {
        display: flex;
        margin-top: 4rem;
        p {
          margin-top: 0;
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
      font-weight: 600;
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
        height: 30rem;
        background-color: skyblue;
        margin: 0;
        margin-bottom: 3rem;
        margin-right: 2rem;

        float: left;
        overflow: hidden;
      }
      .item:nth-child(3n) {
        margin-right: 0;
      }
    }
  }
`;

const StyledTags = styled(Tags)`
  margin-left: 2rem;
  width: 64rem;
  .tagify__input {
    height: 2.5rem;
    border: none;
  }
`;

const PetList = () => {
  return (
    <>
      <HeaderContainer />
      <PetListBlock>
        <div className="header">
          <div className="wrapper">
            <div className="top">
              <p>
                총 <span className="count">134</span> 아이들이 기다리고 있어요!
              </p>
              <Input width="32rem" />
            </div>
            <div className="bottom">
              <p>태그검색</p>
              <StyledTags />
            </div>
          </div>
        </div>
        <div className="contents">
          <p>
            베스트 매칭! <span>나에게 꼭 어울릴 만한 친구들이에요</span>
          </p>
          <ul>
            <li className="item"></li>
            <li className="item"></li>
            <li className="item"></li>
            <li className="item"></li>
            <li className="item"></li>
            <li className="item"></li>
            <li className="item"></li>
            <li className="item"></li>
            <li className="item"></li>
            <li className="item"></li>
            <li className="item"></li>
            <li className="item"></li>
            <li className="item"></li>
            <li className="item"></li>
          </ul>
        </div>
      </PetListBlock>
    </>
  );
};

export default PetList;
