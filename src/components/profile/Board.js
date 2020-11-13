import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as profileAPI from '../../lib/api/profile';
import palette from '../../lib/styles/palette';
import { Tag } from 'antd';
import { Link } from 'react-router-dom';

const BoardBlock = styled.div`
  overflow: scroll;
  height: 30rem;

  .board {
    height: 8rem;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;

    img {
      width: 6rem;
      height: 6rem;
    }
    .info {
      width: 56rem;
      font-weight: 700;

      p {
        margin: 0;
        padding-top: 0.25rem;
      }
      .title {
        color: ${palette.gray[7]};
        font-size: 1.125rem;
      }
      .tags {
        color: ${palette.gray[5]};

        .tag + .tag {
          margin-left: 0.5rem;
        }
      }
      .credit {
        font-family: Montserrat;
        font-size: 1.5rem;
        color: black;
      }
      .sub {
        font-size: 1rem;
      }
    }
    .ant-tags {
      width: 5rem;
    }
  }
  .board + .board {
    border-top: solid 0.01rem ${palette.gray[6]};
  }
`;

const Board = ({ match }) => {
  const id = match.params.id;
  const [boadrs, setBoards] = useState([
    {
      id: 293,
      title: '버려진 포메 보호하고 있습니다',
      credit: 100000,
      year: 1,
      month: 11,
      tags: [
        '서울특별시',
        '치와와',
        '1년~7년',
        '건강검진증',
        '혈통서',
        '중성화',
      ],
      boardImage1: '',
      hasCheckUp: false,
      hasLineAge: false,
      closed: false,
    },
  ]);

  useEffect(() => {
    async function callAPI() {
      try {
        const reponse = await profileAPI.getUserBoards();
        setBoards(reponse.data.data);
      } catch (e) {
        console.log('게시글 불러오기 오류', e);
      }
    }
    callAPI();
  }, []);

  return (
    <BoardBlock>
      {boadrs.map((board) => (
        <Link className="board" to={`/pet/board/${board.id}`}>
          <img
            src={board.boardImage1 || '/images/sub/no_img.png'}
            alt="board-img"
          />
          <div className="info">
            <p className="title">{board.title}</p>
            <div className="tags">
              {board.tags.map((tag) => (
                <sapn className="tag">#{tag}</sapn>
              ))}
            </div>
            <p className="credit">
              {board.credit}
              <span className="sub">껌</span>
            </p>
          </div>
          <div className="ant-tags">
            {board.closed ? (
              <Tag color="red">입양완료</Tag>
            ) : (
              <Tag color="blue">입양가능</Tag>
            )}
            {board.hasCheckUp && <Tag color="green">건강검진</Tag>}
            {board.hasLineAge && <Tag color="magenta">혈통서</Tag>}
          </div>
        </Link>
      ))}
    </BoardBlock>
  );
};

export default Board;
