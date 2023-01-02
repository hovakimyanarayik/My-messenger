import { RegProps } from "./authTypes";


export interface UserPropsWithId extends Omit<RegProps, 'password'> {
    uid: string
}

export interface UsersBaseMethods {
    addUser: (props: UserPropsWithId) => void
    getUsers: (fn: (users: any) => void) => void
    getByName: (name: string, fn: (users: any) => void) => void
    getById: (id: string) => void
}

export type UserChatItem = [
    string, 
    {
        date: {
            nanoseconds: number
            seconds: number
        }
        userInfo: UserPropsWithId
    }
] 

export interface CurrentChatState {
    user: UserPropsWithId | null
    isLoading: boolean
    error: string | null
}