import { useContext } from "react";
import { ExpensesContext, UserContext } from "../../App";

export function LearningPage() {
	const user = useContext(UserContext);
	return (
		<>
			<h4>Welcome {user.fullName} Learning View</h4>
			CHanging Value{(user.email = "chandansutradhar2@gmail.com")}
		</>
	);
}
