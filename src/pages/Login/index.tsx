import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../components/Logo';
import { Input, Button, Form } from 'antd'

const Login: React.FC = () => {
    return ( 
        <div className="auth-page">
        <div className='auth-wrapper'>
            <Logo size={45}  />
            <p className='auth-page-title'>Login</p>
            <form className='auth-form'>
                <Form.Item 
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input bordered={false} className='auth-input' placeholder='Email' type='email' />
                </Form.Item>
                <Input.Password bordered={false} className='auth-input' placeholder='Password' />
                <Button className='form-button'>Sign In</Button>
                <Link className='auth-link' to='/registration'>Don't have an account? Sign Up</Link>
            </form>
        </div>
    </div>
     );
}
 
export default Login;