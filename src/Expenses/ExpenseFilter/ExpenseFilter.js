import * as React from "react";
import { memo } from "react";

import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
const ExpenseFilter = (props) => {
	console.log("expense filter rendered", props);

	return (
		<ToggleButtonGroup aria-label="text formatting">
			<ToggleButton value="bold" aria-label="bold">
				<CurrencyRupeeIcon />
			</ToggleButton>
			<ToggleButton value="italic" aria-label="italic">
				<FormatItalicIcon />
			</ToggleButton>
			<ToggleButton value="underlined" aria-label="underlined">
				<FormatUnderlinedIcon />
			</ToggleButton>
			<ToggleButton value="color" aria-label="color" disabled>
				<FormatColorFillIcon />
				<ArrowDropDownIcon />
			</ToggleButton>
		</ToggleButtonGroup>
	);
};
export default memo(ExpenseFilter);
