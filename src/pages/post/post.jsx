import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Comments, PostContent } from './components';
import { useParams } from 'react-router-dom';
import { useServerRequest } from '../../hooks';
import { loadPostAsync } from '../../actions';
import { selectPost } from '../../selectors';

const PostContainer = ({ className }) => {
	const dispatch = useDispatch();
	const params = useParams();
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);

	useEffect(() => {
		dispatch(loadPostAsync(requestServer, params.id));
	}, [requestServer, dispatch, params.id]);

	return (
		<div className={className}>
			<PostContent post={post} />
			<Comments comments={post.comments} />
		</div>
	);
};

export const Post = styled(PostContainer)`
	color: white;
	padding: 40px 80px;
`;
