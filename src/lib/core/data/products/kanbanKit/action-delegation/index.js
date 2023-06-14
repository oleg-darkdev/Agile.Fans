import defaultHeader from '../../headersLinks/defaultHeader';

import faq from './faq';
import stats from './stats';
import features from './features';
import price from './price';
import feedback from './feedback';

const delegation = {
	id: 1,
	status: 0,
	headerLinks: defaultHeader,
	shortDesc: {
		text: 'Empowering your team may spend less time controlling, deciding, and supervising what everyone is doing and more time on other projects. It entails being available to concentrate on other tasks.',
		title: '7 action delegation',
		logo: '/core/images/logo.svg',
		banner:
			'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
		promo:
			'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.0nZWvncwJmjAmiSFglBqVQHaEN%26pid%3DApi&f=1&ipt=a553a918730e10b3da34bc4a2794c81eea15379f77490b696ebdd066e35a35c7&ipo=images',
		link: '/',
		synopsis:
			'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.'
	},
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

export default delegation;
