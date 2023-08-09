import { sectionComponent, appComponent, holderComponent } from '$lib/core/data';

// const kit = retrogenComponent.retrogen;

const tool = {
	id: '1',
	title: 'Начать, Прекратить, Продолжать',
	shortDesc: 'Мозговой штурм и выбор лучших предложений',
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
		`Найдите набор компонентов с идентификатором # в пакете с логотипом retrogen.`,
		`Озаглавьте колонки: 'Начать', 'Прекратить' и 'Продолжать`,
		`Ознакомьтесь с инструкцией`,
		`Запускайте приложение`,
	],
	instruction: [
		`Установите таймер на 5 минут и попросите соблюдать тишину.`,
		`Попросите участников написать свои предложения в каждую из колонок - отдельное предложение на отдельном стикере.`,
		`Попросите участников зачитать свои предложения и разместить их на соотвествующих секциях.`,
		`Организуйте короткую дискуссию: какие 20% предложений наиболее ценные. `,
		`Затем попросите участников проголосовать точками (по 3 точки на человека).`,
		`3 предложения, набравшие наибольшее количество голосов, превращаются в план действий.`
	],
	listData: ['', '', ''],
	components: [
		// Object.assign(kit, { count: '1' }),
		{
			title: 'Complect for tool: `Start, Stop, Continue`',
			id: '',
			photo: ''
		},
		Object.assign(sectionComponent, { count: '3' }),
		Object.assign(holderComponent, { count: '20' }),
		Object.assign(appComponent, { count: 1 })
	]
};

export default tool;
