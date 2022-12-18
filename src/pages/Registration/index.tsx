import React from 'react';
import { Link } from 'react-router-dom'
import { Input, Button, Form } from 'antd';
import Logo from '../../components/Logo';
import UploadField from '../../components/UploadField';


const Registration: React.FC = () => {

    const onFinish = (values: any) => {
        console.log(values);
        
    }

    const uploadFile = () => {
        console.log('upload');
    }

    return ( 
        <div className="auth-page">
            <div className='auth-wrapper'>
                <Logo size={45}  />
                <p className='auth-page-title'>Registration</p>
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
                    <UploadField onUpload={uploadFile} />
                    <Button className='form-button' htmlType='submit'>Sign Up</Button>
                </Form>
                <Link className='auth-link' to='/login'>Do You have an account? Login</Link>
            </div>
        </div>
     );
}
 
export default Registration;