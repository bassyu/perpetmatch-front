import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Footer from '../components/Footer';
import HeaderContainer from '../containers/common/HeaderContainer';
import palette from '../lib/styles/palette';
import * as petAPI from '../lib/api/pet';

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
      width: 20rem;

      .title {
        border-bottom: solid 0.25rem;
        padding-bottom: 1.5rem;
        font-size: 1.5rem;
        font-weight: 700;
      }
      p {
        border-bottom: solid 0.125rem ${palette.gray[4]};
        padding-bottom: 0.5rem;
        font-size: 1rem;
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
        color: ${palette.sub[0]};

        .price {
          font-weight: 500;
          font-size: 2.5rem;
          margin-right: 0.25rem;
        }
      }
      .btn-area {
        margin: 2rem 0;

        button {
          width: 9.75rem;
          height: 3rem;
          font-size: 1.125rem;
        }
        button + button {
          margin-left: 0.5rem;
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
      .description {
        font-size: 1.25rem;
      }
    }
  }
`;

const PetBoard = ({ match }) => {
  const id = match.params.id;
  const [data, setData] = useState({
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
  });

  useEffect(() => {
    window.scrollTo({ top: 0 });
    async function getBoardAPI() {
      try {
        const response = await petAPI.getBoard({ id });
        setData(response.data.data);
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
          <div className="title">{data.title}</div>
          <div className="tags">
            {[
              data.zone,
              data.gender && genderMap[data.gender],
              data.petTitle,
              data.petAge,
            ].map((i) => i && <span>#{i}</span>)}
          </div>
          <div className="price-area">
            <span className="price">{data.credit}</span>껌
          </div>
          <div className="btn-area">
            <Button background={'#8164ae'}>신 청</Button>
            <Button>관심글 등록</Button>
          </div>
          <div className="share-area">
            <p>공유하기</p>
            <img src="/images/sub/btn_share1.png" alt="페이스북" />
            <img src="/images/sub/btn_share2.png" alt="카카오톡" />
            <img src="/images/sub/btn_share3.png" alt="공유하기" />
          </div>
        </div>
      </div>
      <div className="context">
        <div className="wrapper">
          <img src={data.boardImage1} alt="boardImage1" />
          <img src={data.boardImage2} alt="boardImage2" />
          <img src={data.boardImage3} alt="boardImage3" />
          <p className="description">{data.description}</p>
        </div>
      </div>
      <Footer />
    </PetBoardBlock>
  );
};

export default PetBoard;
