import { useContext } from "react";
import { ExpenseForm } from "../ExpenseForm/ExpenseForm";
import { ExpenseList } from "../ExpenseList/ExpenseList";
import "./ExpensePage.css";
import { ExpensesContext, UserContext } from "../../App";

export const ExpensePage = (props) => {
	const user = useContext(UserContext);

	const addExpense = (exp) => {
		props.addExpense(exp);
	};

	return (
		<div className="exp-container">
			<h4>Welcome {user.fullName}</h4>
			<ExpenseForm addExpense={addExpense} />
			<ExpenseList />
		</div>
	);
};
