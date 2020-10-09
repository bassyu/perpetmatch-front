import React from 'react';
import styled from 'styled-components';
import {
  whiteLocations,
  whitePetTitles,
  whitePetAges,
} from '../../constants/index';
import palette from '../../lib/styles/palette';
import Input from '../common/Input';
import Tags from '../common/Tags';

const ListHeaderBlock = styled.div`
  background-color: #c8e0e0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  .wrapper {
    width: 80rem;
    margin: 0 auto;
    padding: 0.125rem 0;
    background: url('/images/sub/sub_visual1.png') no-repeat center;
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

const ListHeader = ({ form, items, onChange }) => {
  const {
    zones,
    petTitles,
    petAges,
    wantCheckUp,
    wantLineAge,
    wantNeutered,
    credit,
  } = form;
  const settings = {
    enforceWhitelist: true,
    dropdown: {
      position: 'input',
      enabled: 0,
    },
  };
  return (
    <ListHeaderBlock>
      <div className="wrapper">
        <div className="top">
          <p>
            총 <span className="count">{items.length}</span> 아이들이 기다리고
            있어요!
          </p>
          <Input width="32rem" />
        </div>
        <div className="bottom">
          <StyledTags
            name="zones"
            value={zones}
            onChange={onChange}
            settings={{
              ...settings,
              whitelist: whiteLocations,
              placeholder: '지역',
            }}
            width="18rem"
          />
          <StyledTags
            name="petTitles"
            value={petTitles}
            onChange={onChange}
            settings={{
              ...settings,
              whitelist: whitePetTitles,
              placeholder: '견종',
            }}
            width="18rem"
          />
          <StyledTags
            name="petAges"
            value={petAges}
            onChange={onChange}
            settings={{
              ...settings,
              whitelist: whitePetAges,
              placeholder: '나이',
            }}
            width="18rem"
          />
          <StyledInput
            name="credit"
            value={credit}
            placeholder="최대 껌"
            onChange={onChange}
          />
          <p>껌 까지</p>
        </div>
      </div>
    </ListHeaderBlock>
  );
};

export default ListHeader;
