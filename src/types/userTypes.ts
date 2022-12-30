import { type } from "os";
import { RegProps } from "./authTypes";

// export interface UserPropsWithId extends RegProps {
//     uid: string
//     password: never
// }
export interface UserPropsWithId extends Omit<RegProps, 'password'> {
    uid: string
}

export interface UsersBaseMethods {
    addUser: (props: UserPropsWithId) => void
    getUsers: (fn: (users: any) => void) => void
    getByName: (name: string, fn: (users: any) => void) => void
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