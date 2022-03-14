import { useContext } from "react";
import { UserContext } from "../../App";

export function MutualFund() {
	const user = useContext(UserContext);
	return <h3>Welcome {user.fullName}Mutual Fund View</h3>;
}
