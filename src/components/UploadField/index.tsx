import './style.css'
import React from 'react';
import { Upload } from 'antd';
import { UploadRequestOption as RcCustomRequestOptions } from 'rc-upload/lib/interface';
import { BsCardImage } from 'react-icons/bs'
import { UploadFieldProps } from '../../types/uploadTypes';


const UploadField:React.FC<UploadFieldProps> = ({ imageUrl, onUpload, handleRemoveFile }) => {

    const uploadImage = (options: RcCustomRequestOptions) => {
        onUpload(options)
    }


    const uploadButton = (
        <div className='upload-button'>
            <p className="ant-upload-drag-icon">
                <BsCardImage color='lightgray' size={30} />
            </p>
            <p className="ant-upload-text">
                Choose Avatar
            </p>
        </div>
      );

      return (
        <Upload
            name='avatar'
            accept='image/*'
            customRequest={uploadImage}
            onRemove={handleRemoveFile}
        >
            {imageUrl ? (
                <div className="upload-button">
                    <img
                        src={imageUrl}
                        alt="thumbnail"
                        className='upload-image-preview'
                        // style={{
                        //     width: '40%',
                        //     borderRadius: '50%'
                        // }}
                    />
                </div>

            ) : (
                uploadButton
            )}
        </Upload>
      );
}
 
export default UploadField;