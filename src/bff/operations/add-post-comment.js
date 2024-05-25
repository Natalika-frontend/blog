import { addComment, getComments, getPost } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const addPostComment = async (hash, userId, postId, content) => {
	const accessRoles = [ROLE.ADMIN, ROLE.READER, ROLE.MODERATOR];

	const access = await sessions.access(hash, accessRoles);
	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	await addComment(userId, postId, content);

	const post = await getPost(postId);

	const comments = await getComments(postId);

	return {
		error: null,
		res: {
			...post,
			comments,
		},
	};
};
