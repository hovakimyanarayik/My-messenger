import React, { useEffect, useState } from 'react';
import { BsEmojiSmileFill } from 'react-icons/bs';
import {ImAttachment} from 'react-icons/im'
import { IoMdSend } from 'react-icons/io'
import UploadField from '../../../../../../components/UploadField';
import useCurrentChat from '../../../../../../hooks/useCurrentChat';
import useStorage from '../../../../../../hooks/useStorage';

const ChatInput: React.FC = () => {
    const [text, setText] = useState<string>('')
    const { sendMessage } = useCurrentChat()
    const { downloadURL, isUploading, removeFileURL, uploadFile } = useStorage()

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }

    const handleSend = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if(!text && !downloadURL ) return;
        sendMessage(text, downloadURL)
        removeFileURL()
        setText('')
    }


    return ( 
        <div className="chat-input-wrapper">
            <BsEmojiSmileFill className='chat-icon' />
            <UploadField 
                onUpload={uploadFile} 
                handleRemoveFile={removeFileURL}
                imageUrl={downloadURL}
                showUploadList={false}
                previewType='rect'
            >
                <ImAttachment className='chat-icon' />
            </UploadField>
            <div className='input-wrapper'>
                <input 
                    type='text' 
                    placeholder='Type...' 
                    value={text}
                    onChange={handleChange}
                />
                <button onClick={handleSend} disabled={isUploading}>
                    <IoMdSend  className='chat-icon'/>
                </button>
            </div>
        </div>
    );
}
 
export default ChatInput;