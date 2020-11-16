import React from 'react';
import FormTemplate from './FormTemplate';

function NotFound({ location }) {
  return (
    <FormTemplate title="404 NOT FOUND!">
      <p>해당 페이지({location.pathname})를 찾을 수 없습니다.ㅠㅠ</p>
    </FormTemplate>
  );
}

export default NotFound;
