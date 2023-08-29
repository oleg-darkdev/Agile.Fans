const olegMember = {
		fullName: 'Oleg Medvedev',
		id: '1',
		email: 'oleg@darkdev.games',
		avatar: '/action-delegation/test_photo_oleg.png  ',
		nickname: 'Jesus.hobo',
		status: 'Online'
	},
	antonMember = {
		fullName: 'Anton ',
		id: '2',
		email: 'sa.bygaga.ne@gmail.com',
		avatar: '/action-delegation/anton_test_photo.jpg',
		nickname: 'Savichau Anton',
		status: 'Online'
	},
	fake1Member = {
		fullName: 'Anton ',
		id: '6',
		email: 'sa.bygaga.ne@gmail.com',
		avatar: '/action-delegation/anton_test_photo.jpg',
		nickname: 'Savichau Anton',
		status: 'Online'
	},
	fake2Member = {
		fullName: 'Anton ',
		id: '3',
		email: 'sa.bygaga.ne@gmail.com',
		avatar: '/action-delegation/anton_test_photo.jpg',
		nickname: 'Savichau Anton',
		status: 'Online'
	},fake3Member = {
		fullName: 'Anton ',
		id: '4',
		email: 'sa.bygaga.ne@gmail.com',
		avatar: '/action-delegation/anton_test_photo.jpg',
		nickname: 'Savichau Anton',
		status: 'Online'
	};

const cardFrontend = {
		type: 'Frontend',
		tags: ['Landings', 'Apps', 'Shop'],
		date: 'Dec 12',
		value: '10',

		members: [olegMember],
		title: 'Web: Frontend',
		desc: 'Duis aute irure dolor '
	},
	cardBackend = {
		type: 'Backend',
		value: '10',

		tags: ['Routings', 'DB', 'Auth', 'Shop', 'Apps', 'Account'],
		date: 'Dec 12',
		members: [olegMember],
		title: 'Web: Backend',
		desc: 'Duis aute irure dolor '
	},
	cardDesign = {
		type: 'Design',
		value: '10',

		tags: ['Frontend', 'Papier materials', 'UI', 'Presentations'],
		date: 'Dec 12',
		members: [olegMember],
		title: 'Design',
		desc: 'Duis aute irure dolor '
	},
	cardWorkshops = {
		type: 'Workshops',
		value: '10',

		tags: ['Organization', 'Place approval', 'Publication', 'Facilitation', ''],
		date: 'Dec 12',
		members: [
			// {
			// 	fullName: 'Oleg Medvedev',
			// 	id: '1',
			// 	email: '',
			// 	avatar: '/action-delegation/test_photo_oleg.png'
			// }
		],
		title: 'Workshops',
		desc: 'Duis aute irure dolor '
	},
	cardSales = {
		type: 'Sales',
		value: '10',

		tags: ['Clients DB', 'Cold calls', 'Marketing', 'Close offers'],
		date: 'Dec 12',
		members: [olegMember],
		title: 'Sales',
		desc: 'Duis aute irure dolor '
	},
	cardInvestors = {
		type: 'Investors',
		value: '5',

		tags: ['Found', 'Speech', 'Offer'],
		date: 'Dec 12',
		members: [
			// {
			// 	fullName: 'Oleg Medvedev',
			// 	id: '1',
			// 	email: '',
			// 	avatar: '/action-delegation/test_photo_oleg.png  '
			// }
		],
		title: 'Investors',
		desc: 'Duis aute irure dolor '
	},
	cardPartners = {
		type: 'Partners',
		value: '5',

		tags: ['Found', 'Speech', 'Offer'],
		date: 'Dec 12',
		members: [olegMember],
		title: 'Partners',
		desc: 'Duis aute irure dolor '
	},
	cardVolunteers = {
		type: 'Volunteers',
		value: '3',

		tags: ['Found', 'Speech', 'Offer'],
		date: 'Dec 12',
		members: [olegMember],
		title: 'Volunteers',
		desc: 'Duis aute irure dolor '
	},
	card3D = {
		type: '3D',
		value: '5',

		tags: ['Print', 'Modeling'],
		date: 'Dec 12',
		members: [olegMember],
		title: '3D',
		desc: 'Duis aute irure dolor '
	},
	cardTypography = {
		type: 'Typography',
		value: '5',

		tags: ['Create mockups', 'Print'],
		date: 'Dec 12',
		members: [olegMember],
		title: 'Typography',
		desc: 'Duis aute irure dolor '
	},
	cardLaser = {
		type: 'Laser',
		value: '5',

		tags: ['Print', 'Modeling'],
		date: 'Dec 12',
		members: [olegMember],
		title: 'Laser',
		desc: 'Duis aute irure dolor '
	},
	cardBoardgames = {
		type: 'Boardgames',
		value: '3',

		tags: ['Upd instructions', 'Upd design', 'Adaptate mechanics'],
		date: 'Dec 12',
		members: [olegMember],
		title: 'Boardgames',
		desc: 'Duis aute irure dolor '
	},
	cardTests = {
		type: 'Tests',
		value: '5',

		tags: ['Boardgames', 'Apps', 'KanbanKIT', 'Typography mockups'],
		date: 'Dec 12',
		members: [olegMember, antonMember],
		title: 'Tests',
		desc: 'Duis aute irure dolor '
	},
	cardBussines = {
		type: 'Bussines',
		value: '5',

		tags: [
			'Optimise coasts',
			'Delivery chains',
			'Strategy / vision',
			'Analyse marketplace',
			'Buy things',
			'Management',
			'Potencial team members'
		],
		date: 'Dec 12',
		members: [olegMember, antonMember],
		title: 'Bussines',
		desc: 'Duis aute irure dolor '
	};
const boards = [
	{
		dateCreated: '05.10.2023',

		title: 'Duis aute irure dolor in reprehenderit',

		description:
			'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing	industries for previewing layouts and visual mockups.',
		lastUpd: '20.20.21',
		members: [olegMember, antonMember],
		columns: [
			{
				title: 'Backlog',
				data: [cardWorkshops, cardSales],
				id: 0
			},
			{
				title: 'Level 1',
				data: [
					cardFrontend,
					cardBoardgames,
					cardInvestors,
					cardPartners,
					cardVolunteers,
					cardTypography,
					cardLaser,
					card3D,
					cardBackend,
					cardDesign
				],
				id: 1
			},
			{
				title: 'Level 2',
				data: [],
				id: 2
			},
			{
				title: 'Level 3',
				data: [cardBussines],
				id: 3
			},
			{
				title: 'Level 4',
				data: [cardTests],
				id: 4
			},
			{
				title: 'Level 5',
				data: [],
				id: 5
			},
			{
				title: 'Level 6',
				data: [],
				id: 6
			},
			{
				title: 'Level 7',
				data: [],
				id: 7
			}
		]
	}
];

export default boards;
