import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../components/Logo';
import { Input, Button, Form } from 'antd'


const Login: React.FC = () => {

    const onFinish = (values: {email: string, password: string}) => {
        console.log(123);
        console.log(values);
        
    }

    return ( 
        <div className="auth-page">
        <div className='auth-wrapper'>
            <Logo size={45}  />
            <p className='auth-page-title'>Login</p>
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
            <Link 
                style={{color: 'lightgray', textDecoration: 'underline'}} 
                to='/registration'
            >
                Don't have an account? Sign Up
            </Link>
        </div>
    </div>
     );
}
 
export default Login;