export function combineIds(firstId: string, secondId: string): string {
    return firstId > secondId ? firstId + secondId : secondId + firstId
}

export function formateTimestamp(timestamp: number): string {
    return Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit',}).format(new Date(timestamp))
}