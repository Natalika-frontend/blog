import { getUser } from "./get-user";
import { addUser } from "./add-user";
import { ROLE } from "../constants";
import { sessions } from "./sessions";

export const server = {
	async logout(session) {
		sessions.remove(session);
	},

	async authorize(authLogin, authPassword) {

		const user = await getUser(authLogin);

		if (!user) {
			return {
				error: 'Такой пользователь не найден',
				res: null,
			};
		}

		if (authPassword !== user.password) {
			return {
				error: 'Неверный пароль',
				res: null,
			};
		}

		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				role_id: ROLE.READER,
				session: sessions.create(user),
			},
		};
	},
	async register(regLogin, regPassword) {

		const user = await getUser(regLogin);

		if (user) {
			return {
				error: 'Такой логин уже занят',
				res: null,
			};
		}

		await addUser(regLogin, regPassword);

		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				role_id: ROLE.GUEST,
				session: sessions.create(user),
			},
		};
	},
};
