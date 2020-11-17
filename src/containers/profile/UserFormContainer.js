import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserForm from '../../components/profile/UserForm';
import { message } from 'antd';
import * as profileAPI from '../../lib/api/profile';
import { withRouter } from 'react-router-dom';
import { getUser } from '../../modules/profile';

function UserFormContainer({ history }) {
  const dispatch = useDispatch();
  const user = useSelector(({ profile }) => profile.user);
  const [form, setForm] = useState({
    age: 0,
    occupation: '',
    location: '',
    houseType: '',
    experience: false,
    liveAlone: false,
    hasPet: false,
    phoneNumber: '',
    description: '',
    wantCheckUp: false,
    wantLineAge: false,
    wantNeutered: false,
    zones: [],
    petTitles: [],
    petAges: [],
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
    console.log(form);
    try {
      const response = await profileAPI.writeUser({
        ...form,
        age: parseInt(form.age),
      });
      await message.success(response.data.message, 1);
      dispatch(getUser());
      history.push('/profile/taste-form');
    } catch (e) {
      await message.error('프로필 등록 오류', 1);
    }
  };

  useEffect(() => {
    setForm({ ...user });
  }, [user]);

  return (
    <UserForm
      form={form}
      onChange={onChange}
      onChangeCheckbox={onChangeCheckbox}
      onSubmit={onSubmit}
    />
  );
}

export default withRouter(UserFormContainer);
