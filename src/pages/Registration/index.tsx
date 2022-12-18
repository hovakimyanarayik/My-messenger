import React from 'react';
import { Link } from 'react-router-dom'
import { Input, Button } from 'antd';
import Logo from '../../components/Logo';
import UploadField from '../../components/UploadField';


const Registration: React.FC = () => {

    const uploadFile = () => {
        console.log('upload');
    }

    return ( 
        <div className="auth-page">
            <div className='auth-wrapper'>
                <Logo size={45}  />
                <p className='auth-page-title'>Registration</p>
                <form className='auth-form'>
                    <Input bordered={false} className='auth-input' placeholder='Display Name' />
                    <Input bordered={false} className='auth-input' placeholder='Email' type='email' />
                    <Input.Password bordered={false} className='auth-input' placeholder='Password' />
                    <UploadField onUpload={uploadFile} />
                    <Button className='form-button'>Sign Up</Button>
                    <Link className='auth-link' to='/login'>Do You have an account? Login</Link>
                </form>
            </div>
        </div>
     );
}
 
export default Registration;