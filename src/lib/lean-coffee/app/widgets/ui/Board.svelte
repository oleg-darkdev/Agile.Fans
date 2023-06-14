<script>
	import { BoardColumn, Timer } from '../../entities';

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
			// {
			// 	title: 'Backlog',
			// 	data: [
			// 		cardLorem,
			// 		cardLorem,
			// 		cardLorem,
			// 		cardLorem,
			// 		cardLorem,
			// 		cardLorem,
			// 		cardLorem,
			// 		cardLorem
			// 	],
			// 	id: 0
			// },
			{
				title: 'To discuss',
				data: [cardLorem, cardLorem],
				id: 1
			},
			{
				title: 'Discussing',
				data: [cardLorem, cardLorem, cardLorem],
				id: 2
			},
			{
				title: 'Discussed',
				data: [cardLorem],
				id: 3
			},
			{
				title: 'Action',
				data: [cardLorem, cardLorem, cardLorem, cardLorem, cardLorem],
				id: 4
			}
		]
	};

	let timer = true;
</script>

{#if timer}
	<Timer time={120} />
{:else}
	<div
		class="flex h-auto w-screen flex-col bg-gradient-to-t from-blue-200 via-blue-400 to-blue-500 text-gray-700"
	>
		<!-- <div class="px-10">
		<h1 class="text-2xl font-bold text-neutral-200">Team Project Board</h1>
	</div> -->
		<div class="mt-4 flex flex-grow justify-center overflow-hidden px-4 ">
			{#each board.columns as column (column.id)}
				<BoardColumn {column} />
			{/each}

			<div class="w-6 flex-shrink-0" />
		</div>
	</div>
	<!-- Component End -->
{/if}
