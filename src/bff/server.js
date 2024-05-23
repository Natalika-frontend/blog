import {
	authorize,
	fetchRoles,
	fetchUsers,
	logout,
	register,
	removeUser,
	updateUserRole,
} from './operations';

export const server = {
	authorize,
	register,
	logout,
	fetchUsers,
	fetchRoles,
	updateUserRole,
	removeUser,
};
