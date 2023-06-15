import {
	// agileKit
	agileKit,
	ten,
	// kanbanKit
	kanbanKit,
	kanbanel,
	healthCheck,
	actionDelegation,
	// scrumKit
	scrumKit
} from './products';

import social from './social';
import contact from './contact';

const productsList = {
	agileKit,
	ten,
	kanbanKit,
	kanbanel,
	healthCheck,
	actionDelegation,
	scrumKit
};

const productsCategories = [
	{
		title: 'all',
		products: [agileKit, kanbanel, kanbanKit, healthCheck, scrumKit, actionDelegation, ten]
	},
	{
		title: 'Agile.KIT',
		products: [agileKit, ten]
	},
	{
		title: 'Kanban.KIT',
		products: [kanbanKit, kanbanel, healthCheck, actionDelegation]
	},

	{
		title: 'Scrum.KIT',
		products: [scrumKit]
	}
];

export { productsList, contact, social, productsCategories };
