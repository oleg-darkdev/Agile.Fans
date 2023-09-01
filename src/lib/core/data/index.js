// timer
import defaultPomodoros from './timer/defaultPomodoros';

// lorem
import gameSteps from './gameSteps';



// stores
import draggingItem from './timer/stores/draggingItem';
import pomodoroState from './timer/stores/pomodoroState';
import runningTimerId from './timer/stores/runningTimerId';
import pomodoroPaused from './timer/stores/pomodoroPaused';
import stopwatchState from './timer/stores/stopwatchState';
import stopwatchPaused from './timer/stores/stopwatchPaused';
import resetTimers from './timer/stores/resetTimers';
import newEntry from './timer/stores/newEntry';
import laps from './timer/stores/laps';
import timers from './timer/stores/timers';



import { theme, currentView, hideHour } from './timer/stores/settings';

// DB
import kanbanKitBoardModel from './kanbanKit/kanbanKitBoardModel.js';
// end DB

import { retrogenComponent, sectionComponent, appComponent, holderComponent } from './components/';

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
		actionDelegation,
		сoastOfDelay,
		sudoScrumban,
		retrogen,
		pomodoroPlan,
		kanbanRiders,
		easyKanban,
		crazyWip,
		leanCoffee,
		healthCheck
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
	gameSteps,
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
	scrumKit,
	retrogenComponent,
	// box components
	sectionComponent,
	appComponent,
	holderComponent,
	// timer
	defaultPomodoros,
	draggingItem,
	pomodoroState,
	runningTimerId,
	pomodoroPaused,
	stopwatchPaused,
	stopwatchState,
	resetTimers,
	newEntry,
	laps,
	theme,
	currentView,
	hideHour,
	timers
};
