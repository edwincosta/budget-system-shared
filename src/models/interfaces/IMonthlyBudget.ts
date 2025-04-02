import { ICategory } from "./ICategory";
import { IForecast } from "./IForecast";

export interface IMonthlyBudget {
    _id?: string;
    type: 'Betel' | 'Pessoal';
    month: number;
    year: number;
    budget: number;
    forecast: IForecast;
    categories: ICategory[];
    createdAt?: Date;
    updatedAt?: Date;
}
