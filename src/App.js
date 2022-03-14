import logo from "./logo.svg";
import "./App.css";
import { ExpensePage } from "./Expenses/ExpensePage/ExpensePage";
import { HeaderBar } from "./Utility/HeaderBar/HeaderBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InvestmentPage } from "./Investments/InvestementPage/InvestmentPage";
import { LearningPage } from "./Learnings/LearningPage/LearningPage";

function App() {
	return (
		<BrowserRouter>
			<HeaderBar />
			<Routes>
				<Route path="/" element={<ExpensePage />} />
				<Route path="/expense" element={<ExpensePage />} />
				<Route path="/investment" element={<InvestmentPage />} />
				<Route path="/learning" element={<LearningPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
