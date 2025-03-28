export interface IBudget {
    _id?: string;
    type: 'Betel' | 'Pessoal';
    month: number;
    year: number;
    amount: number;
    forecast: string;
    categories: string[];
}
