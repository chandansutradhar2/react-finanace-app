import { useContext } from "react";
import { ExpensesContext } from "../../App";

export function LiquidFund() {
	const expense = useContext(ExpensesContext);
	return (
		<>
			<h3>Liquid Fund</h3>
			<div>{JSON.stringify(expense)}</div>
		</>
	);
}
