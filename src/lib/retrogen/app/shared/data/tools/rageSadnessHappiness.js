import { sectionComponent, appComponent, holderComponent } from '$lib/core/data';

// const kit = retrogenComponent.retrogen;

const tool = {
	id: '0',
	title: 'Rage, sadness and happiness',
	shortDesc:
		'Поиск и анализ событий, по поводу которых члены команды испытывали гнев, грусть или радость.',
	attention: '',

	desc: [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
	],
	timings: [
		{
			id: 1,
			name: 'Lorem',
			time: 15,
			completed: false
		}
	],

	author: {
		bio: 'Agile Retrospectives',
		link: ''
	},
	photos: ['', ''],
	video: '',
	preparation: [
		`Создайте из 3 секций 3 колонки`,
		`Найдите набор компонентов с идентификатором # в пакете с логотипом retrogen.`,
		`Озаглавьте колонки: Гнев', 'Грусть' и 'Радость'`,
		`Подготовьте карточки определенного цвета для каждого чувства. `,
		`Ознакомьтесь с инструкцией`,
		`Запускайте приложение`
	],
	instruction: [
		`Члены команды записывают события по одному на карточку цвета, подходящего к испытанному чувству.`,
		`Когда время истекло, все прикрепляют свои карточки к соответствующим секциям.`,
		`Попросите сгруппировать карточки на каждой секции и дать сформировавшимся группам названия.`,
		`Разберите спрашивая: Что выделяется? Что неожиданно?`,
		`Разберите спрашивая: Что было сложным? Что доставляло удовольствие?`,
		`Разберите спрашивая: Какие закономерности видны? Что они значат для команды?`,
		`Разберите спрашивая: Что теперь нужно сделать?`,
	],
	listData: ['', '', ''],
	components: [
		Object.assign(sectionComponent, { count: '3' }),
		Object.assign(holderComponent, { count: '20' }),
		Object.assign(appComponent, { count: 1 })
	]
};

export default tool;
