import { useCallback } from 'react'
import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from "../firebase.config";
import { UsersBaseMethods, UserPropsWithId } from './../types/userTypes';


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
    }, [usersCollectionRef])

    const getByName = useCallback(async (name: string, fn: (users: any) => void) => {
        const q = query(usersCollectionRef, where("name", "==", name));
        const querySnapshot = await getDocs(q);
        const foundedUsers: any[] = []
        querySnapshot.forEach(doc => {
            foundedUsers.push(doc.data())
        })
        fn(foundedUsers);
    }, [usersCollectionRef])

    const getById = useCallback(async (id: string) => {
        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef);
        return docSnap.data()

        // eslint-disable-next-line
    }, [usersCollectionRef])

    return {addUser, getUsers, getByName, getById}
}

export default useUsersBase