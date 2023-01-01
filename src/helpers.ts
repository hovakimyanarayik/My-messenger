export function combineIds(firstId: string, secondId: string): string {
    return firstId > secondId ? firstId + secondId : secondId + firstId
}