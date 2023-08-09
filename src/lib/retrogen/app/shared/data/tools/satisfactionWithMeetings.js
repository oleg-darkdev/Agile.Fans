import { sectionComponent, appComponent, holderComponent } from '$lib/core/data';

// const kit = retrogenComponent.retrogen;

const tool = {
	id: '0',
	title: '',
	shortDesc: 'Рисуем диаграмму удовлетворённости встречами в ходе итерации',
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
		bio: 'Fanny Santos',
		link: ''
	},
	photos: ['', ''],
	video: '',
	preparation: [
		`Создайте из 3 секций 3 колонки`,
		`Найдите набор компонентов с идентификатором # в пакете с логотипом retrogen.`,
		`Озаглавьте колонки: '`,
		`Использовать карточки для 5 почему, только переверните их на оценку!``Ознакомьтесь с инструкцией`,
		`Запускайте приложение`
	],
	instruction: [
		`Подготовьте пространство с горизонтальной шкалой от 1 («ожидания не оправдались») до 5 («встреча превзошла ожидания»). `,
		`Каждый член команды оценивает встречу и наклеивает стикер в соответствующее место на шкале.`,
		`После этого команда обсуждает, почему некоторые встречи получили низкие оценки.`,
		`Об улучшениях можно поговорить в рамках этого или следующего упражнения, например, подойдёт «Игра в совершенство»`
	],
	listData: ['', '', ''],
	components: [
		{
			title: 'Complect for tool: ``',
			id: '',
			photo: ''
		},
		Object.assign(sectionComponent, { count: '3' }),
		Object.assign(holderComponent, { count: '20' }),
		Object.assign(appComponent, { count: 1 })
	]
};

export default tool;
