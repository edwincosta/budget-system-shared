import { IMonthlyBudget } from "./IMonthlyBudget";
import { ISubcategory } from "./ISubcategory";

export interface ICategory {
    _id?: string;
    name: string;
    categoryBudget: number;
    monthlyBudget: IMonthlyBudget;
    subcategories: ISubcategory[];
    createdAt?: Date;
    updatedAt?: Date;
}
