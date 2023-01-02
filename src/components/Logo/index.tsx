import './style.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Logo: React.FC<{size?: number}> = ({size=24}) => {
    const navigate = useNavigate()
    return ( 
        <div className='logo' onClick={() => navigate('/')}>
            <h1 style={{fontSize: size+'px'}}>My Messenger</h1>
        </div>
     );
}
 
export default Logo;