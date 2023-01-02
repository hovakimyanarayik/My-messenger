import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../components/Logo';
import SkeletonLoader from '../../components/SkeletonLoader';
import useAuth from '../../hooks/useAuth';
import useStorage from '../../hooks/useStorage';
import { RegProps } from '../../types/authTypes';
import RegForm from './components/RegForm';


const Registration: React.FC = () => {
    const {isLoading, error, register, user} = useAuth()
    const {downloadURL, isUploading, removeFileURL, uploadFile} = useStorage()
    const navigate = useNavigate()

    useEffect(() => {
        if(user) {
            navigate('/', {replace: true})
        }

        // eslint-disable-next-line
    }, [user])

    const onSubmit = (values: RegProps) => {
        register({...values, photoURL: downloadURL})
        removeFileURL()
    }

    return ( 
        <div className="auth-page">
            <div className='auth-wrapper'>
                <Logo size={45}  />
                <p className='auth-page-title'>Registration</p>
                {
                    !isLoading ? (
                        <RegForm
                            uploadFile={uploadFile} 
                            handleRemoveFile={removeFileURL} 
                            isUploading={isUploading} 
                            onSubmit={onSubmit} 
                            imageUrl={downloadURL} 
                        /> 
                    ): (
                        <SkeletonLoader />
                    )
                }

                {error && <p className='error-message'>{error}</p>}
                <Link className='auth-link' to='/login'>Do You have an account? Login</Link>
            </div>
        </div>
     );
}
 
export default Registration;