import './style.css'
import React from 'react';
import useAuth from '../../hooks/useAuth';
import SkeletonLoader from '../SkeletonLoader';


const AppWrapper: React.FC<{children: JSX.Element}> = ({children}) => {
    const {initialized} = useAuth()
    return ( 
        <div className='app-wrapper'>
            <div className='app'>
                {
                    initialized ? (
                        children
                    ) : (
                        <SkeletonLoader />
                    )
                }
            </div>
        </div>
     );
}

export default AppWrapper;