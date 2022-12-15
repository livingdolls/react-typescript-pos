import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

const PrivateRoute = () => {
	const auths = useContext(AuthContext);
	return auths?.auth ? <Outlet /> : <Navigate to={"/auth/"} />;
};

export default PrivateRoute;
