import React, { useState } from 'react';
import { Navbar } from './Navbar/Navbar';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu';
import { FoodDialog } from './FoodDialog/FoodDialog';
import { Order } from './Order/Order';
import { GlobalStyle } from './Styles/GlobalStyles';
import { useOpenFood } from './Hooks/useOpenFood';
import { useOrders } from './Hooks/useOrders';
import { useTitle } from './Hooks/useTitle';
import { OrderDialog } from './Order/OrderDialog';
import { useOrderDialog } from './Hooks/useOrderDialog';

function App() {
	const openFood = useOpenFood();
	const orders = useOrders();
	const orderDialog = useOrderDialog();
	useTitle({ ...openFood, ...orders });

	return (
		<div>
			<GlobalStyle />
			<OrderDialog {...orderDialog} {...orders} />
			<FoodDialog {...openFood} {...orders} />
			<Navbar />
			<Order {...orders} {...openFood} {...orderDialog} />
			<Banner />
			<Menu {...openFood} />
		</div>
	);
}

export default App;
