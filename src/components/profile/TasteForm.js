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
import { Select } from 'antd';

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
    if (value.filter((x) => whiteLocations.includes(x)).length) {
      setForm({ ...form, zones: value });
    } else if (value.filter((x) => whitePetTitles.includes(x)).length) {
      setForm({ ...form, petTitles: value });
    } else if (value.filter((x) => whitePetAges.includes(x)).length) {
      setForm({ ...form, petAges: value });
    }
  };
  const onChangeCheckbox = (e) => {
    let { name, checked } = e.target;
    setForm({ ...form, [name]: checked });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setForm({ ...form, age: Number(form.age) });
    try {
      const response = await profileAPI.writeUser(form);
      alert(response.data.message);
      history.push('/pet/list');
    } catch (e) {
      alert('프로필 등록 오류');
      console.log(e);
    }
  };

  useEffect(() => {
    async function callAPI() {
      try {
        const response = await profileAPI.getUser();
        console.log(response);
        const {
          zones,
          petTitles,
          petAges,
          wantCheckUp,
          wantLineAge,
          wantNeutered,
        } = response.data.data;

        setForm({
          zones,
          petTitles,
          petAges,
          wantCheckUp,
          wantLineAge,
          wantNeutered,
        });
      } catch (e) {
        console.log('프로필 불러오기 오류');
      }
    }
    callAPI();
  }, []);

  return (
    <TasteFormBlock>
      <p>원하는 거래 지역</p>
      <Select mode="multiple" value={form.zones} onChange={onChangeSelect}>
        {whiteLocations.map((i) => (
          <Option key={i}>{i}</Option>
        ))}
      </Select>
      <p>원하는 품종</p>
      <Select mode="multiple" value={form.petTitles} onChange={onChangeSelect}>
        {whitePetTitles.map((i) => (
          <Option key={i}>{i}</Option>
        ))}
      </Select>
      <p>원하는 나이</p>
      <Select mode="multiple" value={form.petAges} onChange={onChangeSelect}>
        {whitePetAges.map((i) => (
          <Option key={i}>{i}</Option>
        ))}
      </Select>
      <p>기타 희망 내용</p>
      <form onSubmit={onSubmit}>
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
