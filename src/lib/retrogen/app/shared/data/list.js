import { components } from '$lib/core/data/';

const section = {
		title: 'Section',
		photo: '',
		id: ''
	},
	kit = components.retrogen,
	app = {
		id: '',
		link: ''
	},
	holder = {
		title: 'Holder',
		photo: '',
		id: ''
	};

const tool = {
	id: '',
	title: 'Начать, Прекратить, Продолжать',
	shortDesc: 'Мозговой штурм и выбор лучших предложений',
	desc: [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
		'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
	],

	video: '',
	timerData: [],
	author: {
		bio: 'Agile Retrospectives',
		link: ''
	},
	photos: ['', ''],
	preparation: [
		`1. Создайте из 3 секций 3 колонки`,
		`2. Найдите набор компонентов с идентификатором # в пакете с логотипом retrogen.`,
		`3. Озаглавьте колонки: 'Начать', 'Прекратить' и 'Продолжать`,
		`4. Ознакомьтесь с инструкцией`,
		`5. Запускайте приложение`,
		`6. `
	],
	instruction: [
		`1. Установите таймер на 5 минут и попросите соблюдать тишину.`,
		`2. Попросите участников написать свои предложения в каждую из колонок - отдельное предложение на отдельном стикере.`,
		`3. Попросите участников зачитать свои предложения и разместить их на соотвествующих секциях.`,
		`4. Организуйте короткую дискуссию: какие 20% предложений наиболее ценные. `,
		`5. Затем попросите участников проголосовать точками (по 3 точки на человека).`,
		`6. 3 предложения, набравшие наибольшее количество голосов, превращаются в план действий.`
	],
	listData: ['', '', ''],
	components: [
		{
			kit,
			count: '1'
		},
		{
			section,
			count: '3'
		},
		{
			holder,
			count: '20'
		},
		{
			app,
			count: 1
		}
	]
};

export default tool;
