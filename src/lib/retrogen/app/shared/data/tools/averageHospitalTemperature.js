import { sectionComponent, appComponent, holderComponent } from '$lib/core/data';

// const kit = retrogenComponent.retrogen;

const tool = {
	id: '0',
	title: 'Average hospital temperature',
	shortDesc: 'Участники визуализируют свою `температуру` (настроение).',
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
		bio: 'Unknown',
		link: ''
	},
	photos: ['', ''],
	video: '',
	preparation: [
		`Подготовьте 3 секции по вертикали с рисунком термометра и шкалой с отметками замерзание.`,
		`Найдите набор компонентов с идентификатором # в пакете с логотипом retrogen.`,
		`Озаглавьте колонки: '`,
		`Ознакомьтесь с инструкцией`,
		`Запускайте приложение`
	],
	instruction: [`Каждый участник отмечает свое настроение`],
	listData: ['', '', ''],
	components: [
		Object.assign(sectionComponent, { count: '3' }),
		Object.assign(holderComponent, { count: '20' }),
		Object.assign(appComponent, { count: 1 })
	]
};

export default tool;
