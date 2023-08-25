import { sectionComponent, appComponent, holderComponent } from '$lib/core/data';

// const kit = retrogenComponent.retrogen;

const tool = {
	id: '0',
	title: 'New Old Blue.',
	shortDesc:
		'По древней английской традиции в день свадьбы у невесты должно быть несколько вещей: старая, новая, чужая и голубая. Общеизвестно, что в Англии голубой цвет символизирует грусть и печаль.',
	attention: '',
link: 'new-old-blue.',

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
		bio: 'Jordan Morris, via Todd Galloway',
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
		`Участники записывают по одному примеру на стикер.`,
		`Действует только одно правило: участник, вспомнивший пример для категории «голубое», обязательно должен добавить положительный комментарий в любую другую категорию.`,
		`Попросите членов команды вспомнить примеры для каждой категории:`,
		`Каттегория: Старое - положительный отзыв или конструктивная критика о сложившейся практике.`,
		`Каттегория: Новое - Положительный отзыв или конструктивная критика о текущих экспериментах.`,
		`Каттегория: Чужое - Инструмент / подход, который вы переняли у другой команды или нашли в интернете и хотите опробовать на практике.`,
		`Каттегория: Голубое - Сдерживающий фактор или источник огорчения.`,
		`Участники закрепляют стикеры в соответствующих секциях на доске и кратко комментируют свои ответы.`
	],
	listData: ['', '', ''],
	components: [
		Object.assign(sectionComponent, { count: '3' }),
		Object.assign(holderComponent, { count: '20' }),
		Object.assign(appComponent, { count: 1 })
	]
};

export default tool;
