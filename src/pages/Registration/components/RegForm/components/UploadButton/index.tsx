import React from 'react';
import { BsCardImage } from 'react-icons/bs';


const UploadButton: React.FC = () => {
    return ( 
        <div className='upload-button'>
            <p className="ant-upload-drag-icon">
                <BsCardImage color='lightgray' size={30} />
            </p>
            <p className="ant-upload-text">
                Choose Avatar
            </p>
        </div>
     );
}
 
export default UploadButton;