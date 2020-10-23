import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Footer from '../components/Footer';
import HeaderContainer from '../containers/common/HeaderContainer';
import palette from '../lib/styles/palette';
import * as petAPI from '../lib/api/pet';
import { Tag } from 'antd';
import { Link } from 'react-router-dom';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from 'react-icons/fa';

const genderMap = {
  MALE: '남아',
  FEMALE: '여아',
};

const PetBoardBlock = styled.div`
  background: white;

  .menu {
    position: fixed;
    top: 8rem;
    right: 0;
    left: 0;
    width: 80rem;
    margin: 0 auto;

    .box {
      float: right;
      height: 1rem;
      margin-right: 8rem;
      width: 21rem;

      .ant-tag {
        margin-top: 0.5rem;
      }
      .title {
        border-bottom: solid 0.25rem;
        padding: 1rem 0;
        font-size: 1.5rem;
        font-weight: 700;
      }
      p {
        margin-bottom: 0.5rem;
        border-bottom: solid 0.125rem ${palette.gray[4]};
        padding: 0.5rem 0;
        font-size: 1rem;
        font-weight: 500;
      }
      .tags {
        margin: 1.5rem 0;
        font-size: 1.125rem;
        font-weight: 500;
        color: ${palette.gray[6]};

        span + span {
          margin-left: 0.5rem;
        }
      }
      .price-area {
        font-family: Montserrat;
        font-size: 2rem;
        color: ${palette.sub};

        .price {
          font-weight: 500;
          font-size: 2.5rem;
          margin-right: 0.25rem;
        }
      }
      .btn-area {
        margin: 1rem 0;

        button {
          width: 9.75rem;
          height: 3rem;
          font-size: 1.125rem;
        }
        a + button {
          margin-left: 1rem;
        }
      }
      .share-area {
        img + img {
          margin-left: 0.5rem;
        }
      }
    }
  }
  .context {
    width: 80rem;
    margin: 0 auto;
    padding: 4rem 6rem;

    .wrapper {
      width: 42rem;

      img {
        width: 42rem;
        height: 30rem;
      }
      img + img {
        margin-top: 1rem;
      }
      p {
        border-bottom: solid 0.125rem ${palette.gray[4]};
        padding: 1rem 0;
        font-size: 1.5rem;
        font-weight: 500;
      }
      .description {
        font-size: 1.25rem;
      }
    }
  }
`;

const PetBoard = ({ match }) => {
  const id = match.params.id;
  const [board, setBoard] = useState({
    id: null,
    manager: '',
    title: '.',
    credit: 0,
    zone: '태그',
    gender: '',
    year: 0,
    month: 0,
    petTitle: '',
    petAge: '',
    checkUpImage: '',
    lineAgeImage: '',
    neuteredImage: '',
    description: '반려동물 설명',
    boardImage1: '/images/sub/img_adopt1.png',
    boardImage2: '',
    boardImage3: '',
    closed: false,
  });

  useEffect(() => {
    window.scrollTo({ top: 0 });
    async function getBoardAPI() {
      try {
        const response = await petAPI.getBoard({ id });
        setBoard(response.data.data);
      } catch (e) {
        console.log('불러오기 오류');
      }
    }
    getBoardAPI();
  }, [id]);

  return (
    <PetBoardBlock>
      <HeaderContainer />
      <div className="menu">
        <div className="box">
          {board.closed ? (
            <Tag color="red">입양완료</Tag>
          ) : (
            <Tag color="blue">입양가능</Tag>
          )}
          <div className="title">{board.title}</div>
          <div className="tags">
            {[
              board.zone,
              board.gender && genderMap[board.gender],
              board.petTitle,
              board.petAge,
            ].map((i) => i && <span>#{i}</span>)}
          </div>
          <div className="price-area">
            <span className="price">{board.credit}</span>껌
          </div>
          <div className="btn-area">
            <Link to={`/pet/board/${board.id}/apply`}>
              <Button background={'#8164ae'}>신 청</Button>
            </Link>
            <Button>관심글 등록</Button>
          </div>
          <div className="share-area">
            <p>공유하기</p>
            <a href="http://www.facebook.com">
              <FaFacebookSquare size="3rem" color={palette.facebook} />
            </a>
            <a href="http://www.twitter.com">
              <FaTwitterSquare size="3rem" color={palette.twitter} />
            </a>
            <a href="http://www.instagram.com">
              <FaInstagramSquare size="3rem" color={palette.instagram} />
            </a>
          </div>
        </div>
      </div>
      <div className="context">
        <div className="wrapper">
          <img src={board.boardImage1} alt="boardImage1" />
          <img src={board.boardImage2} alt="boardImage2" />
          <img src={board.boardImage3} alt="boardImage3" />
          <p>아이 설명</p>
          <div className="description">{board.description}</div>
        </div>
      </div>
      <Footer />
    </PetBoardBlock>
  );
};

export default PetBoard;
