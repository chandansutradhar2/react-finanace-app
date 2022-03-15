import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { ExpensePage } from "./Expenses/ExpensePage/ExpensePage";
import { HeaderBar } from "./Utility/HeaderBar/HeaderBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InvestmentPage } from "./Investments/InvestementPage/InvestmentPage";
import { LearningPage } from "./Learnings/LearningPage/LearningPage";
import { MutualFund } from "./Investments/MutualFunds/MutualFund";
import { DebtFund } from "./Investments/DebtFunds/DebtFund";
import { Equities } from "./Investments/Equities/Equities";
import { LiquidFund } from "./Investments/LiquidFunds/LiquidFund";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

const THEME = createTheme({
	typography: {
		fontFamily: `"Fredoka"`,
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
	},
});

export const ExpensesContext = createContext();
export const UserContext = createContext();

function App() {
	const [expenses, setExpenses] = useState([]);

	//todo logic to connect to server and fetch expenses
	useEffect(() => {
		//block of code that will execute only once in lifetime of the app
		axios
			.get("http://localhost:8000/user/expenses")
			.then((res) => {
				console.log(res.data);
				setExpenses(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const [user, setUser] = useState({
		fullName: "chandan",
		email: "",
		mobileNo: "",
	});
	const addExpense = (exp) => {
		//step 1 for updating state with array of objects
		const expensesCopy = expenses.slice();
		//step 2: add to copy of array
		expensesCopy.push(exp);
		//step3: update the arraycopy with state
		setExpenses(expensesCopy);
	};

	return (
		<ExpensesContext.Provider value={expenses}>
			<ThemeProvider theme={THEME}>
				<UserContext.Provider value={user}>
					<BrowserRouter>
						<HeaderBar />
						<Routes>
							<Route
								path="/"
								element={<ExpensePage addExpense={addExpense} />}
							/>
							<Route
								path="/expense"
								element={<ExpensePage addExpense={addExpense} />}
							/>
							<Route path="/investment" element={<InvestmentPage />}>
								<Route path="mutualfund" element={<MutualFund />} />
								<Route path="debtfund" element={<DebtFund />} />
								<Route path="liquidfund" element={<LiquidFund />} />
								<Route path="equities" element={<Equities />} />
							</Route>
							<Route path="/learning" element={<LearningPage />} />
						</Routes>
					</BrowserRouter>
				</UserContext.Provider>
			</ThemeProvider>
		</ExpensesContext.Provider>
	);
}

export default App;
