import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

export function ExpenseForm(props) {
	const categories = [
		"food",
		"travel",
		"groceries",
		"entertainment",
		"misc",
		"emis",
	];

	const [title, setTitle] = useState();
	const [amount, setAmount] = useState(1);
	const [category, setCategory] = useState(categories);
	const [expDate, setExpDate] = useState("dd/mm/yyyy");

	const handleChange = (event) => {
		setCategory(event.target.value);
	};

	const saveExpense = () => {
		console.log(amount, title, expDate, category);
		props.addExpense({
			amount: amount,
			title: title,
			expDate: expDate,
			category: category,
		});
	};
	return (
		<div
			style={{ textAlign: "center", justifyContent: "center", display: "flex" }}
		>
			<Box sx={{ maxWidth: 375 }}>
				<Card variant="outlined">
					<h4>Add Expenses</h4>
					<div>
						<TextField
							style={{ padding: "1rem" }}
							required
							id="outlined-required"
							label="Expenses Title"
							variant="outlined"
							value={title}
							onChange={(event) => setTitle(event.target.value)}
						/>
					</div>
					<div>
						<TextField
							style={{ padding: "1rem" }}
							required
							id="outlined-required"
							label="Amount"
							variant="outlined"
							value={amount}
							type="number"
							onChange={(event) => setAmount(event.target.value)}
						/>
					</div>
					<div>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">
								Select Category
							</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={category}
								label="Category"
								onChange={handleChange}
							>
								{categories.map((ele) => {
									return <MenuItem value={ele}>{ele}</MenuItem>;
								})}
							</Select>
						</FormControl>
					</div>
					<div>
						<TextField
							style={{ padding: "1rem" }}
							required
							id="outlined-required"
							label="Date Of Expense"
							variant="outlined"
							value={expDate}
							onChange={(event) => setExpDate(event.target.value)}
						/>
					</div>

					<Button variant="contained" onClick={saveExpense}>
						Add Expense
					</Button>
				</Card>
			</Box>
		</div>
	);
}
