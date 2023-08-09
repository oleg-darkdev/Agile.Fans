import { sectionComponent, appComponent, holderComponent } from '$lib/core/data';

// const kit = retrogenComponent.retrogen;

const tool = {
	id: '0',
	title: 'Costs of delays',
	shortDesc: 'На сколько задерживаемся? И куда направляемся?',
	attention: '',

	desc: [
		`Тот, кто живёт в Германии, не понаслышке знает о задержке поездов. Вы можете взять другой вид транспорта в зависимости от страны и культурных особенностей.`
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
		bio: 'Christian Schafmeister',
		link: ''
	},
	photos: ['', ''],
	video: '',
	preparation: [
		`Создайте из 3 секций 3 колонки`,
		`Найдите набор компонентов с идентификатором # в пакете с логотипом retrogen.`,
		`Озаглавьте колонки: «Пункт назначения», второй — «Задержка», а третий — «Объявление»'`,
		`Ознакомьтесь с инструкцией`,
		`Запускайте приложение`
	],
	instruction: [
		`Попросите участников представить следующую ситуацию. Вы находитесь на станции. Куда едет ваш поезд? (Любое выдуманное или реальное место).`,
		`На сколько уже опаздывает поезд? Что сообщается в объявлении? Почему поезд задерживается? (Можно назвать реальную причину или придумать что-то исходя из стандартного объявления).`,
		`Каждый член команды подписывает три стикера, по одному на столбец.`,
		`Участники по очереди приклеивают стикеры и кратко объясняют, почему они направляются в пункт назначения X и почему есть задержка (или нет).`,
		``,
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
