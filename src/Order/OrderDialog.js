import React from 'react';
import { Dialog, DialogContent, DialogShadow, DialogFooter, ConfirmButton } from '../FoodDialog/FoodDialog';

export function OrderDialog({ openOrderDialog, setOpenOrderDialog }) {
	return openOrderDialog ? (
		<div>
			<DialogShadow />
			<Dialog>
				<DialogContent>
					<h2>Order Success</h2>
					<h2>Deliver time: 30 min</h2>
				</DialogContent>
				<DialogFooter>
					<ConfirmButton
						onClick={() => {
							setOpenOrderDialog();
						}}
					>
						Order Placed!
					</ConfirmButton>
				</DialogFooter>
			</Dialog>
		</div>
	) : (
		<div />
	);
}
