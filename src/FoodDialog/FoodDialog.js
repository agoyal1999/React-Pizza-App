import React from 'react';
import styled from 'styled-components';
import { FoodLabel } from '../Menu/FoodGrid';
import { pizzaRed } from '../Styles/color';
import { Title } from '../Styles/title';
import { formatPrice } from '../Data/FoodData';
import { QuantityInput } from './QuantityInput';
import { useQuantity } from '../Hooks/useQuantity';

export const Dialog = styled.div`
	width: 500px;
	background-color: white;
	position: fixed;
	top: 75px;
	z-index: 11;
	max-height: calc(100% - 100px);
	left: calc(50% - 250px);
	display: flex;
	flex-direction: column;
`;

export const DialogContent = styled.div`
	overflow: auto;
	min-height: 100px;
	padding: 0px 40px;
	padding-bottom: 80px;
`;

export const DialogFooter = styled.div`
	box-shadow: 0px -2px 10px 0px grey;
	height: 60px;
	display: flex;
	justify-content: center;
`;

export const ConfirmButton = styled(Title)`
  margin: 10px;
  color: white;
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: ${pizzaRed};
  ${({ disabled }) =>
		disabled &&
		`
    opactity: .5; 
    background-color: grey; 
    pointer-events: none; 
  `}
`;

export function getPrice(order) {
	return order.quantity * order.price;
}

export const DialogShadow = styled.div`
	position: fixed;
	height: 100%;
	width: 100%;
	top: 0px;
	background-color: black;
	opacity: 0.7;
	z-index: 11;
`;

const DialogBanner = styled.div`
	min-height: 200px;
	margin-bottom: 20px;
	${({ img }) => (img ? `background-image: url(${img});` : `min-height: 75px;`)} background-position: center;
	background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
  font-size: 30px;
  padding: 5px 40px;
  top: ${({ img }) => (img ? `100px` : `20px`)};
`;

function FoodDialogContainer({ openFood, setOpenFood, setOrders, orders }) {
	const quantity = useQuantity(openFood && openFood.quantity);

	function close() {
		setOpenFood();
	}

	const order = {
		...openFood,
		quantity: quantity.value
	};

	function addToOrder() {
		setOrders([ ...orders, order ]);
		close();
	}

	return openFood ? (
		<div>
			<DialogShadow onClick={close} />
			<Dialog>
				<DialogBanner img={openFood.img}>
					<DialogBannerName> {openFood.name} </DialogBannerName>
				</DialogBanner>
				<DialogContent>
					<QuantityInput quantity={quantity} />
					<p>Ingredients ({openFood.ingredients})</p>
				</DialogContent>
				<DialogFooter>
					<ConfirmButton onClick={addToOrder}>Add to order: {formatPrice(openFood.price)}</ConfirmButton>
				</DialogFooter>
			</Dialog>
		</div>
	) : null;
}

export function FoodDialog(props) {
	if (!props.openFood) return null;
	return <FoodDialogContainer {...props} />;
}
