import { sectionComponent, appComponent, holderComponent } from '$lib/core/data';

// const kit = retrogenComponent.retrogen;

const tool = {
	id: '0',
	title: 'Repeat and avoid',
	shortDesc: 'Мозговой штурм: что повторить и каких поступков избегать',
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
		bio: 'Luis Goncalves',
		link: ''
	},
	photos: ['', ''],
	video: '',
	preparation: [
		`Создайте из 2 секций 2 колонки`,
		`Найдите набор компонентов с идентификатором # в пакете с логотипом retrogen.`,
		`Озаглавьте колонки: «Повторяем» и «Избегаем».`,
		`Раздайте карточки участникам четёрых цветов`,
		`Ознакомьтесь с инструкцией`,
		`Запускайте приложение`
	],
	instruction: [
		`Участники записывают идеи на стикерах — по одной проблеме / действию на стикер.`,
		`Использовать стикеры разных цветов для разных категорий. `,
		`Например, «люди», «процесс», «технология» и т.д. `,
		`Пусть каждый зачитает свои идеи и приклеит стикеры на соответствующий флипчарт.`,
		`Обратите внимание участников волнуют одни и те же проблемы?`,
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
