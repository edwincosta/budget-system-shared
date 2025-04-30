import { ICategory } from "./ICategory";
import { IExpense } from "./IExpense";
export interface IExpensesByCategory {
    _id: string;
    categoryBudget: number;
    categoryExpensesAmount: number;
}
export interface IExpensesBySubcategory {
    _id: string;
    subcategoryBudget: number;
    subcategoryExpensesAmount: number;
}
export interface IMonthlyExpenses {
    expenses: IExpense[];
    monthlyBudgetAmount: number;
    monthlyBudgetExpensesAmount: number;
    categories: ICategory[];
    expensesByCategory: IExpensesByCategory[];
    expensesBySubcategory: IExpensesBySubcategory[];
}
//# sourceMappingURL=IMonthlyExpenses.d.ts.map