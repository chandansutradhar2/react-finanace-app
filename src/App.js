import logo from "./logo.svg";
import "./App.css";
import { ExpensePage } from "./Expenses/ExpensePage/ExpensePage";
import { HeaderBar } from "./Utility/HeaderBar/HeaderBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InvestmentPage } from "./Investments/InvestementPage/InvestmentPage";
import { LearningPage } from "./Learnings/LearningPage/LearningPage";
import { MutualFund } from "./Investments/MutualFunds/MutualFund";
import { DebtFund } from "./Investments/DebtFunds/DebtFund";
import { Equities } from "./Investments/Equities/Equities";
import { LiquidFund } from "./Investments/LiquidFunds/LiquidFund";
function App() {
	return (
		<BrowserRouter>
			<HeaderBar />
			<Routes>
				<Route path="/" element={<ExpensePage />} />
				<Route path="/expense" element={<ExpensePage />} />
				<Route path="/investment" element={<InvestmentPage />}>
					<Route path="mutualfund" element={<MutualFund />} />
					<Route path="debtfund" element={<DebtFund />} />
					<Route path="liquidfund" element={<LiquidFund />} />
					<Route path="equities" element={<Equities />} />
				</Route>
				<Route path="/learning" element={<LearningPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
