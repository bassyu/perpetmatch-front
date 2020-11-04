import React from 'react';
import styled from 'styled-components';
import {
  whiteLocations,
  whitePetTitles,
  whitePetAges,
} from '../../constants/index';
import palette from '../../lib/styles/palette';
import Input from '../common/Input';
import { Select } from 'antd';
import getCommaNumber from '../../lib/getCommaNumber';
const { Option } = Select;

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
        margin-top: 1.5rem;
        color: ${palette.main};
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
      .ant-select {
        width: 14rem;
      }
      .ant-select-selector {
        overflow: scroll;
        height: 2.5rem;
      }
    }
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
`;

const ListHeader = ({
  searchForm,
  boardsLength,
  onChange,
  onChangeCheckbox,
  onChangeSelect,
}) => {
  const {
    zones,
    petTitles,
    petAges,
    wantCheckUp,
    wantLineAge,
    wantNeutered,
    expectedFeeForMonth,
  } = searchForm;

  return (
    <ListHeaderBlock>
      <div className="wrapper">
        <div className="top">
          <p>
            총 <span className="count">{getCommaNumber(boardsLength)}</span>
            아이들이 기다리고 있어요!
          </p>
          <Input width="32rem" />
        </div>
        <div className="bottom">
          <Select mode="multiple" value={zones} onChange={onChangeSelect}>
            {whiteLocations.map((i) => (
              <Option className="zones" key={i}>
                {i}
              </Option>
            ))}
          </Select>
          <Select mode="multiple" value={petTitles} onChange={onChangeSelect}>
            {whitePetTitles.map((i) => (
              <Option key={i}>{i}</Option>
            ))}
          </Select>
          <Select mode="multiple" value={petAges} onChange={onChangeSelect}>
            {whitePetAges.map((i) => (
              <Option key={i}>{i}</Option>
            ))}
          </Select>
          <label>
            <Input
              name="wantCheckUp"
              type="checkbox"
              checked={wantCheckUp}
              onChange={onChangeCheckbox}
            />
            <StyledSpan>#건강검진</StyledSpan>
          </label>
          <label>
            <Input
              name="wantLineAge"
              type="checkbox"
              checked={wantLineAge}
              onChange={onChangeCheckbox}
            />
            <StyledSpan>#혈통서</StyledSpan>
          </label>
          <label>
            <Input
              name="wantNeutered"
              type="checkbox"
              checked={wantNeutered}
              onChange={onChangeCheckbox}
            />
            <StyledSpan>#중성화</StyledSpan>
          </label>
          <StyledInput
            type="number"
            name="expectedFeeForMonth"
            value={expectedFeeForMonth}
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
