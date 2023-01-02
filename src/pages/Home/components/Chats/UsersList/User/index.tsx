import React from 'react';
import { Avatar } from 'antd';
import useAuth from '../../../../../../hooks/useAuth';
import useUserChats from '../../../../../../hooks/useUserChats';
import { UserPropsWithId } from '../../../../../../types/userTypes';
import { UserLastMessage } from '../../../../../../types/messageTypes';
import { formateTimestamp } from '../../../../../../helpers';

interface UserFCProps extends UserPropsWithId {
    lastMessage: UserLastMessage
}

const User:React.FC<UserFCProps> = ({email, name, photoURL, uid, lastMessage}) => {
    const { onChatOpen } = useUserChats()
    const {user} = useAuth()

    const handleSelect = async () => {
        onChatOpen({email, name, photoURL, uid})
    }

    if(uid === user?.uid) return null
    return (
        <div className="user-chat" onClick={handleSelect}>
            <div className='user-chat-info-left'>
                <Avatar size={50} src={photoURL} />
                <div>
                    <p className="user-chat-name">{name}</p>
                    {lastMessage && (
                        <p className='last-message'>{lastMessage.text}</p>
                    )}
                </div>
            </div>
            {lastMessage && (
                <span className='message-time'>{formateTimestamp(lastMessage.date)}</span>
            )}
        </div>
     );
}

export default User;