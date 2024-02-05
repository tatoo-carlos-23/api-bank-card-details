import { RowDataPacket } from "mysql2";
import { CONN } from "../../config/mysql.config";
import { ICardDetail } from "../../interfaces/card-detail.interface";


export const cardDetailHelper = (userId: number, cardNumber: string): Promise<ICardDetail | undefined> => {
    return new Promise((resolve, reject) => {
        const query = "select det.id as id, det.card_number as cardNumber, det.cvv as cvv, det.expiration_month as expirationMonth, det.expiration_year as expirationYear, det.card_type as cardType from  detail_card det where det.user_id = ? and det.card_number = ?";
        CONN.query<RowDataPacket[]>(query, [userId, cardNumber], (error, rows) => {
            if (rows && rows.length > 0) {
                resolve(rows[0] as ICardDetail)
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