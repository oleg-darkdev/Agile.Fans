import defaultHeader from '../../headersLinks/defaultHeader';
import variantOfProduct from './variantOfProduct';

import faq from './faq';
import stats from './stats';
import features from './features';
import price from './price';
import feedback from './feedback';

const product = {
	id: 0,
	status: 0,
	headerLinks: defaultHeader,
	shortDesc: {
		text: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
		title: 'Lean-coffee',
		logo: '/lean-coffee/logo.svg',
		promo: '/lean-coffee/logo.svg',
		icon: '/lean-coffee/icon.svg',

		banner:
			'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
		link: 'lean-coffee/',
		synopsis:
			'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.',
		video:
			'https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com',
		translates: [
			{
				lang: 'English',
				link: ''
			},
			{
				lang: 'Polish',
				link: ''
			},
			{
				lang: 'Russian',
				link: ''
			},
			{
				lang: 'Ukrainian',
				link: ''
			},
			{
				lang: 'German',
				link: ''
			},
			{
				lang: 'French',
				link: ''
			},
			{
				lang: 'Spanish',
				link: ''
			}
		]
	},
	variants: variantOfProduct,

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
	faq: faq
};

export default product;
