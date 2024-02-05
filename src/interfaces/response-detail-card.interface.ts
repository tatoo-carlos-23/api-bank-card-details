import { ICardDetail } from "./card-detail.interface";

export type IResponseDetailCard = Omit<ICardDetail, 'id' | 'cvv'>