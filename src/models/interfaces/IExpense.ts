export interface IExpense {
    _id?: string;
    category: string;
    subcategory: string;
    description?: string;
    amount: number;
    date: Date;
}
