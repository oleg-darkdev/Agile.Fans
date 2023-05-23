import stats from './stats';

const productData = {
	shortDesc: {
		text: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
		title: 'Agile.fans',
		logo: '/agile.fans/images/logo.svg',
		link: '',
		synopsis:
			'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.'
	},
	stats: stats,
	prices: [
		{
			title: '',
			discont: '',
			price: 0
		}
	],
	contact: {
		phone: '+48 662290677',
		email: 'sales@agile.fans'
	},
	social: {
		github: {
			logo: '',
			link: ''
		},
		linkedin: {
			logo: '',
			link: ''
		}
	},
	faq: ['Lorem']
};

const productsList = {
	agileFans: productData
};

export default productsList;
