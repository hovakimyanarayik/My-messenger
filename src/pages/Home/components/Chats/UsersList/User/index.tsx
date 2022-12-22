import { Avatar } from 'antd';
import React from 'react';
import { UserPropsWithId } from '../../../../../../types/userTypes';



const User:React.FC<UserPropsWithId> = ({email, name, photoURL, uid}) => {
    return ( 
        <div className="user-chat">
            <Avatar size={50} src={photoURL} />
            <div>
                <p className="user-chat-name">{name}</p>
                {/* <p className='last-message'>Hello</p> */}
            </div>
        </div>
     );
}
 
export default User;