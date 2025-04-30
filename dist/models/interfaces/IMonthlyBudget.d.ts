import { IForecast } from "./IForecast";
export interface IMonthlyBudget {
    _id?: string;
    month: number;
    year: number;
    budget: number;
    forecast: IForecast | string;
    isActive: boolean;
    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
}
//# sourceMappingURL=IMonthlyBudget.d.ts.map