import React, { useEffect, useState } from 'react';
import * as profileAPI from '../../lib/api/profile';
import { whiteLocations } from '../../constants/index';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import Input from '../common/Input';
import Select from '../common/Select';
import Textarea from '../common/Textarea';
import { withRouter } from 'react-router-dom';
import { message } from 'antd';

const commentMap = {
  apartment: ' 아파트, 연립주택, 대세대주택, 기숙사',
  house: ' 단독주택, 다중주택, 다가구주택, 공관',
  etc: ' 오피스텔, 도시형생활주택, 주상복합',
};

const UserFormBlock = styled.div``;

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

const UserForm = ({ history }) => {
  const [form, setForm] = useState({
    age: 0,
    occupation: '',
    location: '강원도',
    houseType: 'apartment',
    experience: false,
    liveAlone: false,
    hasPet: false,
    phoneNumber: '',
    description: '',
    profileImage: '',
    expectedFeeForMonth: 150000,
  });

  const onChange = (e) => {
    console.log(e.target.value);
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };
  const onChangeCheckbox = (e) => {
    const { checked, name } = e.target;
    setForm({ ...form, [name]: checked });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log({ ...form, age: Number(form.age) });
      const response = await profileAPI.writeUser({
        ...form,
        age: Number(form.age),
      });
      await message.success(response.data.message, 1);
      history.push('/profile/taste-form');
    } catch (e) {
      await message.error('프로필 등록 오류', 1);
    }
  };

  useEffect(() => {
    async function callAPI() {
      try {
        const response = await profileAPI.getUser();
        console.log({ ...response.data.data });
        setForm({ ...response.data.data });
      } catch (e) {
        console.log('프로필 불러오기 오류');
      }
    }
    callAPI();
  }, []);

  return (
    <UserFormBlock>
      <form onSubmit={onSubmit}>
        <Row>
          <div>
            <p>나이</p>
            <Input
              name="age"
              type="number"
              textAlign="center"
              width="12rem"
              value={form.age}
              onChange={onChange}
            />
          </div>
          <div>
            <p>직업</p>
            <Input
              name="occupation"
              textAlign="center"
              width="16rem"
              value={form.occupation}
              onChange={onChange}
            />
          </div>
        </Row>
        <p>전화번호</p>
        <Input
          name="phoneNumber"
          textAlign="center"
          placeholder="숫자만 입력"
          value={form.phoneNumber}
          onChange={onChange}
        />
        <Comment>
          &#8251;
          {' 전화번호는 입양신청을 제외하고 공개되지 않습니다.'}
        </Comment>
        <Row>
          <div>
            <p>사는 곳</p>
            <Select
              name="location"
              width="7rem"
              onChange={onChange}
              value={form.location}
            >
              {whiteLocations.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <p>혼자 사는 중</p>
            <label>
              <Input
                name="liveAlone"
                type="checkbox"
                width="7rem"
                onChange={onChangeCheckbox}
                checked={form.liveAlone}
              />
              <span>#1인가구</span>
            </label>
          </div>
          <div>
            <p>반려동물 기르는 중</p>
            <label>
              <Input
                name="hasPet"
                type="checkbox"
                width="7rem"
                onChange={onChangeCheckbox}
                checked={form.hasPet}
              />
              <span>#보호자</span>
            </label>
          </div>
          <div>
            <p>반려동물 경험</p>
            <label>
              <Input
                name="experience"
                type="checkbox"
                width="7rem"
                onChange={onChangeCheckbox}
                checked={form.experience}
              />
              <span>#경험</span>
            </label>
          </div>
        </Row>
        <p>주거형태</p>
        <Row>
          <label>
            <Input
              type="radio"
              name="houseType"
              value="apartment"
              width="9rem"
              onChange={onChange}
              checked={form.houseType === 'apartment'}
            />
            <span>#공동주택</span>
          </label>
          <label>
            <Input
              type="radio"
              name="houseType"
              value="house"
              width="9rem"
              onChange={onChange}
              checked={form.houseType === 'house'}
            />
            <span>#단독주택</span>
          </label>
          <label>
            <Input
              type="radio"
              name="houseType"
              value="etc"
              width="9rem"
              onChange={onChange}
              checked={form.houseType === 'etc'}
            />
            <span>#비주택</span>
          </label>
        </Row>
        {form.houseType && (
          <Comment>&#8251;{commentMap[form.houseType]}</Comment>
        )}
        <p>한줄소개</p>
        <Textarea
          name="description"
          onChange={onChange}
          value={form.description}
        />
        <ButtonWithMarginTop fullWidth>저장</ButtonWithMarginTop>
      </form>
    </UserFormBlock>
  );
};

export default withRouter(UserForm);
