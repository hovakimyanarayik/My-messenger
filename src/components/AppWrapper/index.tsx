import './style.css'
import React from 'react';


const AppWrapper: React.FC<{children: JSX.Element}> = ({children}) => {
    return ( 
        <div className='app-wrapper'>
            <div className='app'>
                {children}
            </div>
        </div>
     );
}
 
export default AppWrapper;