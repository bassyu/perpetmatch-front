import React from 'react';
import styled from 'styled-components';
import { locations, petTitles } from '../../constants/index';
import * as profileAPI from '../../lib/api/profile';
import Button from '../common/Button';
import Input from '../common/Input';
import Tags from '../common/Tags';

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

const TasteForm = () => {
  const onChange = 1;
  const onAdd = (e) => {
    profileAPI.writeZone(e.target.value);
  };
  return (
    <>
      <TasteFormBlock>
        <form onSubmit={1}>
          <p>거래 지역</p>
          <Tags
            settings={{
              whitelist: locations,
              dropdown: {
                position: 'input',
                enabled: 0,
              },
              callbacks: {
                add: (e) => console.log('add:', e.target.value),
                remove: (e) => console.log('remove:', e.target.value),
              },
            }}
          />
          <p>품종</p>
          <Tags
            settings={{
              whitelist: petTitles,
              dropdown: {
                position: 'input',
                enabled: 0,
              },
              callbacks: {
                add: (e) => console.log('add:', e.target.value),
                remove: (e) => console.log('remove:', e.target.value),
              },
            }}
          />
          <p>나이</p>
          <Row>
            <label>
              <Input type="checkbox" width="9rem" onClick={onChange} />
              <span>#1살이하</span>
            </label>
            <label>
              <Input type="checkbox" width="9rem" onClick={onChange} />
              <span>#1살~7살</span>
            </label>
            <label>
              <Input type="checkbox" width="9rem" onClick={onChange} />
              <span>#7살이상</span>
            </label>
          </Row>
          <p>기타 희망 내용</p>
          <Row>
            <label>
              <Input type="checkbox" width="9rem" onClick={onChange} />
              <span>#건강검진</span>
            </label>
            <label>
              <Input type="checkbox" width="9rem" onClick={onChange} />
              <span>#혈통서</span>
            </label>
            <label>
              <Input type="checkbox" width="9rem" onClick={onChange} />
              <span>#중성화</span>
            </label>
          </Row>
          <ButtonWithMarginTop fullWidth>저장</ButtonWithMarginTop>
        </form>
      </TasteFormBlock>
    </>
  );
};

export default TasteForm;
