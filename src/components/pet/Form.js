import React, { Component } from 'react';
import FormTemplate from './Pet/FormTemplate';
import ElseForm from './Pet/ElseForm';
import ElseItemList from './Pet/ElseItemList';
import './Pet/PetForm.css';
import NewPhoto from './Pet/NewPhoto';
import ModalHealth from './Pet/ModalHealth';
import ModalCredit from './Pet/ModalCredit';

class Form extends Component {
  id = 2;
  state = {
    input: '',
    items: [
      { id: 0, text: '애교많음' },
      { id: 1, text: '잘생김' },
    ],

    isModal1Open: false,
    isModal2Open: false,
  };

  handleCreate = () => {
    const { input, items } = this.state;
    this.setState({
      input: '',
      items: items.concat({
        id: this.id++,
        text: input,
      }),
    });
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  };

  handleRemove = (id) => {
    const { items } = this.state;
    this.setState({
      items: items.filter((item) => item.id !== id),
    });
  };

  openModal1 = () => {
    this.setState({ isModal1Open: true });
  };
  openModal2 = () => {
    this.setState({ isModal2Open: true });
  };

  closeModal1 = () => {
    this.setState({ isModal1Open: false });
  };
  closeModal2 = () => {
    this.setState({ isModal2Open: false });
  };

  render() {
    const { input, items, isModal1Open, isModal2Open } = this.state;
    const { handleChange, handleCreate, handleKeyPress, handleRemove } = this;

    const onChange = 1;
    const onCreate = null;

    return (
      <div>
        <FormTemplate
          form={
            <div className="form">
              <form onSubmit={1}>
                <p>제목</p>
                <input
                  type="text"
                  name="title"
                  id="title"
                  onClick={onChange}
                  style={{ width: '580px' }}
                />
                <p>입양조건</p>
                <div style={{ display: 'inline-flex' }}>
                  <label>
                    <input
                      type="text"
                      name="month"
                      id="month"
                      onClick={onChange}
                      style={{ width: '130px' }}
                    />
                    <span>개월</span>
                  </label>
                  <label>
                    <input
                      type="text"
                      name="credit"
                      id="credit"
                      onClick={onChange}
                      style={{ width: '290px', marginTop: '-5px' }}
                    />
                    <span>껌</span>
                  </label>
                </div>
                <div style={{ display: 'inline-flex' }}>
                  <label>
                    <p id="cal">
                      ※ 최소 매달 반려동물의 필요한 음식 및 용품을 계산하여
                      책정해주세요.
                    </p>
                  </label>
                  <div
                    className="cal-button"
                    id="cal-button"
                    style={{ marginLeft: '12px' }}
                    onClick={this.openModal1}
                  >
                    껌 계산기
                  </div>
                </div>
                <div style={{ display: 'inline-flex' }}>
                  <p style={{ width: '320px' }}>나이</p>
                  <p style={{ width: '280px' }}>성별</p>
                </div>
                <div style={{ display: 'inline-flex' }}>
                  <label>
                    <input
                      type="text"
                      name="year"
                      id="year"
                      onClick={onChange}
                    />
                    <span style={{ marginRight: '80px' }}>살</span>
                  </label>
                  <label>
                    <div className="radio-gender">
                      <input
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                      />
                      <label for="male">남</label>
                      <input
                        type="radio"
                        name="gender"
                        id="woman"
                        value="woman"
                      />
                      <label for="woman">여</label>
                    </div>
                  </label>
                </div>
                <p>종</p>
                <label>
                  <div className="radio-pet">
                    <input type="radio" name="pet" id="dog" value="dog" />
                    <label for="dog">강아지</label>
                    <input type="radio" name="pet" id="cat" value="cat" />
                    <label for="cat">고양이</label>
                    <input
                      type="radio"
                      name="pet"
                      id="outside"
                      value="outside"
                    />
                    <label for="outside" style={{ marginRight: '0px' }}>
                      기타
                    </label>
                  </div>
                </label>
                <p>품종</p>
                <input
                  type="text"
                  name="petTitle"
                  id="petTitle"
                  placeholder="직접 입력"
                  onClick={onChange}
                  style={{ width: '580px' }}
                />
                <p>건강</p>
                <div style={{ display: 'inline-flex' }}>
                  <div id="health1">건강검진/예방접종</div>
                  <div className="radio-checkUp">
                    <input
                      type="radio"
                      name="checkUp"
                      id="checkUp_yes"
                      value="yes"
                      onClick={this.openModal2}
                    />
                    <label for="checkUp_yes">YES</label>
                    <input
                      type="radio"
                      name="checkUp"
                      id="checkUp_no"
                      value="no"
                    />
                    <label for="checkUp_no">NO</label>
                  </div>
                </div>
                <div style={{ display: 'inline-flex' }}>
                  <div id="health2">혈통서</div>
                  <div className="radio-lineAge">
                    <input
                      type="radio"
                      name="lineAge"
                      id="lineAge_yes"
                      value="yes"
                    />
                    <label for="lineAge_yes">YES</label>
                    <input
                      type="radio"
                      name="lineAge"
                      id="lineAge_no"
                      value="no"
                    />
                    <label for="lineAge_no">NO</label>
                  </div>
                </div>
                <div style={{ display: 'inline-flex' }}>
                  <div id="health3">중성화</div>
                  <div className="radio-neutered">
                    <input
                      type="radio"
                      name="neutered"
                      id="neutered_yes"
                      value="yes"
                    />
                    <label for="neutered_yes">YES</label>
                    <input
                      type="radio"
                      name="neutered"
                      id="neutered_no"
                      value="no"
                    />
                    <label for="neutered_no">NO</label>
                  </div>
                </div>
                <p>기타</p>
                <div style={{ width: '700px' }}>
                  <ElseForm
                    value={input}
                    onKeyPress={handleKeyPress}
                    onChange={handleChange}
                    onCreate={handleCreate}
                  />
                  <ElseItemList items={items} onRemove={handleRemove} />
                </div>
                <div style={{ paddingTop: '20px', width: '700px' }}>
                  <p>설명</p>
                </div>
                <textarea
                  name="description"
                  id="description"
                  cols="40"
                  rows="8"
                ></textarea>
                <p id="photo">
                  사진 첨부하기<span>※ 가로형 사진 권장</span>
                </p>
                <NewPhoto />
                <div className="create-button" onClick={onCreate}>
                  등록
                </div>
                <ModalCredit isOpen1={isModal1Open} close={this.closeModal1} />
                <ModalHealth isOpen2={isModal2Open} close={this.closeModal2} />
              </form>
            </div>
          }
        ></FormTemplate>
      </div>
    );
  }
}

export default Form;
