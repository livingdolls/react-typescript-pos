import { useContext, useEffect } from "react";
import { clientPrivate } from "../config/Axios";
import AuthContext from "../context/AuthProvider";
import UseRefreshToken from "./UseRefreshToken";

const usePrivate = () => {
	const refresh = UseRefreshToken();
	const auth = useContext(AuthContext);

	useEffect(() => {
		const requestIntercept = clientPrivate.interceptors.request.use(
			(config: any) => {
				if (!config.headers["Authorization"]) {
					config.headers[
						"Authorization"
					] = `Bearer ${auth?.auth?.accessToken}`;
				}
				return config;
			},
			(error) => Promise.reject(error)
		);

		const responseIntercept = clientPrivate.interceptors.response.use(
			(response) => response,
			async (error) => {
				const prevRequest = error?.config;
				if (error?.response?.status === 401 && !prevRequest?.sent) {
					prevRequest.sent = true;
					const newAccessToken = await refresh();
					// auth?.setAuth(newAccessToken);
					prevRequest.headers[
						"Authorization"
					] = `Bearer ${newAccessToken}`;
					return clientPrivate(prevRequest);
				}
				return Promise.reject(error);
			}
		);

		return () => {
			clientPrivate.interceptors.request.eject(requestIntercept);
			clientPrivate.interceptors.response.eject(responseIntercept);
		};
	}, [auth, refresh]);

	return clientPrivate;
};

export default usePrivate;
