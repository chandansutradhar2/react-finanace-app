import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export function InvestmentPage() {
	const [value, setValue] = React.useState(0);

	const handleChange = () => {};

	const tabClicked = (val) => {
		setValue(val);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="basic tabs example"
				>
					<Tab label="Mutual Funds" onClick={() => tabClicked(0)} />
					<Tab label="Equities" onClick={() => tabClicked(1)} />
					<Tab label="Debt Funds" onClick={() => tabClicked(2)} />
					<Tab label="Liquid Funds" onClick={() => tabClicked(3)} />
				</Tabs>
			</Box>
		</Box>
	);
}
