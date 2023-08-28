<script>
	import Icon from 'svelte-awesome';
	import arrowDown from 'svelte-awesome/icons/arrowDown';
	import arrowUp from 'svelte-awesome/icons/arrowUp';

	let showFullAgenda = false;
	export let agenda;

	$: agendaData = showFullAgenda ? agenda : agenda.slice(0, 2);
</script>

<div class="mb-6 flex  items-center justify-between px-6 lg:px-8">
	<h5 class="text-2xl font-bold leading-none ">Agenda</h5>
	<button
		on:click={() => (showFullAgenda = !showFullAgenda)}
		class="text-primary-600 dark:text-primary-500 text-sm font-medium hover:underline"
		><span class="mr-6">See more</span> <Icon data={showFullAgenda ? arrowUp : arrowDown} /></button
	>
</div>

<ul
	class="divide-y divide-gray-200 rounded-lg border-0 border-gray-200 bg-white text-gray-500 dark:divide-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:!bg-transparent dark:text-gray-400"
>
	{#each agendaData as data}
		<li class="w-full list-none py-2 px-4 text-sm font-medium first:rounded-t-lg last:rounded-b-lg">
			<div class="mb-6 flex  flex-col px-4 md:mb-0 ">
				<strong class="text-thin flex text-left text-3xl font-thin leading-none lg:text-4xl">
					{data.timeStart} <span class="text-sm">{data.timeEnd} </span>
				</strong>
				<span class="mt-1 w-full text-xs font-normal leading-relaxed text-gray-700"
					>{data.title}</span
				>
			</div>
		</li>
	{/each}
</ul>
