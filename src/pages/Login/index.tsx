import { Skeleton } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../components/Logo';
import SkeletonLoader from '../../components/SkeletonLoader';
import useAuth from '../../hooks/useAuth';
import { LoginProps } from '../../types/authTypes';
import LoginForm from './components/LoginForm';


const Login: React.FC = () => {
    const {isLoading, error,  login} = useAuth()


    const handleLogin = (values: LoginProps) => {
        login(values)
    }

    return ( 
        <div className="auth-page">
        <div className='auth-wrapper'>
            <Logo size={45}  />
            <p className='auth-page-title'>Login</p>
            {
                !isLoading ? (
                    <LoginForm onSubmit={handleLogin} />
                ) : (
                    <SkeletonLoader />
                )
            }
            {error && <p className='error-message'>{error}</p>}
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