import { IUser } from "./IUser";

export interface IAuthRefresh {
    _id?: string;
    token: string;
    user: IUser;
    createdAt: Date;
}