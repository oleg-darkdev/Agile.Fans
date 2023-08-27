<script>
	import Icon from 'svelte-awesome';
	import arrowDown from 'svelte-awesome/icons/arrowDown';
	import arrowUp from 'svelte-awesome/icons/arrowUp';

	let showFullInstruction = false;
	export let title, desc, steps;
</script>

<div
	class=" group mx-auto my-2 flex max-w-7xl flex-col items-center rounded-xl border-2 border-pink-700 px-6 hover:bg-pink-700  hover:text-white lg:px-8"
>
	<div class="prose-blue prose mx-auto flex w-full max-w-3xl flex-col text-left">
		<div class="mx-auto w-full">
			<div class="space-between flex flex-row">
				<h2 class="w-full ">{title}</h2>

				<button
					on:click={() => (showFullInstruction = !showFullInstruction)}
					title="Show"
					class="w-10"
				>
					<Icon data={showFullInstruction ?  arrowUp : arrowDown} scale={3} />
				</button>
			</div>
			<p>
				{desc}
			</p>
		</div>
	</div>


	{#if showFullInstruction}
		{#each steps as instructionStep, step}
			<div class="mx-auto my-2 flex w-full flex-col  justify-start md:flex-row  lg:flex-row ">
				<div
					class="mr-4 inline-flex h-10 w-10  flex-shrink-0 items-center justify-center rounded-full bg-pink-700 text-neutral-50 group-hover:bg-neutral-50  group-hover:text-pink-500"
				>
					<span> {step + 1} </span>
				</div>
				<div
					class="prose-md xprose mb-2 flex-grow text-start  text-pink-500 group-hover:text-neutral-50 sm:mt-0 sm:text-left md:mt-6 lg:mt-6"
				>
					<p>
						{instructionStep}
					</p>
				</div>
			</div>
		{/each}
	{/if}
</div>
