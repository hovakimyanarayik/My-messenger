import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../components/Logo';
import useAuth from '../../hooks/useAuth';
import useStorage from '../../hooks/useStorage';
import { RegProps } from '../../types/authTypes';
import RegForm from './components/RegForm';


const Registration: React.FC = () => {
    const {isLoading, register} = useAuth()
    const {downloadURL, isUploading, removeFileURL, uploadFile} = useStorage()

    const onSubmit = (values: RegProps) => {
        register({...values, photoURL: downloadURL})
    }


    if(isLoading) {
        return(
            <h1>Loading...</h1>
        )
    }

    return ( 
        <div className="auth-page">
            <div className='auth-wrapper'>
                <Logo size={45}  />
                <p className='auth-page-title'>Registration</p>
                <RegForm
                    uploadFile={uploadFile} 
                    handleRemoveFile={removeFileURL} 
                    isUploading={isUploading} 
                    onSubmit={onSubmit} 
                    imageUrl={downloadURL} 
                />
                <Link className='auth-link' to='/login'>Do You have an account? Login</Link>
            </div>
        </div>
     );
}
 
export default Registration;