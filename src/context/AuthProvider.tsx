import React, { createContext, useState } from "react";

type propsAuth = {
	children: React.ReactNode;
};

type token = {
	accessToken: string;
};

type AuthContext = {
	auth: token | null;
	setAuth: React.Dispatch<React.SetStateAction<token | null>>;
};

const AuthContext = createContext<AuthContext | null>(null);

export const AuthProvider = ({ children }: propsAuth) => {
	const [auth, setAuth] = useState<token | null>(null);
	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
