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

        // eslint-disable-next-line
    }, [getMessages])
    
    useEffect(() => {
        scrollWrapperToBottom()

        // eslint-disable-next-line
    }, [messages])
    
    return ( 
        <div className="messages-wrapper" ref={wrapperRef}>
            {messages.map(m => (
                <Message message={m} key={m.date} />
            ))}
        </div>
     );
}
 
export default Messages;