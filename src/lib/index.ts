export function sendData<T extends { text: string }>(todo: T): Promise<T> {
    return new Promise((resolve, reject) => {
        if (todo?.text) {
            setTimeout(() => {
                resolve(todo)
            }, 1000);
        } else {
            const error = new Error('Invalid')
            setTimeout(() => {
                reject(error)
            }, 1000);
        }
    })
}
