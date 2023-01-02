import './style.css'
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ChatTopBar from './components/ChatTopBar';
import ChatInput from './components/ChatInput';
import Messages from './components/Messages';
import useCurrentChat from '../../../../hooks/useCurrentChat';
import OpenedChatWrapper from './components/OpenedChatWrapper';
import SkeletonLoader from '../../../../components/SkeletonLoader';
import Logo from '../../../../components/Logo';
import DefaultLook from './components/DefaultLook';

interface OpenedChatProps {
    handleOpenDrawer: () => void
}

const OpenedChat: React.FC<OpenedChatProps> = ({handleOpenDrawer}) => {
    const params = useParams()
    const { setChat, isLoading, currentChatUser } = useCurrentChat()

    useEffect(() => {
        if(params.slug) {
            setChat(params.slug)
        }
    }, [params.slug])

    return ( 
        <OpenedChatWrapper handleOpenDrawer={handleOpenDrawer}>
            {isLoading && params.slug && <SkeletonLoader />}
            {!isLoading && currentChatUser ? (
                <>
                    <ChatTopBar />
                    <Messages />
                    <ChatInput />
                </>
            ) : (
                <DefaultLook />
            )}

        </OpenedChatWrapper>
    );
}
 
export default OpenedChat;