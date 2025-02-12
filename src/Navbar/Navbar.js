import React from 'react';
import styled from 'styled-components';
import { pizzaRed } from '../Styles/color';
import { Title } from '../Styles/title';

const NavbarStyled = styled.div`
	background-color: ${pizzaRed};
	padding: 10px;
	position: static;
	width: 100%;
`;

const Logo = styled(Title)`
	font-size: 20px;
	color: white;
	text-shadow: 1px 1px 4px #380502;
`;

export function Navbar() {
	return (
		<NavbarStyled>
			<Logo>Pizzeria🍕</Logo>
		</NavbarStyled>
	);
}
