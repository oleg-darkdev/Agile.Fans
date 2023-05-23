import stats from './stats';
import features from './features';
import prices from './prices';
import faq from './faq';
import contacts from './contacts';
import social from './social';

const productData = {
	id: 1,
	status: 0,
	shortDesc: {
		text: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
		title: 'Agile.fans',
		logo: '/agile_fans/images/logo.svg',
		link: '',

		synopsis:
			'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.'
	},
	stats: stats.agileFans,
	features: features.agileFans,
	prices: prices.agileFans,
	contact: contacts,
	social: social,
	faq: faq.agileFans
};

const productsList = {
	agileFans: productData
};

export default productsList;
