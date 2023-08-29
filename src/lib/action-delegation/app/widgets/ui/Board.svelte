<script>
	import { BoardColumn } from '../../entities';

	// const cardLorem = {
	// 	type: 'Design',
	// 	tags: ['', '', '', '', '', ''],
	//   value: '',
	// 	date: 'Dec 12',
	// 	members: [
	// 		{
	// 			fullName: '',
	// 			email: '',
	// 			avatar: 'https://randomuser.me/api/portraits/women/26.jpg'
	// 		},
	// 		{
	// 			fullName: '',
	// 			email: '',
	// 			avatar: 'https://randomuser.me/api/portraits/women/25.jpg'
	// 		}
	// 	],
	// 	title: 'Lorem ipsum dolor',
	// 	desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	// };




	export let start, selectedBoard;
</script>

<!-- bg-gradient-to-t from-black via-pink-400 to-pink-500 -->

<div
	style="height: 100%;"
	on:click={() => (start = true)}
	class="flex w-full flex-col justify-center text-gray-700"
>
	<div class="px-10">
		<h1 class="text-2xl font-bold text-neutral-200">{start ? selectedBoard.title: 'Task allocation'}</h1>
	</div>
	<div class="flex-row flex-wrap justify-center">
		<div class=" flex  flex-col items-center  justify-center  px-4 ">
			{#each selectedBoard.columns as column (column.id)}
				<BoardColumn {column} />
			{/each}
		</div>
	</div>
</div>
