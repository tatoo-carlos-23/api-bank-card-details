import jwt from 'jsonwebtoken'
import { IResponseLogin } from "../interfaces/response-login.interface";
import { ErrorResponse } from "../models/error-response.model";
import { verifyPassword } from "../plugins/bcrypt.plugin";
import { loginHelper } from "./helpers/auth.helper";
import { TOKEN_SECRET } from '../settings/settings'

export const loginService = async (email: string, password: string): Promise<IResponseLogin> => {
    const error = new ErrorResponse()
    try {
        const user = await loginHelper(email)

        if (user === undefined) {
            error.setCode("234-UJW")
            error.setDescription('Credenciales no encontradas')
            return Promise.reject(error.build())
        }

        if (!(await verifyPassword(password, user.password || ""))) {
            error.setCode("244-UJW")
            error.setDescription('Contraseña incorrecta.')
            return Promise.reject(error.build())
        }

        delete user.password
        const token = jwt.sign(user, TOKEN_SECRET)

        return Promise.resolve({ token })
    } catch (_error) {
        error.setCode("000-UJW")
        return Promise.reject(error.build())
    }
}