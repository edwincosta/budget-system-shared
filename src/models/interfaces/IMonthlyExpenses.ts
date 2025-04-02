import { ICategory } from "./ICategory";
import { IExpense } from "./IExpense";

interface IExpensesByCategory {
    _id: string;
    categoryBudget: string;
    categoryExpensesAmount: number;
}

interface IExpensesBySubcategory {
    _id: string;
    subcategoryBudget: string;
    subcategoryExpensesAmount: number;
}

export interface IMonthlyExpenses {
    expenses: IExpense[];
    monthlyBudgetAmount: number;
    categories: ICategory[];
    expensesByCategory: IExpensesByCategory[];
    expensesBySubcategory: IExpensesBySubcategory[];
}