import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../components/Logo';
import LoginForm from './components/LoginForm';


const Login: React.FC = () => {



    return ( 
        <div className="auth-page">
        <div className='auth-wrapper'>
            <Logo size={45}  />
            <p className='auth-page-title'>Login</p>
            <LoginForm />
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