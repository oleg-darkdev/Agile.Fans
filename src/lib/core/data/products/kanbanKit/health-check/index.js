import header from './header';
import productsIcons from '../../productsIcons';
import variantOfProduct from './variantOfProduct';


import faq from './faq';
import stats from './stats';
import features from './features';
import price from './price';
import feedback from './feedback';

const product = {
	id: 2,
	status: 0,
	headerLinks: header,
	shortDesc: {
		text: '',
		title: 'Health Check App - How is your team feeling?',
		logo: './health-check/logo.svg',
		icon: '/health-check/icon.svg',

		banner:
			'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
		promo: '/health-check/logo.svg',
		link: 'health-check/',
		synopsis:
			'Gra do systematycznego podejścia poprawy wydajności zespołu, z wykorzystaniem przejrzystej wizualizacji i oceny obecnego stanu.',
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
			`This tool is a conversation starter. It won't really tell you what to do, but it will help you figure out what questions to ask. That's why the possible answers are strongly worded.`,
			`Your team will answer 8 strongly worded questions that will help you uncover important themes for discussion.`,
			`Start good conversations - and check how your team is feeling in these 8 areas.`
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
