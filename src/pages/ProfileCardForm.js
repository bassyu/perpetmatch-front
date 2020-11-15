import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../components/common/Input';
import FormTemplate from '../components/FormTemplate';
import { Checkbox, message } from 'antd';
import palette from '../lib/styles/palette';
import Button from '../components/common/Button';
import { withRouter } from 'react-router-dom';
import { FaCcMastercard, FaCcVisa } from 'react-icons/fa';

const iconSize = 3 * 16;

const ProfileCardFormBlock = styled.div`
  .input-area {
    .row {
      display: flex;
    }
    input {
      margin-top: 1rem;
    }
    input[type='radio'] {
      display: none;
    }
    input[type='radio'] + .icon {
      width: 4.5rem;
      height: 4.5rem;
      margin-right: 0.5rem;
      border: solid 0.01rem ${palette.gray[3]};
      padding: 0.5rem;
      text-align: center;
      font-size: 1rem;
      font-weight: 700;
      cursor: pointer;

      &:hover {
        background: #e1eee5;
      }

      p {
        margin: 0;
        color: black;
        font-size: 0.75rem;
      }
    }
    input[type='radio']:checked + .icon {
      background: #e1eee5;
    }
  }

  .checkbox-area {
    margin-top: 2rem;
    border-top: solid 0.01rem ${palette.gray[5]};
    padding-top: 1rem;

    .ant-checkbox-wrapper + .ant-checkbox-wrapper {
      margin: 0;
      margin-top: 0.5rem;
    }
  }

  button {
    margin-top: 2rem;
  }
`;

function ProfileCardForm({ id, history }) {
  const [checkedMap, setCheckedMap] = useState({
    check1: false,
    check2: false,
    check3: false,
  });

  const onChangeCheckbox = (e) => {
    const { name, checked } = e.target;
    setCheckedMap({
      ...checkedMap,
      [name]: checked,
    });
  };
  const onSubmit = (e) => {
    message.success('프로필 저장 완료!', 1);
    history.goBack();
  };

  return (
    <FormTemplate title="신용카드나 체크카드 등록">
      <ProfileCardFormBlock>
        <div className="input-area">
          <div className="row">
            <label>
              <input type="radio" name="payment" />
              <div className="icon">
                <FaCcMastercard size={iconSize} />
              </div>
            </label>
            <label>
              <input type="radio" name="payment" />
              <div className="icon">
                <FaCcVisa size={iconSize} />
              </div>
            </label>
          </div>
          <Input placeholder="카드번호" />
          <Input placeholder="만료 날짜 (월/연도 : 12/22)" />
          <Input placeholder="이름" />
          <Input placeholder="생일" />
          <Input placeholder="생월" />
          <Input placeholder="생년" />
        </div>
        <div className="checkbox-area">
          <Checkbox name="check1" onChange={onChangeCheckbox}>
            PERPET MATCH <a>이용 약관</a> 및 <a>개인정보 처리방침</a>에
            동의합니다.
          </Checkbox>
          <Checkbox name="check2" onChange={onChangeCheckbox}>
            본인의 개인 정보를 제3자에 제공하는 데에 동의합니다.
          </Checkbox>
          <Checkbox name="check3" onChange={onChangeCheckbox}>
            본인의 개인 정보를 결제 서비스업체에 제공하는 데에 동의합니다.
          </Checkbox>
        </div>
        {checkedMap.check1 && checkedMap.check2 && checkedMap.check3 && (
          <Button fullWidth onClick={onSubmit}>
            등록
          </Button>
        )}
      </ProfileCardFormBlock>
    </FormTemplate>
  );
}

export default withRouter(ProfileCardForm);
