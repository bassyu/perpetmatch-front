import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import UserForm from '../../components/profile/UserForm';
import { message } from 'antd';
import * as profileAPI from '../../lib/api/profile';
import { withRouter } from 'react-router-dom';

function UserFormContainer({ history }) {
  const user = useSelector(({ profile }) => profile.user);
  const [form, setForm] = useState({ ...user });

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
    try {
      const response = await profileAPI.writeUser({
        ...form,
        age: parseInt(form.age),
      });
      await message.success(response.data.message, 1);
      history.push('/profile/taste-form');
    } catch (e) {
      await message.error('프로필 등록 오류', 1);
    }
  };

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
