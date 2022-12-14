import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Main from "./pages/Main";
import Test from "./pages/Test";

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
			<AuthProvider>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/test" element={<Test />} />
					<Route path="/dashboard/*" element={<Dashboard />} />
					<Route path="/auth/*" element={<Auth />} />
				</Routes>
			</AuthProvider>
		</ThemeProvider>
	);
}

export default App;
