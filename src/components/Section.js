import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import Fade from "react-reveal/Fade";

function Section({
	title,
	description,
	leftButtonText,
	rightButtonText,
	backgroundImg,
}) {
	return (
		<Container bgImage={backgroundImg}>
			<Fade bottom>
				<ItemText>
					<h1>{title}</h1>
					<p>{description}</p>
				</ItemText>
			</Fade>
			<Button>
				<Fade bottom>
					<ButtonGroup>
						<LeftButton>{leftButtonText}</LeftButton>
						{rightButtonText && <RightButton>{rightButtonText}</RightButton>}
					</ButtonGroup>
				</Fade>
				<DownArrow src="./images/down-arrow.svg" />
			</Button>
		</Container>
	);
}

export default Section;

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-image: ${(props) => `url(./images/${props.bgImage})`};
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const ItemText = styled.div`
	padding-top: 15vh;
	text-align: center;
	margin-bottom: 30px;
`;

const ButtonGroup = styled.div`
	display: flex;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const LeftButton = styled.div`
	background-color: rgb(23, 26, 32, 0.8);
	height: 40px;
	width: 256px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100px;
	opacity: 0.85;
	text-transform: uppercase;
	font-size: 12px;
	cursor: pointer;
	margin: 8px;
`;
const RightButton = styled(LeftButton)`
	background-color: white;
	color: black;
	opacity: 0.65;
`;

const DownArrow = styled.img`
	margin-top: 20px;
	height: 40px;
	animation: animationDown infinite 1.5s;
	overflow-x: hidden;
`;

const Button = styled.div`
	margin-bottom: 30px;
`;
