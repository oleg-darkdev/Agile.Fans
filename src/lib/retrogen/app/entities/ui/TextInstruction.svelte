<script>

  let showFullInstruction =  false;
	export let title, desc, steps;
</script>

<div
	class=" mx-auto group my-2 flex max-w-7xl flex-col items-center rounded-xl border-2 border-pink-700 px-6 hover:bg-pink-700  hover:text-white lg:px-8"
>
	<div class="prose-blue prose mx-auto flex w-full max-w-3xl flex-col text-left">
		<div class="mx-auto w-full">
			<h2>{title}</h2>
			<p>
				{desc}
			</p>
		</div>
	</div>

  <button
					on:click={() => showFullInstruction = !showFullInstruction}
					class="group btn-lg btn mx-6 mx-auto mt-6 mb-4 w-8/12 max-w-2xl bg-pink-600 group-hover:bg-black"
					>{showFullInstruction ? 'Hide': 'Show'}</button
				> 
        {#if showFullInstruction }
	{#each steps as instructionStep, step}
		<div
			class="mx-auto my-2 flex w-full flex-col  justify-start md:flex-row  lg:flex-row "
		>
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
