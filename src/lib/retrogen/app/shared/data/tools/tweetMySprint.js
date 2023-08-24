import { sectionComponent, appComponent, holderComponent } from '$lib/core/data';

// const kit = retrogenComponent.retrogen;

const tool = {
	id: '0',
	title: 'Хроника твитов об итерации',
	shortDesc: ``,
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
		bio: 'Thomas Guest',
		link: ''
	},
	photos: ['', ''],
	video: '',
	preparation: [
		`Создайте из 3 секций 3 колонки`,
		`Найдите набор компонентов с идентификатором # в пакете с логотипом retrogen.`,
		`Озаглавьте колонки: '`,
		`Ознакомьтесь с инструкцией`,
		`Запускайте приложение`
	],
	instruction: [
		`Раздайте стикеры и попросите участников написать как минимум три твита о прошедшей итерации.`,
		`Твиты могут касаться итерации в целом или отдельных историй, можно поныть или беззастенчиво попиариться — главное, чтобы сообщения были короткими.`,
		`Когда все справятся с заданием, расположите твиты в хронологическом порядке и обсудите общие темы, тенденции и т.д.`,
		`Скажите участникам, что теперь они могут добавить тот или иной твит в избранное, перепостить или написать комментарий, и снова обсудите результат.`,
		
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
