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
import Tags from '../common/Tags';

const apiMap = {
  add: {
    location: profileAPI.addZone,
    petTitle: profileAPI.addPetTitle,
    petAge: profileAPI.addPetAge,
  },
  remove: {
    location: profileAPI.removeZone,
    petTitle: profileAPI.removePetTitle,
    petAge: profileAPI.removePetAge,
  },
};

const TasteFormBlock = styled.div``;

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
    age: 0,
    occupation: '',
    location: '강원도',
    houseType: '',
    experience: false,
    liveAlone: false,
    hasPet: false,
    phoneNumber: '',
    description: '',
    profileImage: '',
  });

  useEffect(() => {
    async function setFormAPI() {
      try {
        const response = await profileAPI.getUser();
        setForm(response.data.data);
        console.log('프로필 불러오기 성공');
      } catch (e) {
        console.log('프로필 불러오기 오류');
      }
    }
    setFormAPI();
  }, []);

  const onChangeTags = (e) => {
    console.log(e);
    console.log(e.detail.data.value);
    async function callAPI(e) {
      try {
        const response = await apiMap[e.type][e.detail.tagify.settings.name](
          e.detail.data.value,
        );
        console.log(response);
      } catch (e) {
        console.log('failure');
        console.log(e.response);
      }
    }
    callAPI(e);
  };

  const onChangeCheckbox = (e) => {
    e.persist();
    const { checked, name } = e.target;
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

  const settings = {
    enforceWhitelist: true,
    dropdown: {
      position: 'input',
      enabled: 0,
    },
    callbacks: {
      add: onChangeTags,
      remove: onChangeTags,
    },
  };

  return (
    <TasteFormBlock>
      <p>거래 지역</p>
      <Tags
        settings={{
          ...settings,
          name: 'location',
          whitelist: whiteLocations,
        }}
      />
      <p>품종</p>
      <Tags
        settings={{
          ...settings,
          name: 'petTitle',
          whitelist: whitePetTitles,
        }}
      />
      <p>나이</p>
      <Tags
        settings={{
          ...settings,
          name: 'petAge',
          whitelist: whitePetAges,
        }}
      />
      <p>기타 희망 내용</p>
      <form onSubmit={onSubmit}>
        <Row>
          <label>
            <Input
              name="wantCheckUp"
              type="checkbox"
              width="9rem"
              onChange={onChangeCheckbox}
            />
            <span>#건강검진</span>
          </label>
          <label>
            <Input
              name="wantLineAge"
              type="checkbox"
              width="9rem"
              onChange={onChangeCheckbox}
            />
            <span>#혈통서</span>
          </label>
          <label>
            <Input
              name="wantNeutered"
              type="checkbox"
              width="9rem"
              onChange={onChangeCheckbox}
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
