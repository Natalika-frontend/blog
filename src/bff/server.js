import { authorize, register, logout, fetchRoles, fetchUsers } from "./operations";

export const server = {
	authorize,
	register,
	logout,
	fetchUsers,
	fetchRoles,
};
