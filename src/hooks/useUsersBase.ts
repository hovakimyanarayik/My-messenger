import { UsersBaseMethods, UserPropsWithId } from './../types/userTypes';
import { useCallback } from 'react'
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from "../firebase.config";

function useUsersBase(): UsersBaseMethods {
    const usersCollectionRef = collection(db, "users");
    
    const addUser = useCallback(async (values: UserPropsWithId) => {
        try {
            await setDoc(doc(usersCollectionRef, values.uid), values)
        } catch (error: any) {
            throw new Error(error.message)
        }
    }, [usersCollectionRef])

    const getUsers = useCallback(async (fn: (users: any) => void) => {
        try {
            const data = await getDocs(usersCollectionRef);
            const users = data.docs.map((doc) => ({ ...doc.data()}))
            fn(users)
        } catch (error: any) {
            throw new Error(error.message)
        }
    }, [])

    const getByName = useCallback(async (name: string, fn: (users: any) => void) => {
        const q = query(usersCollectionRef, where("name", "==", name));
        const querySnapshot = await getDocs(q);
        const foundedUsers: any[] = []
        querySnapshot.forEach(doc => {
            foundedUsers.push(doc.data())
        })
        fn(foundedUsers);
        
    }, [])

    return {addUser, getUsers, getByName}
}

export default useUsersBase