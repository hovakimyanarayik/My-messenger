import { RegProps, LoginProps, AuthHookMethods } from './../types/authTypes';
import { useAppDispatch } from './useAppDispatch';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase.config";
import { useAppSelector } from './useAppSelector';
import { changeUser, endLoading, setError, startLoading } from '../store/slices/authSlice';


function useAuth() : AuthHookMethods {
    const { user, isLoading, error } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

    onAuthStateChanged(auth, () => {
        dispatch(changeUser(auth.currentUser))
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
        register,
        login,
        logout
    }
}

export default useAuth;