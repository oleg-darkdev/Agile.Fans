import { sectionComponent, appComponent, holderComponent } from '$lib/core/data';

// const kit = retrogenComponent.retrogen;

const tool = {
	id: '0',
	title: 'Magic Gin',
	shortDesc: 'Игра на выявление истинных потребностей',
	attention: '',

	desc: [
		'Попросите участников представить такую ситуацию: Вы освободили джина из бутылки и по традиции можете загадать три желания. Что загадаете?'
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
		bio: 'Özer Özker & Anke Bartels',
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
		`Загадайте: одно желание для себя`,
		`Загадайте: одно желание для команды`,
		`Загадайте: одно желание для всех людей на планете`,
		`Жульничать (например, просить больше желаний или ещё одного джина) нельзя!`,
		`Пусть каждый зачитает свои желания вслух.`,
		`В конце можно проголосовать за лучшие или самые интересные желания.`,
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
