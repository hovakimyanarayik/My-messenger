import React from 'react';
import { Avatar } from 'antd';
import useAuth from '../../../../../../hooks/useAuth';
import useUserChats from '../../../../../../hooks/useUserChats';
import { UserPropsWithId } from '../../../../../../types/userTypes';


const User:React.FC<UserPropsWithId> = ({email, name, photoURL, uid}) => {
    const { onChatOpen } = useUserChats()
    const {user} = useAuth()

    const handleSelect = async () => {
        onChatOpen({email, name, photoURL, uid})
    }

    if(uid === user?.uid) return null
    return (
        <div className="user-chat" onClick={handleSelect}>
            <Avatar size={50} src={photoURL} />
            <div>
                <p className="user-chat-name">{name}</p>
                {/* <p className='last-message'>Hello</p> */}
            </div>
        </div>
     );
}

export default User;