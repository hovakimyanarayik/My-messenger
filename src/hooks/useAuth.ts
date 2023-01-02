import { useEffect } from 'react'
import { auth, db } from "../firebase.config";
import { doc, setDoc } from 'firebase/firestore';
import { RegProps, LoginProps, AuthHookMethods } from './../types/authTypes';
import { useAppDispatch } from './useAppDispatch';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useAppSelector } from './useAppSelector';
import { changeUser, endLoading, setError, setInitialized, startLoading } from '../store/slices/authSlice';
import useUsersBase from './useUsersBase';

const defaultPhotoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyDgkPQavzX7KwcLzeAsf0fgOx_-D51F3fag&usqp=CAU'

function useAuth() : AuthHookMethods {
    const { user, isLoading, error, initialized } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()
    const { addUser } = useUsersBase()

    useEffect(() => {
        if(error) {
            setTimeout(() => dispatch(setError(null)), 2000)
        }
    }, [error])

    onAuthStateChanged(auth, () => {
        dispatch(changeUser(auth.currentUser))
        if(!initialized) {
            dispatch(setInitialized())
        }
    })

    const createEmpityUserChat = async (uid: string) => {
        await setDoc(doc(db, 'userChats', uid), {})
    }

    async function register({name, email, password, photoURL}: RegProps) {
        if(isLoading) return
        try {
            dispatch(startLoading())
            const response = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            )
            await updateProfile(response.user, {
                displayName: name,
                photoURL: photoURL || defaultPhotoUrl
            })

            await addUser({name, email, photoURL: photoURL || defaultPhotoUrl, uid: response.user.uid})
            
            await createEmpityUserChat(response.user.uid)
            
            dispatch(endLoading())
        } catch (error: any) {
            dispatch(setError(error?.message))
        }
    }

    async function login({email, password}: LoginProps) {
        if(isLoading) return
        try {
            dispatch(setError(null))
            dispatch(startLoading())
            await signInWithEmailAndPassword(
                auth,
                email,
                password
            )
            dispatch(endLoading())
        } catch (error: any) {
            dispatch(setError(error.message))
        }
    }

    function logout() {
        signOut(auth)
    }

    return {
        user,
        isLoading,
        error,
        initialized,
        register,
        login,
        logout
    }
}

export default useAuth;