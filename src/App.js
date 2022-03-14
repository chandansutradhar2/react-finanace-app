import logo from "./logo.svg";
import "./App.css";
import { ExpensePage } from "./Expenses/ExpensePage/ExpensePage";
import { HeaderBar } from "./Utility/HeaderBar/HeaderBar";

function App() {
	return (
		<div className="App">
			<HeaderBar />
			<ExpensePage />
		</div>
	);
}

export default App;
