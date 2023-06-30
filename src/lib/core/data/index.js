// DB
import kanbanKitBoardModel from './kanbanKit/kanbanKitBoardModel.js';

// end DB

import {
	// lorem as loremFirst,
	// lorem as loremSecond,
	// lorem as loremThird,
	agileFans,

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
	// loremFirst,
	kanbanKit,
	// loremSecond,
	scrumKit
	// loremThird
};

const agileKIT = {
		title: 'Agile.KIT',
		mainProduct: agileKit,

		products: [ten]
	},
	kanbanKIT = {
		title: 'Kanban.KIT',
		mainProduct: kanbanKit,
		products: [kanbanel, healthCheck, actionDelegation]
	},
	scrumKIT = {
		title: 'Scrum.KIT',
		mainProduct: scrumKit,

		products: []
	};

const productsCategories = [
	{
		title: 'all',
		products: [agileKit, kanbanel, kanbanKit, healthCheck, scrumKit, actionDelegation, ten]
	},
	agileKIT,
	kanbanKIT,
	scrumKIT
];

export {
	productsList,
	contact,
	social,
	productsCategories,
	kanbanKitBoardModel,
	agileFans,
	healthCheck,
	scrumKit,
	actionDelegation,
	ten
};
