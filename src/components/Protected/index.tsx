import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import SkeletonLoader from '../SkeletonLoader';


interface ProtectedProps {
    children: React.ReactNode
}

const Protected: React.FC<ProtectedProps> = ({ children }) => {
    const {isLoading, user} = useAuth()

    if(isLoading && !user) {
        return (<SkeletonLoader />)
    }
    if(!isLoading && !user) {
        return (<Navigate to='/registration' />)
    }

    return ( 
        <>
            {children}
        </>
     );
}
 
export default Protected;