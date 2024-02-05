import * as dotenv from 'dotenv'
dotenv.config()

export const PORT: number = parseInt(process.env.PORT || '6500')
 
export const TOKEN_SECRET = process.env.TOKEN_SECRET_JWT || "" 