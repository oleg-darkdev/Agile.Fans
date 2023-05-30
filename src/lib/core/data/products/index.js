import { agileFans as stats } from './stats';
import { agileFans as features } from './features';
import { agileFans as prices } from './prices';
import { agileFans as faq } from './faq';
// import contacts from '../contacts';
// import social from '../social';

const agileFans = {
	id: 1,
	status: 0,
	headerLinks: [
		{
			title: 'Contact',
			link: '#contact'
		},
		{
			title: 'FAQ',
			link: '#faq'
		},
		{
			title: 'Price',
			link: '#price'
		},
		{
			title: 'Shop',
			link: '/shop'
		},
		{
			title: 'About',
			link: '#about'
		},
		{
			title: 'Features',
			link: '#features'
		}
		// {
		//   title: '',
		//   link: ''
		// },
	],
	shortDesc: {
		text: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
		title: 'Agile.fans',
		logo: '/core/images/logo.svg',
		link: '',

		synopsis:
			'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.'
	},
	stats: stats,
	features: features,
	prices: prices,
	// contact: contacts,
	// social: social,
	faq: faq
};

export {
	agileFans,
	agileFans as agi,
	agileFans as mui,
	agileFans as hui,
	agileFans as yui,
	agileFans as aui,
	agileFans as qui
};
