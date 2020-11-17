import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Tag, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const ListBlock = styled.div`
  width: 80rem;
  min-height: 40rem;
  margin: 0 auto;
  padding: 0 2rem;

  p {
    margin-top: 4rem;
    margin-bottom: 2rem;
    color: ${palette.main};
    font-size: 2rem;
    font-weight: 700;

    span {
      margin-left: 2rem;
      color: ${palette.gray[6]};
      font-size: 1rem;
    }
  }
  .boards {
    overflow: hidden;
    margin: 0;
    padding: 0;

    .board {
      float: left;
      overflow: hidden;
      width: 24rem;
      height: 36rem;
      margin: 0;
      margin-bottom: 3rem;
      margin-right: 2rem;

      img {
        height: 24rem;
      }
      .title {
        border-bottom: 0.01rem solid ${palette.gray[4]};
        padding: 0.5rem 0;
        color: ${palette.main};
        font-size: 1.25rem;
        font-weight: 500;
      }
      .tags {
        border-bottom: 0.01rem solid ${palette.gray[4]};
        padding: 0.5rem 0.25rem;
        color: ${palette.gray[7]};
        font-size: 1rem;

        span + span {
          margin-left: 0.5rem;
        }
      }
      .price-area {
        color: ${palette.sub};
        font-family: Montserrat;
        font-size: 2rem;

        .price {
          margin-right: 0.25rem;
          font-weight: 500;
          font-size: 2.5rem;
        }
      }
    }
    .board:nth-child(3n) {
      margin-right: 0;
    }
  }
  .loading-block {
    display: flex;
    justify-content: center;
  }
`;

const List = ({ boards, loading }) => {
  return (
    <ListBlock>
      <p>
        베스트 매칭! <span>나에게 꼭 어울릴 만한 친구들이에요</span>
      </p>
      <ul className="boards">
        {boards.map((board) => (
          <li key={board.id} className="board">
            <Link to={`/pet/board/${board.id}`}>
              <img
                src={board.boardImage1 || '/images/sub/no_img.png'}
                alt="pet-img"
              />
              <div className="title">
                {board.closed ? (
                  <Tag color="red">입양완료</Tag>
                ) : (
                  <Tag color="blue">입양가능</Tag>
                )}
                {board.hasCheckUp && <Tag color="green">건강검진</Tag>}
                {board.hasLineAge && <Tag color="magenta">혈통서</Tag>}
                {board.closed && board.hasCheckUp && board.hasLineAge && <br />}
                {board.title.substr(0, 14)}...
              </div>
              <div className="tags">
                {board.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="price-area">
                <span className="price">{board.credit}</span>껌
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {loading['pet/SEARCH_BOARDS'] && (
        <div className="loading-block">
          <Spin
            indicator={<LoadingOutlined style={{ fontSize: 4 * 16 }} spin />}
          />
        </div>
      )}
    </ListBlock>
  );
};

export default List;
