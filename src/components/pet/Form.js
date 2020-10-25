import React, { useState } from 'react';
import styled from 'styled-components';
import { whitePetTitles } from '../../constants/index';
import Input from '../common/Input';
import Select from '../common/Select';
import Textarea from '../common/Textarea';
import { Upload } from 'antd';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import getBase64 from '../../lib/getBase64';
import ImgCrop from 'antd-img-crop';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';

const FormBlock = styled.div`
  p {
    font-weight: 700;
  }
  textarea {
    height: 10rem;
  }
  button {
    margin-top: 2rem;
  }

  .row {
    display: flex;
    justify-content: space-between;

    div {
      width: 100%;
    }
    select {
      font-weight: 500;
    }
    div + div {
      margin-left: 1rem;
    }
  }
  .upload-list-inline [class*='-upload-list-rtl'] .ant-upload-list-item {
    float: right;
  }
`;

const Comment = styled.div`
  color: ${palette.main};
  font-size: 0.75rem;
  margin-top: 0.5rem;
  padding-left: 0.2rem;
`;

const Form = () => {
  const [form, setForm] = useState({
    title: '',
    credit: 150000,
    zone: '',
    gender: 'MALE',
    year: 1,
    month: 11,
    petTitle: '',
    checkUpImage: '',
    lineAgeImage: '',
    neutered: false,
    description: '',
    boardImage1: '',
    boardImage2: '',
    boardImage3: '',
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };
  const onChangeCheckbox = (e) => {
    const { checked, name } = e.target;
    setForm({ ...form, [name]: checked });
  };

  async function onChangeCheckUp({ fileList }) {
    setForm({
      ...form,
      checkUpImage: fileList.length
        ? await getBase64(fileList[0].originFileObj)
        : '',
    });
  }
  async function onChangeLineAge({ fileList }) {
    setForm({
      ...form,
      lineAgeImage: fileList.length
        ? await getBase64(fileList[0].originFileObj)
        : '',
    });
  }
  async function onChangeBoards({ fileList }) {
    let boardImages = ['', '', ''];
    for (let i = 0; i < fileList.length; i++) {
      boardImages[i] = await getBase64(fileList[i].originFileObj);
    }
    console.log(boardImages);

    setForm({
      ...form,
      boardImage1: boardImages[0],
      boardImage2: boardImages[1],
      boardImage3: boardImages[2],
    });
  }
  const onClick = (e) => {
    console.log(form);
  };

  return (
    <FormBlock>
      <p>제목</p>
      <Input name="title" value={form.title} onChange={onChange} />
      <p>입양조건</p>
      <Input
        type="number"
        name="credit"
        value={form.credit}
        onChange={onChange}
      />
      <div className="row">
        <div className="col">
          <p>견종</p>
          <Select name="petTitles" onChange={onChange} value={form.location}>
            {whitePetTitles.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </Select>
        </div>
        <div className="col">
          <p>성별</p>
          <Select name="gender" onChange={onChange} value={form.location}>
            <option key="mail" value="MALE">
              남아
            </option>
            <option key="femail" value="FEMALE">
              여아
            </option>
          </Select>
        </div>
        <div className="col">
          <p>중성화 여부</p>
          <label>
            <Input
              name="neutered"
              type="checkbox"
              onChange={onChangeCheckbox}
              checked={form.neutered}
            />
            <span>#중성화</span>
          </label>
        </div>
      </div>
      <p>나이 (연 / 월)</p>
      <div className="row">
        <div>
          <Input
            type="number"
            name="year"
            value={form.year}
            onChange={onChange}
          />
        </div>
        <div>
          <Input
            type="number"
            name="month"
            value={form.month}
            onChange={onChange}
          />
        </div>
        <div />
      </div>
      <div className="row">
        <div>
          <p>건강검진 자료 (영수증)</p>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            onChange={onChangeCheckUp}
            onPreview={() => {}}
          >
            {form.checkUpImage ? null : (
              <div>
                <UploadOutlined />
                <div style={{ marginTop: '0.5rem' }}>#건강검진</div>
              </div>
            )}
          </Upload>
        </div>
        <div>
          <p>혈통서</p>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            onChange={onChangeLineAge}
            onPreview={() => {}}
          >
            {form.lineAgeImage ? null : (
              <div>
                <UploadOutlined />
                <div style={{ marginTop: '0.5rem' }}>#혈통서</div>
              </div>
            )}
          </Upload>
        </div>
      </div>
      <Comment>
        &#8251; 필수는 아니지만 추가하면 매칭이 더욱 빨라집니다.
      </Comment>
      <p>사진</p>
      <ImgCrop rotate>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          onChange={onChangeBoards}
          onPreview={() => {}}
        >
          {form.boardImage1 && form.boardImage2 && form.boardImage3 ? null : (
            <div>
              <PlusOutlined />
              <div style={{ marginTop: '0.5rem' }}>Upload</div>
            </div>
          )}
        </Upload>
      </ImgCrop>
      <p>설명</p>
      <Textarea
        name="description"
        value={form.description}
        onChange={onChange}
      />
      <Button onClick={onClick} fullWidth>
        등록
      </Button>
    </FormBlock>
  );
};

export default Form;
