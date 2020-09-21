import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import Input from '../common/Input';
import Select from '../common/Select';
import Tags from '../common/Tags';

const locations = [
  '강원도',
  '경기도',
  '경상남도',
  '경상북도',
  '광주',
  '대구',
  '대전',
  '부산',
  '서울',
  '세종',
  '울산',
  '인천',
  '전라남도',
  '전라북도',
  '제주도',
  '충청남도',
  '충청북도',
];

const TasteFormBlock = styled.div``;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 3rem;
`;

const Comment = styled.div`
  color: ${palette.main[0]};
  font-size: 0.75rem;
  margin-top: 0.5rem;
  padding-left: 0.2rem;
`;

const TasteForm = () => {
  return (
    <>
      <TasteFormBlock>
        <form>
          <p>품종</p>
          <Tags
            settings={{
              whitelist: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
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
          <p>테스트1</p>
          <Input />
          <p>테스트2</p>
          <Select />
          <ButtonWithMarginTop fullWidth>저장</ButtonWithMarginTop>
        </form>
      </TasteFormBlock>
    </>
  );
};

export default TasteForm;
