import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCar } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
	const [BurgerStatus, SetBurgerStatus] = useState(false);
	const cars = useSelector(selectCar);

	console.log(cars);

	return (
		<Container>
			<a href="#">
				<img src="./images/logo.svg" alt="Logo" />
			</a>
			<Menu>
				{cars &&
					cars.map((car, index) => (
						<a key={index} href="#">
							{car}
						</a>
					))}
			</Menu>
			<RightMenu>
				<a href="#">shop</a>
				<a href="#">TESLA Account</a>
				<CustomMenu onClick={() => SetBurgerStatus(true)} />
			</RightMenu>
			<BurgerNav show={BurgerStatus}>
				<CloseWrapper>
					<CustomClose onClick={() => SetBurgerStatus(false)} />
				</CloseWrapper>
				{cars &&
					cars.map((car, index) => (
						<li>
							<a key={index} href="#">
								{car}
							</a>
						</li>
					))}
				<li>
					<a href="#">Existing Inventory</a>
				</li>
				<li>
					<a href="#">Use Inventory</a>
				</li>
				<li>
					<a href="#">Trade In</a>
				</li>
				<li>
					<a href="#">Cyber Truck</a>
				</li>
				<li>
					<a href="#">Roaster</a>
				</li>
				<li>
					<a href="#">Semi</a>
				</li>
				<li>
					<a href="#">Charging</a>
				</li>
				<li>
					<a href="#">Power</a>
				</li>
				<li>
					<a href="#">Communication</a>
				</li>
				<li>
					<a href="#">Utilities</a>
				</li>
				<li>
					<a href="#">Text Drive</a>
				</li>
			</BurgerNav>
		</Container>
	);
}

export default Header;

const Container = styled.div`
	min-height: 60px;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	top: 0;
	right: 0;
	left: 0;
`;

const Menu = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;

	a {
		font-weight: 600;
		text-transform: uppercase;
		padding: 0 10px;
		flex-wrap: nowrap;
	}
	@media (max-width: 768px) {
		display: none;
	}
`;

const RightMenu = styled.div`
	display: flex;
	align-items: center;
	a {
		font-weight: 600;
		text-transform: uppercase;
		margin-right: 10px;
	}
`;

const CustomMenu = styled(MenuIcon)`
	cursor: pointer;
`;

const BurgerNav = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	background-color: white;
	width: 300px;
	z-index: 10;
	padding: 20px;
	display: flex;
	flex-direction: column;
	text-align: start;

	transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
	transition: transform 0.2s ease-in;

	li {
		padding: 15px 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		list-style: none;

		a {
			font-weight: 600;
		}
	}
`;

const CloseWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const CustomClose = styled(CloseIcon)`
	cursor: pointer;
`;
