import { agileFans as stats } from './stats';
import { agileFans as features } from './features';
import { agileFans as prices } from './prices';
import { agileFans as faq } from './faq';
// import contacts from '../contacts';
// import social from '../social';

const agileFans = {
	id: 1,
	status: 0,
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
};

