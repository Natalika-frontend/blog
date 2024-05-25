export const getComments = (postId) =>
	fetch(`http://localhost:3005/comments?posr_id=${postId}`).then(
		(loadedComments) => loadedComments.json(),
	);
