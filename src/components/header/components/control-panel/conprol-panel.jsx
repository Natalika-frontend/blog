import styled from "styled-components";
import { Icon } from "../../../icon/icon";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../../button/button";

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const StyledLink = styled(Link)`
	color: #000000;
`;

const StyledIcon = styled.div`
	&:hover {
		cursor: pointer;
	}
`;

const ControlPanelContainer = ({className}) => {
	const navigate = useNavigate();

	return (<div className={className}>
		<RightAligned>
			<Button>
				<StyledLink to="/login">Войти</StyledLink>
			</Button>
		</RightAligned>
		<RightAligned>
			<StyledIcon onClick={() => navigate(-1)}><Icon id="fa-backward" margin="10px 0 0 0"/></StyledIcon>
			<Link to="/post"><Icon id="fa-file-text-o" margin="10px 0 0 16px"/></Link>
			<Link to="users"><Icon id="fa-users" margin="10px 0 0 16px"/></Link>
		</RightAligned>
	</div>);
};

export const ControlPanel = styled(ControlPanelContainer)`

`;
