export interface ICardDetail {
    id?: number;
    cardNumber: string;
    cvv: string;
    expirationMonth: string;
    expirationYear: string;
    cardType: 'visa/mastercard' | 'amex'
}

