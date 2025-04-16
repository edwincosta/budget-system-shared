import { ICategory } from "./ICategory";

export interface ISubcategory {
    _id?: string;
    name: string;
    subcategoryBudget: number;
    category: ICategory | string;
    isActive: boolean;
    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
}
