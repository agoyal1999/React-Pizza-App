import styled from 'styled-components';
import { Title } from '../Styles/title';
export const FoodGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;
`;

export const FoodLabel = styled(Title)`
	position: absolute;
	background-color: rgba(255, 255, 255, 0.8);
	padding: 5px;
`;

export const Food = styled.div`
	height: 200px;
	background-image: ${({ img }) => `url(${img});`};
	background-position: center;
	background-size: cover;
	filter: contrast(70%);
	padding: 10px;
	font-size: 30px;
	font-weight: 900;
	border-radius: 5px;
	margin-top: 5px;
	transition-property: margin-top filter;
	&:hover {
		cursor: pointer;
		filter: contrast(100%);
		margin-top: 0px;
		margin-bottom: 5px;
	}
`;
