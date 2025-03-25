import { Schema, model, Document } from 'mongoose';

export interface IForecast {
    _id?: string;
    name: string;
    budgets: Schema.Types.ObjectId[] | string[];
    users: Schema.Types.ObjectId[] | string[];
}

interface IForecastDocument extends Document, IForecast {
    _id: string;
}

const forecastSchema = new Schema<IForecastDocument>({
    name: {
        type: String,
        required: true,
    },
    budgets: [{
        type: Schema.Types.ObjectId,
        ref: 'Budget'
    }],
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
});

// Índice único composto para garantir unicidade de name por usuário
forecastSchema.index({ name: 1, users: 1 }, { unique: true });

export const Forecast = model<IForecastDocument>('Forecast', forecastSchema);