import { Schema, model, Document } from 'mongoose';

export interface IUser {
    _id?: string;
    name: string;
    email: string;
    password: string;
    admin: boolean;
    forecasts: Schema.Types.ObjectId[] | string[];
}

interface IUserDocument extends Document, IUser {
    _id: string;
}

const userSchema = new Schema<IUserDocument>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    admin: {
        type: Boolean,
        required: true,
        default: false
    },
    forecasts: [{
        type: Schema.Types.ObjectId,
        ref: 'Forecast'
    }]
});

export const User = model<IUserDocument>('User', userSchema);