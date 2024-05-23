import styled from 'styled-components';
import { H2 } from '../../components';
import { useEffect } from 'react';

const CommentsContainer = ({ className }) => {
	useEffect(() => {}, []);

	return <div className={className}></div>;
};

export const Comments = styled(CommentsContainer)``;
