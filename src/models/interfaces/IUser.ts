import { IForecast } from "./IForecast";

export interface IUser {
    _id?: string;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    forecasts: IForecast[];
    createdAt?: Date;
    updatedAt?: Date;
}
