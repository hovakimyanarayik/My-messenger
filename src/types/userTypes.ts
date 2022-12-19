import { RegProps } from "./authTypes";

export interface UserPropsWithId extends RegProps {
    uid: string
}

export interface UsersBaseMethods {
    addUser: (props: UserPropsWithId) => void
}

