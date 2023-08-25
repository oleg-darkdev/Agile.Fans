import { sectionComponent, appComponent, holderComponent } from '$lib/core/data';

// const kit = retrogenComponent.retrogen;

const tool = {
	id: '0',
	title: 'Four "wh "s.',
	shortDesc:
		'Узнайте, чем члены команды довольны, чему они научились, чего им недоставало и чего они очень ждали.',
	attention: '',
link: 'four-whos',

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
		bio: ' Mary Gorman & Ellen Gottesdiener probably via groupmap.com',
		link: ''
	},
	photos: ['', ''],
	video: '',
	preparation: [
		`Создайте из 4 секций 4 колонки разных цветов`,
		`Найдите набор компонентов с идентификатором # в пакете с логотипом retrogen.`,
		`Озаглавьте колонки: '`,
		`Раздайте каждому участнику 4 карточки разных цветов.`, `Ознакомьтесь с инструкцией`,
		`Запускайте приложение`
	],
	instruction: [
		`Каждый участник самостоятельно отвечает на четыре вопроса, по 1 вопросу на 1 карточку`,
		`Вопрос:  Чем я доволен(-ьна)`,
		`Вопрос: Чему я научился(-ась)`,
		`Вопрос: Чего мне недоставало`,
		`Вопрос: Чего я очень ждал(-а)`,
		`Распределите ответы по 4 цветовым подгруппам.`,
		`Внимательно прочитайте. найдите закономерности и поделитесь выводами с командой.`,
		`Используйте результаты в качестве вводных данных на следующей стадии.`
	],
	listData: ['', '', ''],
	components: [
		
		Object.assign(sectionComponent, { count: '3' }),
		Object.assign(holderComponent, { count: '20' }),
		Object.assign(appComponent, { count: 1 })
	]
};

export default tool;
