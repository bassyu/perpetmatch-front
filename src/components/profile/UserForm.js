import React, { useState } from 'react';
import * as profileAPI from '../../lib/api/profile';
import { locations } from '../../constants/index';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import Input from '../common/Input';
import Select from '../common/Select';
import Textarea from '../common/Textarea';
import { withRouter } from 'react-router-dom';

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
  color: ${palette.main[0]};
  font-size: 0.75rem;
  margin-top: 0.5rem;
  padding-left: 0.2rem;
`;

const UserForm = ({ history }) => {
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
  const onChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };
  const onChangeCheckbox = (e) => {
    const { checked, name } = e.target;
    setForm({ ...form, [name]: checked });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setForm({ ...form, age: Number(form.age) });
    try {
      const response = await profileAPI.writeUser(form);
      alert(response.data.message);
      history.push('/profile/taste-form');
    } catch {
      alert('프로필 등록 오류');
    }
  };

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
              onChange={onChange}
            />
          </div>
          <div>
            <p>직업</p>
            <Input
              name="occupation"
              textAlign="center"
              width="16rem"
              onChange={onChange}
            />
          </div>
        </Row>
        <p>전화번호</p>
        <Input
          name="phoneNumber"
          textAlign="center"
          placeholder="숫자만 입력"
          onChange={onChange}
        />
        <Comment>
          &#8251;
          {' 전화번호는 입양신청을 제외하고 공개되지 않습니다.'}
        </Comment>
        <Row>
          <div>
            <p>지역</p>
            <Select name="location" width="7rem" onChange={onChange}>
              {locations.map((i) => (
                <option key={i} value={i}>
                  #{i}
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
              />
              <span>#경험</span>
            </label>
          </div>
        </Row>
        <p>주택</p>
        <Row>
          <label>
            <Input
              type="radio"
              name="houseType"
              value="apartment"
              width="9rem"
              onClick={onChange}
            />
            <span>#공동주택</span>
          </label>
          <label>
            <Input
              type="radio"
              name="houseType"
              value="house"
              width="9rem"
              onClick={onChange}
            />
            <span>#단독주택</span>
          </label>
          <label>
            <Input
              type="radio"
              name="houseType"
              value="etc"
              width="9rem"
              onClick={onChange}
            />
            <span>#비주택</span>
          </label>
        </Row>
        {form.houseType && (
          <Comment>&#8251;{commentMap[form.houseType]}</Comment>
        )}
        <p>한줄소개</p>
        <Textarea name="description" onChange={onChange} />
        <ButtonWithMarginTop fullWidth>저장</ButtonWithMarginTop>
      </form>
    </UserFormBlock>
  );
};

export default withRouter(UserForm);
