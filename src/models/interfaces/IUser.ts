export interface IUser {
    _id?: string;
    username: string;
    personName: string,
    email: string;
    password: string;
    isAdmin: boolean;
    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
}

export interface IUserExtended extends IUser {
    _id: string;
    defaultForecast?: string;
    currentMonthlyBudget?: string;
}
