import { Request, Response } from 'express'
import { ErrorResponse } from '../models/error-response.model'

export const loginDto = (req: Request, res: Response, next: () => void): void => {
    const error = new ErrorResponse()

    const metaData = req.body as { email: string, password: string }

    if (Object.keys(metaData).length === 0) {
        error.setCode('DTO01-L67')
        error.setDescription("Se requiere 'email' y 'password'")
        res.status(401).send(error)
    }

    const verifyMetadata = metaData?.email === undefined || metaData?.password === undefined

    if (verifyMetadata) {
        error.setCode('DTO02-L67')
        res.status(401).send(error)
    }

    const verifyMetadaEmpty = (metaData.email || '').length === 0 || (metaData.password || '').length === 0;

    if (verifyMetadaEmpty) {
        error.setCode('DTO03-L68')
        res.status(401).send(error)
    }

    const regEmail = /\S+@\S+\.\S+/

    if (!regEmail.test(metaData.email)) {
        error.setCode('DTO04-L18')
        error.setDescription('Correo invalido.')
        res.status(401).send(error)
    }


    return next()
}