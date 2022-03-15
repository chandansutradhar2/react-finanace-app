import { useCallback, useContext, useRef, useState } from "react";
import { ExpensesContext, UserContext } from "../../App";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Button from "@mui/material/Button";

import { ExpenseItem } from "../ExpenseItem/ExpenseItem";

export function ExpenseList() {
	const [selectedItem, setSeletedItem] = useState();
	const [counter, setCounter] = useState(0);

	const updateCounter = useCallback(() => {
		//logic to update condition when child component should be re-rendered
		//setCounter(counter + 4);
	}, [counter]);
	const expenses = useContext(ExpensesContext);

	console.log("Expense List loaded");
	return (
		<>
			<Button onClick={() => setCounter(Math.random() * 10)}>
				Update Counter
			</Button>
			<Button onClick={() => setSeletedItem(Math.random() * 10)}>
				Select Expenses
			</Button>
			<ExpenseFilter updateCounter={updateCounter} />
			<table>
				<thead>
					<tr>
						<td>Sr No</td>
						<td>Expense Date</td>
						<td>Expense Name</td>
						<td>Amount</td>
						<td>Category</td>
						<td>Action</td>
					</tr>
				</thead>
				<tbody>
					{expenses.map((exp, idx) => {
						return <ExpenseItem key={idx} idx={idx} exp={exp} />;
					})}
				</tbody>
			</table>
		</>
	);
}
