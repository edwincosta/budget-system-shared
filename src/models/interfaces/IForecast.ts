import { IMonthlyBudget } from "./IMonthlyBudget";
import { IUser } from "./IUser";

export interface IForecast {
    _id?: string;
    name: string;
    monthlyBudgets: IMonthlyBudget[];
    users: IUser[];
    createdAt?: Date;
    updatedAt?: Date;
}
