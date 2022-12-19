import { useEffect } from 'react'
import { RegProps, LoginProps, AuthHookMethods } from './../types/authTypes';
import { useAppDispatch } from './useAppDispatch';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase.config";
import { useAppSelector } from './useAppSelector';
import { changeUser, endLoading, setError, setInitialized, startLoading } from '../store/slices/authSlice';
import useUsersBase from './useUsersBase';


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
                photoURL: photoURL || 'urlcustom'
            })

            await addUser({name, email, password, photoURL, uid: response.user.uid})
            
            
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