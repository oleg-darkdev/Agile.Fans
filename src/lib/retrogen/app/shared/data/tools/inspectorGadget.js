import { sectionComponent, appComponent, holderComponent } from '$lib/core/data';

// const kit = retrogenComponent.retrogen;

const tool = {
	id: '0',
	title: 'Мозговой штурм по 4-м категориям для быстрого выявления проблем',
	shortDesc: '',
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
		`Создайте из 4 секций 4 колонки`,
		`Найдите набор компонентов с идентификатором # в пакете с логотипом retrogen.`,
    `Взять часть из 12 набор, добавить 13`,
		`Создайте 4 квадрата.`,
		`Озаглавьте колонки:  ':)', ':(', 'Идея!', и 'Благодарность'.`,
		`Раздайте участникам стикеры четырёх цветов.`,
		`Ознакомьтесь с инструкцией`,
		`Запускайте приложение`
	],
	instruction: [
		`Участники могут писать свои мысли в любой квадрант.`,
		`Каждая отдельная мысль на отдельном стикере.`,
		`Сгруппируйте карточки.`,
		`Проведите голосование точками за наиболее важные мысли (6-9 точек на человека).`,
		`Получившийся список является отправной точкой для следующего этапа: 'Разработка плана действий'.`,
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
