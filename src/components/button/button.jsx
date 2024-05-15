import styled from "styled-components";

const ButtonContainer = ({ children, className, width, ...props }) => {
	return (
		<button className={className} {...props}>{children}</button>
	);
};

export const Button = styled(ButtonContainer)`
	font-size: 18px;
	width: ${({ width = '100%' }) => width};
	height: 32px;
	color: #000000;
	border: 1px solid #ffffff;
	border-radius: 3px;
	background-color: #dddddd;
	text-align: center;
	align-content: center;

	&:hover {
		cursor: pointer;
	}
`;