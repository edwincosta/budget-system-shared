import { Schema, model, Document } from 'mongoose';

export interface IBudget {
    _id?: string;
    type: 'Betel' | 'Pessoal';
    month: number;
    year: number;
    amount: number;
    forecast: Schema.Types.ObjectId | string;
}

interface IBudgetDocument extends Document, IBudget {
    _id: string;
}

const BudgetSchema = new Schema<IBudgetDocument>({
    type: { type: String, enum: ['Betel', 'Pessoal'], required: true },
    month: { type: Number, required: true },
    year: { type: Number, required: true },
    amount: { type: Number, required: true },
    forecast: { type: Schema.Types.ObjectId, ref: 'Forecast', required: true },
});

// Índice único composto para garantir unicidade de month, year, type e forecast
BudgetSchema.index({ month: 1, year: 1, type: 1, forecast: 1 }, { unique: true });

export const Budget = model<IBudgetDocument>('Budget', BudgetSchema);