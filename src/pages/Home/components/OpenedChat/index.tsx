import './style.css'
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface OpenedChatProps {
    handleOpenDrawer: () => void
}

const OpenedChat: React.FC<OpenedChatProps> = ({handleOpenDrawer}) => {
    const params = useParams()

    useEffect(() => {
        if(params.slug) {
        // fetch chat beetween currentuser and params.slug uid
        }
        
    }, [params.slug])
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