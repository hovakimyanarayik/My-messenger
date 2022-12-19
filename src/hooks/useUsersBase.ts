import { UsersBaseMethods, UserPropsWithId } from './../types/userTypes';
import { useCallback } from 'react'
import { collection, doc, setDoc } from "firebase/firestore";
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


    return {addUser}
}

export default useUsersBase