import { createContext, useState } from "react";

const AuthContext = createContext({});

type propsAuth = {
	children: any;
};

const AuthProvider = ({ children }: propsAuth) => {
	const [auth, setAuth] = useState();
	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
