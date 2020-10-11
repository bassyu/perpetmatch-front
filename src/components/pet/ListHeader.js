import React from 'react';
import styled from 'styled-components';
import {
  whiteLocations,
  whitePetTitles,
  whitePetAges,
} from '../../constants/index';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
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
      margin-top: 4rem;
      padding: 0 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        margin-top: 1rem;
        color: ${palette.gray[7]};
        font-weight: 500;
        font-size: 1.25rem;
      }
    }
  }
`;

const StyledTags = styled(Tags)`
  width: 14rem;
  margin-right: 1rem;
  .tagify__input {
    height: 2.5rem;
    border: none;
    border-radius: 0.5rem;
  }
`;

const StyledSpan = styled.span`
  width: 6rem !important;
  height: 2.5rem;
  margin-left: 0.5rem;
  font-size: 0.75rem !important;
  font-weight: 500 !important;
`;

const StyledInput = styled(Input)`
  width: 6rem;
  height: 2.5rem;
  margin-left: 1rem;
  border: white;
`;

const ListHeader = ({ searchForm, boards, onChange }) => {
  const {
    zones,
    petTitles,
    petAges,
    wantCheckUp,
    wantLineAge,
    wantNeutered,
    credit,
  } = searchForm;
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
            총 <span className="count">{boards.length}</span> 아이들이 기다리고
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
          />
          <label>
            <Input
              name="wantCheckUp"
              type="checkbox"
              checked={wantCheckUp}
              onChange={onChange}
            />
            <StyledSpan>#건강검진</StyledSpan>
          </label>
          <label>
            <Input
              name="wantLineAge"
              type="checkbox"
              checked={wantLineAge}
              onChange={onChange}
            />
            <StyledSpan>#혈통서</StyledSpan>
          </label>
          <label>
            <Input
              name="wantNeutered"
              type="checkbox"
              checked={wantNeutered}
              onChange={onChange}
            />
            <StyledSpan>#중성화</StyledSpan>
          </label>
          <StyledInput
            type="number"
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
