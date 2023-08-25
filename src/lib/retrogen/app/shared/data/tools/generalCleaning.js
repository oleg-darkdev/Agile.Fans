import { sectionComponent, appComponent, holderComponent } from '$lib/core/data';

// const kit = retrogenComponent.retrogen;

const tool = {
	id: '0',
	title: 'General cleaning',
	shortDesc: 'Есть в работе понятные и простые задачи, а есть и такие, смысл которых ускользает.',
	attention: '',
link: 'general-cleaning',

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
		bio: 'Katrin Dreyer',
		link: ''
	},
	photos: ['', ''],
	video: '',
	preparation: [
		`Найдите набор компонентов с идентификатором # в пакете с логотипом retrogen.`,
		`Создайте секции в горизонтальной ориентации`,

		`Озаглавьте колонки: '`,
		`Ознакомьтесь с инструкцией`,
		`Запускайте приложение`
	],
	instruction: [
		`Отметьте середину`,
		`Повесьте чистую карточку с одной стороны, а грязную с другой.`,
		`Раздайте карточки и попросите команду написать идеи для каждой категории. `,
		`Развесьте карточки на верёвке, закрепите прищепками и сгруппируйте.`,
		`Теперь команда должна выбрать две «грязные» и две «чистые» темы для обсуждения, например, путём голосования точками.`,
	],
	listData: ['', '', ''],
	components: [
		Object.assign(sectionComponent, { count: '3' }),
		Object.assign(holderComponent, { count: '20' }),
		Object.assign(appComponent, { count: 1 })
	]
};

export default tool;
