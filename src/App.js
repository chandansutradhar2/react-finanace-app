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
import { createContext, useState } from "react";

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

function App() {
	const [expense, setExpense] = useState({
		amount: 0,
		title: "",
		expDate: "dd/mm/yyyy",
		category: "",
	});

	const addExpense = (exp) => {
		console.log("expense recieved in App.js", exp);
		setExpense(exp);
	};

	return (
		<ExpensesContext.Provider value={expense}>
			<ThemeProvider theme={THEME}>
				<BrowserRouter>
					<HeaderBar />
					<Routes>
						<Route path="/" element={<ExpensePage />} />
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
			</ThemeProvider>
		</ExpensesContext.Provider>
	);
}

export default App;
