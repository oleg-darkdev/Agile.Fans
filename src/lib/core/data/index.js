import { agileFans, mui, agi, hui, yui, aui, qui } from './products';
import social from './social';
import contact from './contact';

const productsList = {
	agileFans,
	mui,
	agi,
	hui,
	yui,
	aui,
	qui
};

const productsCategories = [
	{
		title: 'all',
		products: [agileFans, mui, agi, hui, yui, aui, qui]
	},
	{
		title: 'AgileKIT',
		products: [agileFans, qui]
	},
	{
		title: 'KanbanKIT',
		products: [hui, yui, qui]
	},
	{
		title: 'ScrumKIT',
		products: [hui, yui, qui]
	}
];

export { productsList, contact, social, productsCategories };
