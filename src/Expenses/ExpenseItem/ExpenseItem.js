import React, { useState } from "react";
import { useRef } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
export function ExpenseItem(props) {
	const inputTitle = useRef();
	const inputAmount = useRef();
	const [expense, setExpense] = useState(props.exp);

	const handleEdit = () => {
		inputTitle.current.disabled = false;
		inputAmount.current.disabled = false;
		console.log(inputTitle.current);
	};

	const handleDelete = () => {};
	return (
		<tr key={props.idx}>
			<td>{props.idx + 1}</td>
			<td>{props.exp.expDate}</td>
			<td>
				<input
					type="text"
					ref={inputTitle}
					disabled={true}
					value={props.exp.title}
				/>
			</td>
			<td>
				<input
					type="text"
					ref={inputAmount}
					disabled={true}
					value={props.exp.amount}
				/>
			</td>
			<td>{props.exp.category}</td>
			<td>
				<IconButton aria-label="delete" onClick={() => handleDelete(props.idx)}>
					<DeleteIcon />
				</IconButton>
				<IconButton aria-label="delete" onClick={() => handleEdit(props.idx)}>
					<EditIcon />
				</IconButton>
			</td>
		</tr>
	);
}
