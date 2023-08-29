<script>
	import { BoardCard } from '../../entities';

	export let column;
</script>

<div
	class=" {column.showCards
		? 'w-full'
		: ''}  m-1  flex flex-col rounded rounded-xl bg-pink-600 bg-pink-500 "
>
	<div class="flex h-20 max-w-xs  items-center px-2">
		<button
			on:click={() => {
				column.showCards = !column.showCards;
			}}
			class="transform rounded-xl bg-pink-800 px-5 py-4 text-center text-base font-medium text-white transition duration-500 ease-in-out hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 lg:px-10"
		>
			<span class="block text-3xl font-semibold text-white">{column.title}</span>
		</button>
		<span
			class="text-md ml-2 mr-6 flex h-10 w-10 items-center justify-center rounded bg-white bg-opacity-30 font-medium text-white"
			>{column.data.length}
		</span>
	</div>

	<div
		class="{column.showCards
			? 'w-full'
			: 'hidden'} flex flex-row flex-wrap overflow-visible pb-2 pl-20 "
	>
		{#each column.data as card}
			<BoardCard {card} />
		{/each}
	</div>
</div>
