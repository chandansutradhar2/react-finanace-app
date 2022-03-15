import { useContext } from "react";
import { ExpensesContext, UserContext } from "../../App";

export function ExpenseList() {
	const expenses = useContext(ExpensesContext);

	return (
		<>
			<table>
				<thead>
					<tr>
						<td>Sr No</td>
						<td>Expense Date</td>
						<td>Expense Name</td>
						<td>Amount</td>
						<td>Category</td>
					</tr>
				</thead>
				<tbody>
					{expenses.map((exp, idx) => (
						<tr key={idx}>
							<td>{idx + 1}</td>
							<td>{exp.expDate}</td>
							<td>{exp.title}</td>
							<td>{exp.amount}</td>
							<td>{exp.category}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}
