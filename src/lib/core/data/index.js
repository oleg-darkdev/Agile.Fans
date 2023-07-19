// DB
import kanbanKitBoardModel from './kanbanKit/kanbanKitBoardModel.js';
// end DB

import {
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
leanCoffee,
	// scrumKit
	scrumKit
} from './products';

import social from './social';
import contact from './contact';

const productsList = {
	agileKit,
	kanbanKit,
	scrumKit
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
		crazyWip,
		leanCoffee
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

const productsCategories = [allKit, kanbanKIT, scrumKIT, agileKIT];

export {
	productsList,
	contact,
	social,
	productsCategories,
	kanbanKitBoardModel,
	agileFans,
	healthCheck,
  actionDelegation,
  leanCoffee,
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
	kanbanel,
	allKit,
	scrumKit
};
