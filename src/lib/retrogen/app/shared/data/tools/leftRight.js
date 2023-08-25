import { sectionComponent, appComponent, holderComponent } from '$lib/core/data';

// const kit = retrogenComponent.retrogen;

const tool = {
	id: '0',
	title: 'LEFT-RIGHT',
  link: 'left-right',

	attention:
		'[Предупреждение: в игре есть победители и проигравшие. Откажитесь от упражнения, если силы членов команды неравны].',
	shortDesc: 'Делимся идеями и забиваем «мячи» в ворота «действий»',
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
		bio: 'Judith Andresen',
		link: ''
	},
	photos: ['', ''],
	video: '',
	preparation: [
		`Создайте подобие футбольного поля с двумя воротами.`,
		`Найдите набор компонентов с идентификатором # в пакете с логотипом retrogen.`,
		`Ознакомьтесь с инструкцией`,
		`Запускайте приложение`
	],
	instruction: [
		`Пусть каждый участник придумает и запишет два изменения, по одному на карточке.`,
		`Постарайтесь не начинать круг с лидеров команды.`,
		`Первый участник выбирает ту из своих идей, которая ему нравится больше, и закрепляет карточку на доске в воротах. `,
		`Карточка с лучшей идеей следующего участника отправляется в другие ворота. `,
		`Третий участник должен выбрать, какая из двух идей ему нравится меньше, и поверх неё закрепить карточку со своей лучшей идеей.`,
		`Команда голосует, какая идея остаётся в воротах. Упражнение завершается, когда каждый участник представит по две идеи.`,
	],
	listData: ['', '', ''],
	components: [
	
		Object.assign(sectionComponent, { count: '3' }),
		Object.assign(holderComponent, { count: '20' }),
		Object.assign(appComponent, { count: 1 })
	]
};

export default tool;
