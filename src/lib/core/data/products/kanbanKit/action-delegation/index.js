import defaultHeader from '../../headersLinks/defaultHeader';
import productsIcons from '../../productsIcons';
import variantOfProduct from './variantOfProduct';

import faq from './faq';
import stats from './stats';
import features from './features';
import price from './price';
import feedback from './feedback';

import appSteps from './appSteps';
import timings from './timings';
import components from './components';
import translates from './translates';
import { landingVideos, appVideos } from './videos';

const delegation = {
	id: 1,
	status: 0,
	headerLinks: defaultHeader,
	shortDesc: {
		text: 'Empowering your team may spend less time controlling, deciding, and supervising what everyone is doing and more time on other projects. It entails being available to concentrate on other tasks.',
		title: '7 action delegation',
		logo: '/action-delegation/logo.svg',
		icon: '/action-delegation/icon.svg',

		banner:
			'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
		promo: '/action-delegation/logo.svg',
		link: 'action-delegation/',
		synopsis:
			'Narzędzie do wizualizacji i delegowania zadań, który pomaga wprowadzić kulturę współpracy w organizacji poprzez delegowanie decyzji i zadań w zespole.',
		// 'Ta gra pomaga wprowadzić kulturę współpracy w organizacji poprzez delegowanie decyzji i zadań w zespole.',
		video:
			'https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com',
		translates
	},
	variants: variantOfProduct,
	components: components,
	timings: timings,
	landingVideos: landingVideos,
	appVideos: appVideos,

	about: {
		desc: [
			`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
			`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
			`Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
		],
		author: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
	},
	stats: stats,
	features: features,
	prices: price,
	feedback: feedback,
	faq: faq,
	appSteps: appSteps
};

export default delegation;
