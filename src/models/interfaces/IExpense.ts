import { ICategory } from "./ICategory";
import { IMonthlyBudget } from "./IMonthlyBudget";
import { ISubcategory } from "./ISubcategory";

export interface IExpense {
    _id?: string;
    monthlyBudget: IMonthlyBudget;
    category: ICategory;
    subcategory: ISubcategory;
    description?: string;
    amount: number;
    date: Date;
    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
}
