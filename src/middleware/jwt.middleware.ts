import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../settings/settings'
import { IUser } from '../interfaces/user.interface'

export const verifyToken = (req: Request, res: Response, next: () => void): void => {
    const token = req.header('Authorization')
    if (!token) res.status(401).send({ error: 'Acceso denegado' })

    try {
        const getToken = token?.replace("Bearer ", "")
        const user: IUser = jwt.verify(getToken || "", TOKEN_SECRET) as IUser

        if (user) {
            (req as any).getUserAuth = { ...user }
        }

        return next()
    } catch (error) {

        res.status(401).send({ error: 'No estas autorizado...' })
    }
}