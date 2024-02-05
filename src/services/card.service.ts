import { IResponseDetailCard } from "../interfaces/response-detail-card.interface";
import { ErrorResponse } from "../models/error-response.model";

import { cardDetailHelper } from "./helpers/card.helper";


export const cardDetailService = async (cardNumber: string, userId: number): Promise<IResponseDetailCard> => {
    const error = new ErrorResponse()
    try {
        const cardDetail = await cardDetailHelper(userId, cardNumber)

        if (cardDetail === undefined) {
            error.setCode("100-UDE")
            return Promise.reject(error.build())
        }

        return Promise.resolve({
            cardNumber: cardDetail.cardNumber,
            expirationMonth: cardDetail.expirationMonth,
            expirationYear: cardDetail.expirationYear,
            cardType: cardDetail.cardType
        })

    } catch (error) {
        return Promise.reject(error)
    }
}