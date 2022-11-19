import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Main from "./pages/Main";

const themeMod = createTheme({
	typography: {
		fontFamily: "Josefin Sans, sans-serif",
	},
	palette: {
		secondary: { main: "#2196f3", contrastText: "#000" },
		background: {
			default: "#f2f7ff",
			paper: "#f2f7ff",
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={themeMod}>
			<CssBaseline />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/dashboard/*" element={<Dashboard />} />
				<Route path="/auth/*" element={<Auth />} />
			</Routes>
		</ThemeProvider>
	);
}

export default App;
