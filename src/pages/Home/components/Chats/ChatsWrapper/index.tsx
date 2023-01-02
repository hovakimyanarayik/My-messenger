import React from 'react';
import { BsChevronCompactLeft } from 'react-icons/bs';


interface ChatsWrapperProps {
    children: React.ReactNode
    isOpen: boolean
    handleClose: () => void
}

const ChatsWrapper: React.FC<ChatsWrapperProps> = ( {children, isOpen, handleClose} ) => {
    return ( 
        <div className={`chats-wrapper ${isOpen && 'open'}`}>
            {children}
            <button 
                className='close-button chats-button'
                onClick={handleClose}
            >
                <BsChevronCompactLeft size={30} /> CLOSE
            </button>
        </div> 
     );
}
 
export default ChatsWrapper;