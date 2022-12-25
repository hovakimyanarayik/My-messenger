import { collection, getDocs } from 'firebase/firestore';
import { UserPropsWithId } from './../types/userTypes';
import { useCallback } from 'react';
import { doc, setDoc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './../firebase.config';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';


function useUserChats() {
    const {user} = useAuth()
    const navigate = useNavigate()

    function combineIds(firstId: string, secondId: string): string {
        return firstId > secondId ? firstId + secondId : secondId + firstId
    }

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
        navigate(`${selectedUser.uid}`)

    }, [])

    const getUserChatsList = useCallback(async () => {
        if(!user) return;
        // const userChatsRef = collection(db, 'userChats')

        // const data = await getDocs(userChatsRef)
        // const chatList = data.docs.map((doc) => ({ ...doc.data()}))
        const data = await getDoc(doc(db, 'userChats', user.uid))
        const chats = data.data()
        console.log(chats);
    }, [])

    return {onChatOpen, getUserChatsList}

}

export default useUserChats