export function formatPrice(price) {
	return price.toLocaleString('en-US', {
		style: 'currency',
		currency: 'HKD'
	});
}

export const foods = [
	{
		name: 'Margherita',
		img: '/img/Margherita.jpeg',
		price: 5,
		ingredients: [ 'tomato, ', 'mozzarella' ]
	},
	{
		name: 'Bufala',
		img: '/img/Bufala.jpeg',
		price: 6,
		ingredients: [ 'tomato, ', 'mozarella di bufala' ]
	},
	{
		name: 'Romana',
		img: '/img/Romana.jpeg',
		price: 5,
		ingredients: [ 'tomato, ', 'mozzarella, ', 'anchovies, ', 'oregano, ', 'oil' ]
	},
	{
		name: 'Diavola',
		img: '/img/Diavola.jpeg',
		price: 7.5,
		ingredients: [ 'tomato, ', 'mozzarella, ', 'spicy salami' ]
	},
	{
		name: 'Pizza Bianca',
		img: '/img/Bianca.jpeg',
		price: 5,
		ingredients: [ 'mozzarella, ', 'oregano' ]
	}
];
