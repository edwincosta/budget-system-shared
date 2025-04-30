import { IForecast } from './IForecast';
export interface ICategory {
    _id?: string;
    name: string;
    categoryBudget: number;
    isActive: boolean;
    forecast: IForecast | string;
    createdAt?: Date;
    createdBy?: string;
    updatedAt?: Date;
    updatedBy?: string;
}
//# sourceMappingURL=ICategory.d.ts.map