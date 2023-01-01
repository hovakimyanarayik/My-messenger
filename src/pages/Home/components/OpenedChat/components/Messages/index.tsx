import React, { useEffect, useRef, useState } from 'react';
import useCurrentChat from '../../../../../../hooks/useCurrentChat';
import { IMessage } from '../../../../../../types/messageTypes';
import Message from './components/Message';


const Messages: React.FC = () => {
    const [messages, setMessages] = useState<IMessage[]>([])
    const { getMessages } = useCurrentChat()
    const wrapperRef = useRef<HTMLDivElement>(null)

    function scrollWrapperToBottom() {
        wrapperRef.current?.scrollTo({top: wrapperRef.current.offsetHeight})
    }

    useEffect(() => {
        getMessages(setMessages)
        scrollWrapperToBottom()
    }, [getMessages, wrapperRef.current])
    
    useEffect(() => {
        scrollWrapperToBottom()
    }, [messages])
    
    return ( 
        <div className="messages-wrapper" ref={wrapperRef}>
            {/* <Message /> */}
            {messages.map(m => (
                <Message message={m} key={m.date.nanoseconds} />
            ))}
        </div>
     );
}
 
export default Messages;