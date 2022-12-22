import './style.css'
import React from 'react';

interface OpenedChatProps {
    handleOpenDrawer: () => void
}

const OpenedChat: React.FC<OpenedChatProps> = ({handleOpenDrawer}) => {
    return ( 
        <div className="opened-chat-wrapper">
            Opened
            <button 
                className='open-button chats-button'
                onClick={handleOpenDrawer}
            >
                open
            </button>
        </div>
    );
}
 
export default OpenedChat;