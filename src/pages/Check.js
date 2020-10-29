import React, { useState } from 'react';
import styled from 'styled-components';
import FormTemplate from '../components/FormTemplate';
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import getBase64 from '../lib/getBase64';

const CheckBlock = styled.div`
  .avatar-uploader {
    padding: 2rem 0;
    display: flex;
    justify-content: center;
  }
  .avatar-uploader > .ant-upload {
    width: 25rem;
    height: 25rem;
  }
`;

const Check = () => {
  const [img, setImg] = useState('');

  async function onChange({ fileList }) {
    setImg(await getBase64(fileList[0].originFileObj));
  }

  return (
    <FormTemplate title="사진으로 인증하고 보상받자!">
      <CheckBlock>
        <ImgCrop rotate>
          <Upload
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            onChange={onChange}
            onPreview={() => {}}
          >
            {img ? null : (
              <div>
                <UploadOutlined />
                <div style={{ marginTop: '0.5rem' }}>Upload</div>
              </div>
            )}
          </Upload>
        </ImgCrop>
      </CheckBlock>
    </FormTemplate>
  );
};

export default Check;
