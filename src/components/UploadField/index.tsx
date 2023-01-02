import './style.css'
import React from 'react';
import { Upload } from 'antd';
import { UploadRequestOption as RcCustomRequestOptions } from 'rc-upload/lib/interface';
import { UploadFieldProps } from '../../types/uploadTypes';


const UploadField:React.FC<UploadFieldProps> = ({ 
    imageUrl, 
    onUpload, 
    handleRemoveFile, 
    children, 
    showUploadList = true,
    previewType = 'circle'
}) => {

    const uploadImage = (options: RcCustomRequestOptions) => {
        onUpload(options)
    }


      return (
        <Upload
            name='avatar'
            accept='image/*'
            customRequest={uploadImage}
            onRemove={handleRemoveFile}
            showUploadList={showUploadList}
        >
            {imageUrl ? (
                <div className="upload-button">
                    <img
                        src={imageUrl}
                        alt="thumbnail"
                        className={`upload-image-preview ${previewType}`}
                    />
                </div>

            ) : (
                children
            )}
        </Upload>
      );
}
 
export default UploadField;