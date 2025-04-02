import { ICategory } from "./ICategory";

export interface ISubcategory {
    _id?: string;
    name: string;
    subcategoryBudget: number;
    category: ICategory;
    createdAt?: Date;
    updatedAt?: Date;
}
