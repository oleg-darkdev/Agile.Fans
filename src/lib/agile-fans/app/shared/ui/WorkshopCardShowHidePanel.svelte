<script>
	import Icon from 'svelte-awesome';
	import arrowDown from 'svelte-awesome/icons/arrowDown';
	import arrowUp from 'svelte-awesome/icons/arrowUp';

	let showFullData = false;

	export let title;
</script>

<div class=" group mx-auto my-4 flex max-w-7xl flex-col items-center px-6  lg:px-8">
	<div class="mx-auto flex w-full max-w-3xl flex-col text-left">
		<div class="mx-auto my-2 w-full">
			<div class="space-between flex flex-row">
				<h2 class="w-full text-2xl font-bold">{title}</h2>

				<button on:click={() => (showFullData = !showFullData)} title="Show" class="w-10">
					<Icon data={showFullData ? arrowUp : arrowDown} scale={1.5} />
				</button>
			</div>
		</div>
		<div class="mb-4">
			{#if showFullData}
				<slot />
			{/if}
		</div>
	</div>
</div>
