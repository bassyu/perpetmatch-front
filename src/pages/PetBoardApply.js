import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/common/Button';
import FormTemplate from '../components/FormTemplate';
import palette from '../lib/styles/palette';
import * as petAPI from '../lib/api/pet';
import { message } from 'antd';

const StyledBox = styled.div`
  background: white;
  color: ${palette.main};

  p {
    margin: 0;
    font-weight: 700;
  }
  .context {
    margin-bottom: 2rem;
    padding: 1rem;
  }
  button {
    margin-top: 1rem;
  }
`;

function PetBoardApply({ match, history }) {
  const id = match.params.id;

  const onClickApply = () => {
    async function callAPI() {
      try {
        await petAPI.applyBoard({ id });
        await message.success('신청이 완료되었습니다!', 1);
        history.goBack();
      } catch (e) {
        console.log('신청하기 오류');
      }
    }
    callAPI();
  };
  const onClickBack = () => {
    history.goBack();
  };

  return (
    <FormTemplate title="신청은 신중하게!">
      <StyledBox>
        <p>&#8251; 신청 후, 상대방이 수락하게 되면 돌이킬 수 없습니다.</p>
        <div className="context" />
        <p>+ 입양시 가까운 지역을 권장합니다.</p>
        <div className="context">
          멀리서 사시는 분과 직거래가 이루어 지는 경우 문제발생시에는 처리에
          애로 사항이 많으며, 장거리 여행으로 인하여 반려동물이 멀미를 하거나
          건강에 지장을 주는 일이 발생 할 수 있습니다.
        </div>
        <p>+ 집을 자주 비워놓는 경우</p>
        <div className="context">
          - 강아지 보다는 고양이를 선택하는 것이 바람직합니다.
        </div>
        <p>+ 강아지, 고양이를 기르지 못하는 아파트 등일 경우</p>
        <div className="context">- 고슴도치와 같은 반려동물이 적합합니다.</div>
        <Link to="/profile/card-form">
          <Button fullWidth>결제정보 수정</Button>
        </Link>
        <Button fullWidth onClick={onClickApply} background="#9f83cb">
          준비됐어요!
        </Button>
        <Button fullWidth onClick={onClickBack} background={palette.gray[5]}>
          생각해볼게요
        </Button>
      </StyledBox>
    </FormTemplate>
  );
}

export default withRouter(PetBoardApply);
