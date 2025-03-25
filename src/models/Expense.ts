import { Schema, model, Document } from 'mongoose';

interface IExpense {
    _id?: string;
    category: Schema.Types.ObjectId | string;
    subcategory: Schema.Types.ObjectId | string;
    description?: string;
    amount: number;
    date: Date;
}

interface IExpenseDocument extends Document, IExpense {
    _id: string;
}

const ExpenseSchema = new Schema<IExpenseDocument>({
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    subcategory: { type: Schema.Types.ObjectId, ref: 'Subcategory', required: true },
    description: { type: String },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
});

export const Expense = model<IExpenseDocument>('Expense', ExpenseSchema);