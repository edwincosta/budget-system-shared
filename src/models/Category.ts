import { Schema, model, Document } from 'mongoose';

export interface ICategory {
    _id?: string;
    budget: Schema.Types.ObjectId | string;
    name: string;
    amount: number;
    subcategories: Schema.Types.ObjectId[] | string[];
}

interface ICategoryDocument extends Document, ICategory {
    _id: string
}

const CategorySchema = new Schema<ICategoryDocument>({
    budget: { type: Schema.Types.ObjectId, ref: 'Budget', required: true },
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    subcategories: [{ type: Schema.Types.ObjectId, ref: 'Subcategory' }],
});

export const Category = model<ICategoryDocument>('Category', CategorySchema);