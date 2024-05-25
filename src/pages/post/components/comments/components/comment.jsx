import styled from 'styled-components';
import { Icon } from '../../../../../components';

const CommentContainer = ({ className, id, author, publishedAt, content }) => {
	return (
		<div className={className}>
			<div className="informetiom-panel">
				<div className="author">
					<Icon
						id="fa-user-circle-o"
						margin="0 10px 0 0"
						onClick={() => {}}
					/>
					{author}
				</div>
				<div className="publiched-at">
					<Icon
						id="fa-calendar-o"
						margin="0 10px 0 0"
						onClick={() => {}}
					/>
					{publishedAt}
				</div>
			</div>
			<div className="comment-text">{content}</div>
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	& .information-panel {
		display: flex;
		justify-content: space-between;
	}

	& .author {
		display: flex;
	}

	& .publiched-at {
		display: flex;
	}
`;
