export interface IMessage {
    date: number
    img: string | null
    senderId: string
    text: string
}

export type UserLastMessage = null | {
    text: string
    date: number
}