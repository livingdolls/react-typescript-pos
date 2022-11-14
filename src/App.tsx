import { createTheme, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Main from "./pages/Main";

const themeMod = createTheme({
	typography: {
		fontFamily: "Josefin Sans, sans-serif",
	},
	palette: {
		background: {
			default: "#f2f7ff",
			paper: "#f2f7ff",
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={themeMod}>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/dashboard/*" element={<Dashboard />} />
			</Routes>
		</ThemeProvider>
	);
}

export default App;
