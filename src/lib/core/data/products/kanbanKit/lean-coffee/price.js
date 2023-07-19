// раскидать прайсы по конкретным типам
let priceItems = [
	'Lorem ipsum is placeholder',
	'Lorem ipsum is placeholder',
	'Lorem ipsum is placeholder'
];

const prices = [
	//  online, offline, full, deluxe boardgame

	{
		title: 'Free',
		priceItems: [
			[`Dostępne do pobrania Edukacyjne gry planszowe w wersji print&play `],
			[`2 tygodnie bezpłatnego korzystania z aplikacji webowych`],
			[`Nieograniczone uczestnictwo w warsztatach`]
		],
		link: '',
		tax: 0,
		terms: 'Trial access to web services for 2 weeks',
		bg: 'bg-gray-400'

		// textColor: 'text-gray-400'
	},
	{
		title: 'Online dostęp',
		priceItems: [
			[`Online dostęp do wszystkich produktów`],
			[],
			[]
			// [``, ``, ``, ``],
			// [``, ``, ``]
		],
		link: '',
		tax: 12,
		terms: 'Full acces for all online apps',
		bg: 'bg-pink-300'

		// textColor: 'text-gray-500'
	},
	{
		title: 'Zestaw dla tablicy Kanban',
		priceItems: [
			[
				`6 uniwersalnych sekcji z powierzchnią magnetyczną`,
				`Plastikowe akcesoria do tablic kanban`
			],
			[`Plastikowe komponenty z tagami NFC`, `Etui transportowy`],
			[`Dostęp do aplikacji webowych na okres 12 miesięcy`]
		],
		link: '',
		tax: 100,
		terms: 'Full acces for all online apps',
		bg: 'bg-pink-500'

		// textColor: 'text-gray-500'
	},
	{
		title: 'Kompletny zestaw treningowy',
		priceItems: [
			[
				`6 uniwersalnych sekcji z powierzchnią magnetyczną`,
				`Plastikowe akcesoria do tablic kanban`,
				`Plastikowe komponenty z tagami NFC`,
				`Zestaw markerów do rysowania`,
				`Etui transportowy`
			],
			[
				`Zestaw do gry: Kanbanel`,
				`Zestaw do gry: Health-check`,
				`Zestaw do gry: Coast of delay`,
				`Zestaw do gry: Action delegation`,
				`Zestaw do gry: Lean coffee`,
				`Zestaw do gry: Retrogen`
			],
			[
				`Dostęp do aplikacji webowych na okres 12 miesięcy`,
				`Zestaw do gry: Easy Kanban`,
				`Zestaw do gry: Crazy WIP limits`,
				`Zestaw do gry: Kanban riders`,
				`Zestaw do gry: Sudo ScrumBan`
			]
		],
		link: '',
		tax: 240,
		terms: 'Full acces for all online apps',
		bg: 'bg-pink-700'

		// textColor: 'text-gray-500'
	},
	{
		title: 'Prowadzenie szkoleń w organizacji',
		priceItems: [
			[`8 warsztatów szkoleniowych dla twojej firmy`],
			[`Dostęp do aplikacji webowych przez 12 miesięcy`],
			[]
		],
		link: '',
		tax: 1400,
		terms: 'Extended trial access to web services for 2 months ',
		bg: 'bg-black'

		// bg: 'bg-pink-700'
		// textColor: 'text-gray-700'
	}
];

export default prices;
