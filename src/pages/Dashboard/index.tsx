import { Route, Routes } from "react-router-dom";
import Layout from "../../layouts";
import Barang from "./Barang/Barang";
import Home from "./Home";
import Kategori from "./Kategori";
const Dashboard: React.FC = () => {
	return (
		<Layout>
			<Routes>
				<Route index element={<Home />} />
				<Route path="kategori" element={<Kategori />} />
				<Route path="barang" element={<Barang />} />
			</Routes>
		</Layout>
	);
};

export default Dashboard;
