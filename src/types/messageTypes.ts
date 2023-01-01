export interface IMessage {
    date: {
        nanoseconds: number
        seconds: number
    }
    img: string | null
    senderId: string
    text: string
}