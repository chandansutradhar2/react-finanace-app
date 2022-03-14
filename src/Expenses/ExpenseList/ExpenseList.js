import { useContext } from "react";
import { ExpensesContext, UserContext } from "../../App";

export function ExpenseList() {
	const expense = useContext(ExpensesContext);
	const user = useContext(UserContext);
	return <div>{JSON.stringify(expense)}</div>;
}
