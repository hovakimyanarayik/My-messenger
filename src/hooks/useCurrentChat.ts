import { useCallback } from 'react';
import { arrayUnion, Timestamp, updateDoc, onSnapshot, doc } from 'firebase/firestore';
import { db } from './../firebase.config';
import { IMessage } from './../types/messageTypes';
import { useAppSelector } from './useAppSelector';
import { useAppDispatch } from './useAppDispatch';
import useUsersBase from './useUsersBase';
import { changeUser, endLoading, startLoading } from '../store/slices/currentChatSlice';
import { combineIds } from '../helpers';
import useAuth from './useAuth';

function useCurrentChat() {
    const { error, isLoading, user: currentChatUser } = useAppSelector(state => state.currentChat)
    const { user } = useAuth()
    const dispatch = useAppDispatch()
    const { getById } = useUsersBase()

    const setChat = async (id: string) => {
        dispatch(startLoading())
        const currentUser = await getById(id)
        dispatch(changeUser(currentUser))
        dispatch(endLoading())
    }

    const sendMessage = useCallback(async (text: string, img: string | null) => {
        if(!user || !currentChatUser) return;
        const combinedId = combineIds(user.uid, currentChatUser.uid)
        await updateDoc(doc(db, 'chats', combinedId), {
            messages: arrayUnion({
                text,
                date: Timestamp.now(),
                img: img,
                senderId: user.uid
            })
        })
        
    }, [user, currentChatUser])

    const getMessages = useCallback( async (fn: (messages: IMessage[] ) => void) => {
        if(!user || !currentChatUser) return;
        const combinedId = combineIds(user.uid, currentChatUser.uid)
        onSnapshot(doc(db, 'chats', combinedId), (doc) => {
            if(doc.exists()) {
                const data = doc.data()
                const messages: IMessage[] = data.messages
                fn(messages.sort((a, b) => b.date.seconds - a.date.seconds))
            }            
        })
    }, [user, currentChatUser])

    return {currentChatUser, isLoading, error, setChat, sendMessage, getMessages}
}

export default useCurrentChat