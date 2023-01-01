import { onSnapshot } from 'firebase/firestore';
import { UserChatItem, UserPropsWithId } from './../types/userTypes';
import { useCallback, useMemo } from 'react';
import { doc, setDoc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './../firebase.config';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';
import { combineIds } from '../helpers';


const useUserChats = () => {
    const {user} = useAuth()
    const navigate = useNavigate()



    // es ete useChat hook sarqem tanela petq yndex CHAT dbinna
    const createEmpityChat = async (combinedId: string) => {
        await setDoc(doc(db,'chats', combinedId), {messages: []})
    }

    const createNewUsersChat = async (ownerId: string, secondUser: UserPropsWithId) => {
        const combinedId = combineIds(ownerId, secondUser.uid)

        await updateDoc(doc(db, 'userChats', ownerId), {
            [combinedId + '.userInfo']: {
                uid: secondUser.uid,
                name: secondUser.name,
                email: secondUser.email,
                photoURL: secondUser.photoURL
            },
            [combinedId+'.date']: serverTimestamp()
        })
    }

    const onChatOpen = useCallback(async (selectedUser: UserPropsWithId) => {
        if(!user) return;

        const combinedId = combineIds(user.uid, selectedUser.uid)
        const res = await getDoc(doc(db, 'chats', combinedId))

        if(!res.exists()) {
            // create chat in chats collection
            await createEmpityChat(combinedId)

            await createNewUsersChat(user.uid, selectedUser)

            await createNewUsersChat(selectedUser.uid, {
                uid: user.uid, 
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL
            })
        }
        navigate(`/${selectedUser.uid}`)

    }, [])


    const getUserChatsList = useCallback(async (fn: (userChats: UserChatItem[]) => void) => {
        if(!user) return;
        onSnapshot(doc(db, 'userChats', user.uid), (doc) => {
            const data = doc.data()
            const userChats: UserChatItem[] = data ? Object.entries(data) : []
            fn(userChats)
        })

    }, [])

    return {onChatOpen, getUserChatsList}

}


export default useUserChats