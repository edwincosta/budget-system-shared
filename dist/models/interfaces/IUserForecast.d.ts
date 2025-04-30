import { IForecast } from "./IForecast";
import { IUser } from "./IUser";
export interface IUserForecast {
    _id?: string;
    user: string | IUser;
    forecast: string | IForecast;
    isDefault: boolean;
    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
}
//# sourceMappingURL=IUserForecast.d.ts.map