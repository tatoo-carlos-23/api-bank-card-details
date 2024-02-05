import { RowDataPacket } from "mysql2";
import { CONN } from "../../config/mysql.config";
import { IUser } from "../../interfaces/user.interface";


export const loginHelper = (email: string): Promise<IUser | undefined> => {
    return new Promise((resolve, reject) => {
        const query = "select usr.id as id, usr.full_name as fullName, usr.email as email, usr.password as password, usr.status as status from users usr where usr.email = ?;";
        CONN.query<RowDataPacket[]>(query, [email], (error, rows) => {
            if (rows && rows.length > 0) {
                resolve(rows[0] as IUser)
            }
            if (rows && rows.length === 0) {
                resolve(undefined)
            }
            if (error) {
                reject(error)
            }
        });

    })
}