import React from 'react';
import { Button, Form, Input } from "antd";
import { LoginProps } from '../../../../types/authTypes';
import useAuth from '../../../../hooks/useAuth';


const LoginForm: React.FC = () => {
    const {isLoading, login} = useAuth()

    const onFinish = (values: LoginProps) => {
        login(values)
    }

    if(isLoading) {
        return (
            <h1>Loading...</h1>
        )
    }

    return ( 
        <Form 
            className='auth-form'
            onFinish={onFinish}
        >
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
            <Button className='form-button' htmlType='submit'>Sign In</Button>
        </Form>
     );
}
 
export default LoginForm;