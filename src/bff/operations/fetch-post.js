import { getComments, getPost, getUsers } from '../api';

export const fetchPost = async (postId) => {
	let post;
	let error;

	try {
		post = await getPost(postId);
	} catch (postError) {
		error = postError;
	}

	if (error) {
		return {
			error,
			res: null,
		};
	}

	const users = await getUsers();

	const comments = await getComments(postId);
	// подход к получению логина пользователя выбран "неправильный", так как работаем c JSON-server. При существовании реальной базы данных на сервере должны делаться запросы, объединяющие таблицы по колонке user_id
	const commentsWidthAuthor = comments.map((comment) => {
		const user = users.find(({ id }) => id === comment.authorId);

		return {
			...comment,
			author: user?.login,
		};
	});

	return {
		error: null,
		res: {
			...post,
			comments: commentsWidthAuthor,
		},
	};
};
