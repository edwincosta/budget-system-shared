import { IMonthlyBudget } from "./IMonthlyBudget";
import { ICategory } from "./ICategory";

export interface IMonthlyBudgetCategory {
    _id?: string;
    monthlyBudget: string | IMonthlyBudget;
    category: string | ICategory;
    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
}