import { Avatar } from 'antd';
import React from 'react';
import useAuth from '../../../../../hooks/useAuth';


const CurrentUserInfo = () => {
    const {user, logout} = useAuth()

    if(!user) return null;
    return ( 
        <div className='current-user-info-wrapper'>
            <div>
                <Avatar src={user.photoURL} size={35} />
                <p>{user.displayName}</p>
            </div>
            <button className='logout-button' onClick={logout}>Logout</button>
        </div>
     );
}
 
export default CurrentUserInfo;