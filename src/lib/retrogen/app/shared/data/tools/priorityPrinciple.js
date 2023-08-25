import { sectionComponent, appComponent, holderComponent } from '$lib/core/data';

// const kit = retrogenComponent.retrogen;

const tool = {
	id: '0',
	title: 'Приоритетный принцип',
	shortDesc: 'Обсудите 12 принципов аджайл и выберите один для проработки.',
	attention: '',
link: 'priority-principle',

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
		bio: 'Tobias Baier',
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
		`принципы надо расположить в соответствии с ответами на вопрос: «Многое ли требуется улучшить в отношении данного принципа?» Принцип, который представляет самое слабое место команды, должен оказаться вверху списка.`,
		`Начните с произвольного принципа, обсудите, что он означает и много ли улучшений требует, затем поместите его в центр. Выберите следующий принцип, обсудите его значение и расположите на доске относительно первого принципа.`,
		`Предложите положение, опираясь на групповое обсуждение, двигайтесь от исходной позиции, сравнивая принципы.`,
		`Продолжайте в том же духе, пока не отсортируете все карточки.`,
		`Теперь посмотрите на самую верхнюю карточку: вероятно, это и есть самый важный принцип, требующий безотлагательного внимания. Что команда думает на этот счёт?`,
		`Участники по-прежнему единодушны? По какой причине изменения в первую очередь требуются в этой области?`,
		`Надо ли ещё раз сравнить этот принцип со вторым или третьим в списке?`,
		`Если бы сейчас кто-то отдал предпочтение второму принципу, то почему?`
	],
	listData: ['', '', ''],
	components: [
		Object.assign(sectionComponent, { count: '3' }),
		Object.assign(holderComponent, { count: '20' }),
		Object.assign(appComponent, { count: 1 })
	]
};

export default tool;
