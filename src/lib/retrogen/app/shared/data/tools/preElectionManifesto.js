import { sectionComponent, appComponent, holderComponent } from '$lib/core/data';

// const kit = retrogenComponent.retrogen;

const tool = {
	id: '0',
	title: 'Pre-election manifesto',
	shortDesc: 'Партии представят манифесты изменений. За какой проголосуете вы?',
	attention: '',

	desc: [
		'В стране началась предвыборная гонка? Используйте тему выборов, чтобы убедить команду в целесообразности тех или иных изменений.',
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
		`Попросите участников разделиться на группы по 2–3 человека — это будут политические партии.`,
		`Каждой партии выдаётся 1 секция и 10 карточек.  у каждой партии должен быть свой цвет секций и карточек.`,
		``,
		``,
		``,
		`Ознакомьтесь с инструкцией`,
		`Запускайте приложение`
	],
	instruction: [
		`В течение 20 минут каждая партия разрабатывает свой манифест изменений. Что не работает? Как добиться улучшений?`,
		`Предупредите лидеров подготовиться к неудобным и каверзным вопросам и помните, вы хотите изменить мир к лучшему!`,

		`После этого члены партий снова собираются вместе,`,
		`лидеры представляют манифесты. `,
		`Проаназируйте  по каким пунктам мнения партий сходятся? Какие обещания нереальны, а какие вполне выполнимы?`,
		``,
		``
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
