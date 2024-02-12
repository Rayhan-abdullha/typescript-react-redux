export function sendData<T>(todo: T): Promise<T> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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