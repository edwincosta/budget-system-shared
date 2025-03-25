import { Schema, model, Document } from 'mongoose';

export interface ISubcategory {
    _id?: string;
    name: string;
    amount: number;
    isPersonal: boolean;
    category: Schema.Types.ObjectId | string;
}

interface ISubcategoryDocument extends Document, ISubcategory {
    _id: string;
}

const SubcategorySchema = new Schema<ISubcategoryDocument>({
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    isPersonal: { type: Boolean, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
});

export const Subcategory = model<ISubcategoryDocument>('Subcategory', SubcategorySchema);