import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import {
  whiteLocations,
  whitePetTitles,
  whitePetAges,
} from '../../constants/index';
import * as profileAPI from '../../lib/api/profile';
import Button from '../common/Button';
import Input from '../common/Input';
import { Select, message } from 'antd';
import palette from '../../lib/styles/palette';
const { Option } = Select;

const TasteFormBlock = styled.div`
  .ant-select {
    width: 100%;
  }
  .ant-select-selector {
    min-height: 4rem;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;

  input + input {
    margin-left: 1rem;
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 3rem;
`;

const Comment = styled.div`
  color: ${palette.main};
  font-size: 0.75rem;
  margin-top: 0.5rem;
  padding-left: 0.2rem;
`;

const TasteForm = ({ history }) => {
  const [form, setForm] = useState({
    zones: [],
    petTitles: [],
    petAges: [],
    wantCheckUp: false,
    wantLineAge: false,
    wantNeutered: false,
  });

  const onChangeSelect = (value) => {
    if (!value.length) {
      return;
    }
    let newForm = { ...form };
    if (value.filter((i) => whiteLocations.includes(i)).length) {
      newForm = { ...form, zones: value };
    } else if (value.filter((i) => whitePetTitles.includes(i)).length) {
      newForm = { ...form, petTitles: value };
    } else if (value.filter((i) => whitePetAges.includes(i)).length) {
      newForm = { ...form, petAges: value };
    }
    setForm(newForm);
  };
  const onChangeCheckbox = (e) => {
    let { name, checked } = e.target;
    setForm({ ...form, [name]: checked });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await profileAPI.writeUser(form);
      await message.success(response.data.message, 1);
      history.push('/pet/list');
    } catch (e) {
      await message.error('프로필 등록 오류', 1);
      console.log(e);
    }
  };

  useEffect(() => {
    async function callAPI() {
      try {
        const response = await profileAPI.getUser();
        const {
          age,
          occupation,
          location,
          houseType,
          experience,
          liveAlone,
          hasPet,
          expectedFeeForMonth,
          phoneNumber,
          description,
          profileImage,
          wantCheckUp,
          wantLineAge,
          wantNeutered,
          zones,
          petTitles,
          petAges,
        } = response.data.data;
        setForm({
          age,
          occupation,
          location,
          houseType,
          experience,
          liveAlone,
          hasPet,
          expectedFeeForMonth,
          phoneNumber,
          description,
          profileImage,
          wantCheckUp,
          wantLineAge,
          wantNeutered,
          zones,
          petTitles,
          petAges,
        });
      } catch (e) {
        console.log('프로필 불러오기 오류');
      }
    }
    callAPI();
  }, []);

  return (
    <TasteFormBlock>
      <form onSubmit={onSubmit}>
        <p>원하는 거래 지역</p>
        <Select mode="multiple" value={form.zones} onChange={onChangeSelect}>
          {whiteLocations.map((i) => (
            <Option key={i}>{i}</Option>
          ))}
        </Select>
        {form.zones.length ? null : (
          <Comment>&#8251; 최소 1개 이상 적어주세요!</Comment>
        )}
        <p>원하는 품종</p>
        <Select
          mode="multiple"
          value={form.petTitles}
          onChange={onChangeSelect}
        >
          {whitePetTitles.map((i) => (
            <Option key={i}>{i}</Option>
          ))}
        </Select>
        {form.petTitles.length ? null : (
          <Comment>&#8251; 최소 1개 이상 적어주세요!</Comment>
        )}
        <p>원하는 나이</p>
        <Select mode="multiple" value={form.petAges} onChange={onChangeSelect}>
          {whitePetAges.map((i) => (
            <Option key={i}>{i}</Option>
          ))}
        </Select>
        {form.petAges.length ? null : (
          <Comment>&#8251; 최소 1개 이상 적어주세요!</Comment>
        )}
        <p>기타 희망 내용</p>
        <Row>
          <label>
            <Input
              name="wantCheckUp"
              type="checkbox"
              width="9rem"
              onChange={onChangeCheckbox}
              checked={form.wantCheckUp}
            />
            <span>#건강검진</span>
          </label>
          <label>
            <Input
              name="wantLineAge"
              type="checkbox"
              width="9rem"
              onChange={onChangeCheckbox}
              checked={form.wantLineAge}
            />
            <span>#혈통서</span>
          </label>
          <label>
            <Input
              name="wantNeutered"
              type="checkbox"
              width="9rem"
              onChange={onChangeCheckbox}
              checked={form.wantNeutered}
            />
            <span>#중성화</span>
          </label>
        </Row>
        <ButtonWithMarginTop fullWidth>저장</ButtonWithMarginTop>
      </form>
    </TasteFormBlock>
  );
};

export default withRouter(TasteForm);
