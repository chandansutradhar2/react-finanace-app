import { ExpenseForm } from "../ExpenseForm/ExpenseForm";
import "./ExpensePage.css";
export const ExpensePage = (props) => {
	const addExpense = (exp) => {
		props.addExpense(exp);
	};

	return (
		<div className="exp-container">
			<h4>Expense Layout</h4>
			<ExpenseForm addExpense={addExpense} />
		</div>
	);
};
