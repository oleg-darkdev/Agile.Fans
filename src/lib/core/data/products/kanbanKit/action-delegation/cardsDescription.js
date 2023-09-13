const delegationDegrees = [
	{
		img: 'https://wallup.net/wp-content/uploads/2016/03/12/341770-Audi_R8-car-vehicle-Super_Car-electric_car-blue_cars.jpg',
		id: 1,
		title: 'Manager -> team.',

		shortDescription:
			'Level 1 is is telling the manager to make the decision and explaining why no discussion is necessary or requested. ',
		lead: {
			title: 'Tell',
			procent: 100,
			description:
				'You make a decision for others and you may explain your motivation. A discussion about it is neither desired nor assumed.'
		},
		team: {
			title: 'Lorem',
			procent: 0,

			description:
				'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
		}
	},
	{
		img: '',
		id: 2,
		title: 'Manager -> team.',

		shortDescription: `Level 2 is selling the manager's decision to the team while also trying to convince them of the direction, so they feel involved and buy into the choice.`,
		lead: {
			title: 'Sell',
			procent: 85,

			description:
				'You make a decision for others but try to convince them that you made the right choice, and you help them feel involved.'
		},
		team: {
			title: 'Lorem',
			procent: 15,

			description:
				'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
		}
	},
	{
		img: '',
		id: 3,
		title: 'Manager -> team.',
		shortDescription:
			'Level 3 is involves consulting the manager, who seeks feedback from the team before making a decision.',
		lead: {
			title: 'Consult',
			procent: 70,

			description:
				'You ask for input first, which you take it into consideration before making a decision that respects people’s opinions.'
		},
		team: {
			title: 'Lorem',
			procent: 30,

			description:
				'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
		}
	},
	{
		img: '',
		id: 4,
		title: 'Manager == team.',
		shortDescription:
			'Level 4 is an agreement where the team and manager discuss the issue and come to a decision by consensus before moving on.',
		lead: {
			title: 'Agree',
			procent: 50,

			description:
				'You enter into a discussion with everyone involved, and as a group you reach consensus about the decision.'
		},
		team: {
			title: 'Lorem',
			procent: 50,

			description:
				'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
		}
	},
	{
		img: '',
		id: 5,
		title: 'team ->  Manager',

		shortDescription:
			'Level 5 is advice, where the manager offers their advice and hopes the team will listen. ',
		lead: {
			title: 'Advise',
			procent: 30,

			description:
				'You will offer others your opinion and hope they listen to your wise words, but it will be their decision, not yours.'
		},
		team: {
			title: 'Lorem',
			procent: 70,

			description:
				'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
		}
	},
	{
		img: '',
		id: 6,
		title: 'team ->  Manager',
		shortDescription: `Level 6 is to inquire where the team makes the decision, but the manager then asks for the team's justifications.`,
		lead: {
			title: 'Inquire',
			procent: 90,

			description:
				'You make a decision for others but try to convince them that you made the right choice, and you help them feel involved.'
		},
		team: {
			title: 'Lorem',
			procent: 10,

			description:
				'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
		}
	},
	{
		img: '',
		id: 7,
		title: 'team ->  Manager',

		shortDescription:
			'Level 7 is decision-making delegation, where the team makes the decision independently. ',
		lead: {
			title: 'Sell',
			procent: 90,

			description:
				'You make a decision for others but try to convince them that you made the right choice, and you help them feel involved.'
		},
		team: {
			title: 'Lorem',
			procent: 10,

			description:
				'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
		}
	}
];


export default delegationDegrees;

