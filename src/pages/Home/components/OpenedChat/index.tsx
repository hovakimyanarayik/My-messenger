import './style.css'
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ChatTopBar from './components/ChatTopBar';
import ChatInput from './components/ChatInput';
import Messages from './components/Messages';
import useCurrentChat from '../../../../hooks/useCurrentChat';

interface OpenedChatProps {
    handleOpenDrawer: () => void
}

const OpenedChat: React.FC<OpenedChatProps> = ({handleOpenDrawer}) => {
    const params = useParams()
    const { setChat } = useCurrentChat()

    useEffect(() => {
        if(params.slug) {
        // fetch chat beetween currentuser and params.slug uid
            setChat(params.slug)
        }
    }, [params.slug])


    // if(isLoading) return null
    return ( 
        <div className="opened-chat-wrapper">
            <ChatTopBar />
            <Messages />
            <ChatInput />
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