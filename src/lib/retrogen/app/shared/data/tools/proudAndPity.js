import { sectionComponent, appComponent, holderComponent } from '$lib/core/data';

// const kit = retrogenComponent.retrogen;

const tool = {
	id: '0',
	title: 'Proud and Pity',
	shortDesc: 'Чем гордятся и о чем сожалеют участники команды?',
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
		`Создайте из 2 секций 2 колонки`,
		`Найдите набор компонентов с идентификатором # в пакете с логотипом retrogen.`,
		`Озаглавьте колонки: 'Гордость' и 'Сожаление'.`,
    `Раздайте участникам карточки двух цветов`,
		`Ознакомьтесь с инструкцией`,
		`Запускайте приложение`
	],
  instruction: [`Попросите участников записать на стикерах что вызывает чувство гордости, а что чувство сожаления.`, `Каждая мысль записываеться на отдельном стикере.`, `Когда участники закончат писать, попросите озвучить свои записи и наклеить в соответствующую колонку.`, `Начните групповое обсуждение задавая следующие вопросы.`, `Вопрос: Что из озвученного удивило вас?`, `Вопрос: Какие выводы можно сделать?`, `Вопрос: Что это значит для нас, как для команды?`],
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
