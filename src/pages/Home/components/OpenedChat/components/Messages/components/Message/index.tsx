import { Avatar, Image } from 'antd';
import React from 'react';
import { formateTimestamp } from '../../../../../../../../helpers';
import useAuth from '../../../../../../../../hooks/useAuth';
import useCurrentChat from '../../../../../../../../hooks/useCurrentChat';
import { IMessage } from '../../../../../../../../types/messageTypes';


interface MessageProps {
    message: IMessage
}

const Message:React.FC<MessageProps> = ({ message }) => {
    const { user } = useAuth()
    const { currentChatUser } = useCurrentChat()

    return ( 
        <div className={`message ${message.senderId === user?.uid ? 'owner' : ''}`}>
        <div className="messageInfo">
            <Avatar size={35} src={user?.uid === message.senderId ? user.photoURL : currentChatUser?.photoURL} />
            <span className='message-time'>{formateTimestamp(message.date)}</span>
        </div>
        <div className="messageContent">
            {message.text && (<p>{message.text}</p>)}
            {message.img && (
                <Image src={message.img} alt="messageimg" />
            )}
        </div>
    </div>
     );
}
 
export default Message;