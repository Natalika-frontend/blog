import { setPostData } from './set-post-data';

export const addCommentAsync =
	(requestSever, userId, postId, content) => (dispatch) => {
		requestSever('addPostComment', userId, postId, content).then(
			(postData) => {
				dispatch(setPostData(postData.res));
			},
		);
	};
