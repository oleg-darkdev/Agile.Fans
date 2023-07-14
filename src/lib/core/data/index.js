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
  сoastOfDelay,
	sudoScrumban,
	retrogen,
	pomodoroPlan,
	kanbanRiders,
	easyKanban,
	crazyWip,
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

const kanbanKitSubProducts = [
		kanbanel,
		healthCheck,
		actionDelegation,
		сoastOfDelay,
		sudoScrumban,
		retrogen,
		pomodoroPlan,
		kanbanRiders,
		easyKanban,
		crazyWip
	],
	scrumKitSubProducts = [],
	agileKitSubProducts = [ten];

const agileKIT = {
		title: 'Agile.KIT',
		mainProduct: agileKit,

		products: agileKitSubProducts
	},
	kanbanKIT = {
		title: 'Kanban.KIT',
		mainProduct: kanbanKit,
		products: kanbanKitSubProducts
	},
	scrumKIT = {
		title: 'Scrum.KIT',
		mainProduct: scrumKit,

		products: scrumKitSubProducts
	},
	allKit = {
		title: 'all',
		products: [].concat(kanbanKIT.products, scrumKIT.products, agileKIT.products)
	};

const productsCategories = [kanbanKIT];
// agileKIT, scrumKIT
export {
	productsList,
	contact,
	social,
	productsCategories,
	kanbanKitBoardModel,
	agileFans,
	healthCheck,
	actionDelegation,
	ten,
	сoastOfDelay,
	sudoScrumban,
	retrogen,
	pomodoroPlan,
	kanbanRiders,
	easyKanban,
  crazyWip,
  
	kanbanKitSubProducts,
	agileKitSubProducts,
	scrumKitSubProducts,
	allKit,
	scrumKit
};
