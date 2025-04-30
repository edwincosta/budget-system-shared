import { ICategory } from "./ICategory";
import { IMonthlyBudget } from "./IMonthlyBudget";
import { ISubcategory } from "./ISubcategory";

export interface IExpense {
    _id?: string;
    monthlyBudget: IMonthlyBudget | string;
    category: ICategory | string;
    subcategory: ISubcategory | string;
    type: 'Betel' | 'Pessoal';
    description?: string;
    amount: number;
    date: Date;
    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
}
