import React from 'react';
import { Button, Form, Input } from 'antd';
import UploadField from '../../../../components/UploadField';
import { RegProps } from '../../../../types/authTypes';

interface RegFormProps {
    onSubmit: (values: RegProps) => void
    uploadFile: (options: any) => void
    handleRemoveFile: () => void
    isUploading: boolean
    imageUrl: string | null
}

const RegForm: React.FC<RegFormProps> = ({onSubmit, uploadFile, handleRemoveFile, isUploading, imageUrl}) => {

    const onFinish = (values: RegProps) => {
        onSubmit(values)
    }

    // uploadingy kazmakerpel buttony disable anel ete isUploadinga
    

    return ( 
        <Form
        className='auth-form'
        onFinish={onFinish}
    >
        <Form.Item 
            rules={[
                {required: true, message: 'Please input your Name!'},
            ]}
            className='form-item'
            name='name'
        >
            <Input bordered={false} className='auth-input' placeholder='Name' />
        </Form.Item>
        <Form.Item 
            rules={[
                {required: true, message: 'Please input your Email!'},
                {type: 'email', message: 'Invalid email.'}
            ]}
            className='form-item'
            name='email'
        >
            <Input bordered={false} className='auth-input' placeholder='Email' />
        </Form.Item>
        <Form.Item 
            rules={[
                { required: true, message: 'Please input your Password!' },
                {min: 8, message: 'Passowrd will contain minimum 8 symbols'}
            ]}
            className='form-item'
            name='password'
        >
            <Input.Password bordered={false} className='auth-input' placeholder='Password' />
        </Form.Item>
        <UploadField imageUrl={imageUrl} handleRemoveFile={handleRemoveFile} onUpload={uploadFile} />
        <Button
            className='form-button' 
            htmlType='submit'
            disabled={isUploading}
        >
            Sign Up
        </Button>
    </Form>
     );
}
 
export default RegForm;