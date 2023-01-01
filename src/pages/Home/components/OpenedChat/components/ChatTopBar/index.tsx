import React from 'react';
import { Avatar } from 'antd';
import { BsCameraVideoFill, BsTelephoneFill } from 'react-icons/bs';
import useCurrentChat from '../../../../../../hooks/useCurrentChat';


const ChatTopBar: React.FC = () => {
    const { currentChatUser } = useCurrentChat()
    return ( 
        <div className='top-bar'>
            <div className='opened-chat-info'>
                <Avatar size={50} src={currentChatUser?.photoURL} />
                <p className='opened-chat-username'>{currentChatUser?.name}</p>
            </div>
            <div className='chat-tools'>
                <BsTelephoneFill className='chat-icon' />
                <BsCameraVideoFill className='chat-icon' />
            </div>
        </div>
     );
}
 
export default ChatTopBar;
