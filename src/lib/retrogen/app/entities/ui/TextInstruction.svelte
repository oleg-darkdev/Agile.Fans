<script>
  export let title, desc, steps;
</script>

<div class=" mx-auto flex max-w-7xl flex-col items-center px-5  sm:px-6 lg:px-8">
	<div class="prose-blue prose mx-auto flex w-full max-w-3xl flex-col text-left">
		<div class="mx-auto w-full">
			<h2>{title}</h2>
			<p>
				{desc}
			</p>
		</div>
	</div>
	{#each steps as instructionStep, step}
		<div class="mx-auto my-2 flex w-full flex-col items-center  sm:flex-row">
			<div
				class="mr-4 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-pink-700 group-hover:text-pink-500 group-hover:bg-neutral-50  text-neutral-50"
			>
				<span> {step + 1} </span>
			</div>
			<div class="prose-md text-pink-500 group-hover:text-neutral-50 prose mt-6 flex-grow text-center sm:mt-0 sm:text-left">
				<p>
					{instructionStep}
				</p>
			</div>
		</div>
	{/each}
</div>
