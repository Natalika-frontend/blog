import { getComments, getUsers } from '../api';

export const getPostCommentsWithAuthor = async (postId) => {
	const comments = await getComments(postId);
	const users = await getUsers();
	// подход к получению логина пользователя выбран "неправильный", так как работаем c JSON-server. При существовании реальной базы данных на сервере должны делаться запросы, объединяющие таблицы по колонке user_id
	return comments.map((comment) => {
		const user = users.find(({ id }) => id === comment.authorId);

		return {
			...comment,
			author: user?.login,
		};
	});
};
