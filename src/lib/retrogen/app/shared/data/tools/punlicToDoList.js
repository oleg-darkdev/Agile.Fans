import { sectionComponent, appComponent, holderComponent } from '$lib/core/data';

// const kit = retrogenComponent.retrogen;

const tool = {
	id: '0',
	title: 'Punlic to-do list',
	attention: '',
	shortDesc: 'Участники предлагают и берут ответственность за действия',
  link: 'punlic-to-do',

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
		bio: 'Corinna Baldauf',
		link: ''
	},
	photos: ['', ''],
	video: '',
	preparation: [
		`Создайте из 3 секций 3 колонки: 'Что', 'Кто' и 'Когда'`,
		`Найдите набор компонентов с идентификатором # в пакете с логотипом retrogen.`,
		`Озаглавьте колонки: '`,
		`Ознакомьтесь с инструкцией`,
		`Запускайте приложение`
	],

	instruction: [
		`Спросите участников одного за другим, что они хотят сделать для улучшения команды. `,
		`Запишите предложенные действия.`,
		`Договоритесь о том 'когда' оно должно быть сделано и попросите участника вписать своё имя.`,
		`Если кто - то предлагает действие для всей команды, то он должен договориться со всеми, чтобы они сами вписали своё имя.`
	],
	listData: ['', '', ''],
	components: [
		Object.assign(sectionComponent, { count: '3' }),
		Object.assign(holderComponent, { count: '20' }),
		Object.assign(appComponent, { count: 1 })
	]
};

export default tool;
