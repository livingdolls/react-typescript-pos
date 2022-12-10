export type TUser = {
	_id_user: string;
	nama: string;
	email: string;
	password: string;
	isSuperAdmin: number | boolean;
	refresh_token: string;
	avatar: string;
};

export type TRegister = Pick<TUser, "nama" | "email" | "password">;
