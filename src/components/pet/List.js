import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const ListBlock = styled.div`
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
`;

const ListItems = styled.ul`
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
      border-bottom: 1px solid ${palette.gray[4]};
      padding: 0.5rem 0;
    }
    .tags {
      font-size: 1rem;
      border-bottom: 1px solid ${palette.gray[4]};
      padding: 0.5rem 0.25rem;
      span + span {
        margin-left: 0.5rem;
      }
    }
    .price-area {
      font-family: Montserrat;
      font-size: 2rem;
      color: ${palette.sub[0]};
      .price {
        font-weight: 500;
        font-size: 2.5rem;
        margin-right: 0.25rem;
      }
    }
  }
  .item:nth-child(3n) {
    margin-right: 0;
  }
`;

const List = ({ boards }) => {
  return (
    <ListBlock>
      <p>
        베스트 매칭! <span>나에게 꼭 어울릴 만한 친구들이에요</span>
      </p>
      <ListItems>
        {boards.map((i) => (
          <li key={i.id} className="item">
            <Link to={`/pet/board/${i.id}`}>
              <img src={i.boardImage1} alt="pet-img" />
              <div className="title">{i.title}</div>
              <div className="tags">
                {i.tags.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
              <div className="price-area">
                <span className="price">{i.credit}</span>껌
              </div>
            </Link>
          </li>
        ))}
      </ListItems>
    </ListBlock>
  );
};

export default List;
