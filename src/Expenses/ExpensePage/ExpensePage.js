import { ExpenseForm } from "../ExpenseForm/ExpenseForm";
import "./ExpensePage.css";
export const ExpensePage = (props) => {
	return (
		<div className="exp-container">
			<h4>Expense Layout</h4>
			<ExpenseForm />
		</div>
	);
};
