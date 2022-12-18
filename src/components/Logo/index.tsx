import './style.css'
import React from 'react';


const Logo: React.FC<{size?: number}> = ({size=24}) => {
    return ( 
        <div className='logo'>
            <h1 style={{fontSize: size+'px'}}>My Messenger</h1>
        </div>
     );
}
 
export default Logo;