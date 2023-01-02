import React from 'react';
import { BsChevronCompactRight } from 'react-icons/bs';


interface OpenedChatWrapperProps {
    children: React.ReactNode
    handleOpenDrawer: () => void
}

const OpenedChatWrapper: React.FC<OpenedChatWrapperProps> = ({ children, handleOpenDrawer }) => {
    return ( 
        <div className="opened-chat-wrapper">
            {children}
            <button 
                className='open-button chats-button'
                onClick={handleOpenDrawer}
            >
                <BsChevronCompactRight size={25} />
            </button>
        </div>
     );
}
 
export default OpenedChatWrapper;