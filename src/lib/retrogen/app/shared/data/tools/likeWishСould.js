import { sectionComponent, appComponent, holderComponent } from '$lib/core/data';

// const kit = retrogenComponent.retrogen;

const tool = {
	id: '0',
	title: 'I like it, I wish, I could.',
	shortDesc: '',
	attention: 'Позитивная и конструктивная обратная связь без агрессии.',

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
		bio: 'Satu Rekonen',
		link: ''
	},
	photos: ['', ''],
	video: '',
	preparation: [
		`Создайте из 2 секций 2 колонки`,
		`Найдите набор компонентов с идентификатором # в пакете с логотипом retrogen.`,
		`Озаглавьте колонки: «Мне нравится», второй — «Мне бы хотелось». '`,
		`Ознакомьтесь с инструкцией`,
		`Запускайте приложение`
	],
	instruction: [
		`Дайте участникам 5–10 минут на размышления, пусть каждый подумает о команде и последней итерации и напишет, что нравится и что хотелось бы поменять (и каким образом) — по одному пункту на карточки.`,
		`Потом все по очереди зачитывают свои идеи для секции «Мне нравится» и прикрепляют на него карточки.`,
		`Повторяем то же самое со для секции «Мне бы хотелось».`,
		`Обсудите результаты или используйте стикеры как отправной пункт на следующей стадии.`
	],
	listData: ['', '', ''],
	components: [
		Object.assign(sectionComponent, { count: '3' }),
		Object.assign(holderComponent, { count: '20' }),
		Object.assign(appComponent, { count: 1 })
	]
};

export default tool;
