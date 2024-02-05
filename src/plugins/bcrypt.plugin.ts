import bcryptjs from "bcryptjs"

export const verifyPassword = async (password: string, hashPassword: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        bcryptjs.compare(password, hashPassword, (err, res) => {
            if (err) reject(err)
            if (res) resolve(res)
            if (!res) resolve(res)
        })
    })
}