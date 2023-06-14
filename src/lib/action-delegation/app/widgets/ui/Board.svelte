<script>
	import { BoardCard, BoardColumn } from '../../entities';

	const cardLorem = {
		type: 'Design',
		date: 'Dec 12',
		members: [
			{
				fullName: '',
				email: '',
				avatar: 'https://randomuser.me/api/portraits/women/26.jpg'
			},
			{
				fullName: '',
				email: '',
				avatar: 'https://randomuser.me/api/portraits/women/25.jpg'
			}
		],
		title: 'Lorem ipsum dolor',
		desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	};
	const board = {
		title: '',
		columns: [
			{
				title: 'Backlog',
				data: [
					cardLorem,
					cardLorem,
					cardLorem,
					cardLorem,
					cardLorem,
					cardLorem,
					cardLorem,
					cardLorem
				],
				id: 0
			},
			{
				title: 'Level 1',
				data: [cardLorem, cardLorem],
				id: 1
			},
			{
				title: 'Level 2',
				data: [cardLorem, cardLorem, cardLorem],
				id: 2
			},
			{
				title: 'Level 3',
				data: [cardLorem],
				id: 3
			},
			{
				title: 'Level 4',
				data: [cardLorem, cardLorem, cardLorem, cardLorem, cardLorem],
				id: 4
			},
			{
				title: 'Level 5',
				data: [cardLorem, cardLorem, cardLorem],
				id: 5
			},
			{
				title: 'Level 6',
				data: [cardLorem, cardLorem],
				id: 6
			},
			{
				title: 'Level 7',
				data: [cardLorem, cardLorem, cardLorem, cardLorem, cardLorem, cardLorem],
				id: 7
			}
		]
	};

	let showCards = false;
</script>

<div
	class="flex min-h-screen w-screen justify-center  bg-gradient-to-t from-blue-200 via-blue-400 to-blue-500 text-gray-700"
>
	<!-- <div class="px-10">
		<h1 class="text-2xl font-bold text-neutral-200">Team Project Board</h1>
	</div> -->
	<div
		class="mt-4 flex {showCards
			? 'flex-col'
			: 'flex-row flex-wrap items-center justify-center max-w-7xl h-80'} overflow-hidden  px-4 "
	>
		{#each board.columns as column (column.id)}
			<BoardColumn {column} bind:showCards />
		{/each}

		<div class="w-6 flex-shrink-0" />
	</div>
</div>
<!-- Component End -->
