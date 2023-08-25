import { sectionComponent, appComponent, holderComponent } from '$lib/core/data';

// const kit = retrogenComponent.retrogen;

const tool = {
	id: '0',
	title: '',
	shortDesc: 'Участники записывают важные события в хронологическом порядке.',
	attention: 'Важно собрать как можно большее количество событий.',
link: 'timeline-chronology',

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
		`Создайте из 3 секций 3 колонки`,
		`Расположите 4 секции в горизонтальной ориентации`,
		`Найдите набор компонентов с идентификатором # в пакете с логотипом retrogen.`,
		`Озаглавьте колонки: '`,
		`Разделите на группы по 5 или меньше человек.`,
		`Раздайте карточки и маркеры.`,
		`Ознакомьтесь с инструкцией`,
		`Запускайте приложение`
	],
	instruction: [
		`Дайте участникам 10 минут, чтобы записать памятные и для них значимые события.`,
		`Все участиники выкладывают или приклеивают свои карточки на хронологически подходящую позицию.`,
		`Можно и сейчас добавлять новые карточки.`,
		`Анализируйте сформировавшуюся картину.`,
		`Можно использовать карточки разных цветов чтобы распознать закономерности, например: Чувства/Эмоции, События (технические, организационные, ..), Функции (тестер, разработчик, менеджер, ...)`
	],
	listData: ['', '', ''],
	components: [
		Object.assign(sectionComponent, { count: '3' }),
		Object.assign(holderComponent, { count: '20' }),
		Object.assign(appComponent, { count: 1 })
	]
};

export default tool;
