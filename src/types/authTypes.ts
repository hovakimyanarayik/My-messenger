import { MultiFactorUser } from "firebase/auth"

export interface AuthState {
    user: MultiFactorUser | null
    isLoading: boolean
    error: string | null
    initialized: boolean
}

export interface AuthHookMethods extends AuthState {
    register: (options: RegProps) => void
    login: (options: LoginProps) => void
    logout: () => void
}

export interface RegProps {
    name: string
    email: string
    password: string
    photoURL: string | null
}

export interface LoginProps {
    email: string
    password: string
}