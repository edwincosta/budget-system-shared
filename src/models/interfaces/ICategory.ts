export interface ICategory {
    _id?: string;
    name: string;
    categoryBudget: number;
    isActive: boolean;
    createdAt?: Date;
    createdBy?: string;
    updatedAt?: Date;
    updatedBy?: string;
}
