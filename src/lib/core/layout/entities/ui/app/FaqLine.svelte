<script>
	let showLine = false;

	export let faqLine;
</script>

<div class=' ' on:click={() => (showLine = !showLine)}>
	<hr class="my-6 border-gray-700 " />

	<div>
		<button class="flex items-center focus:outline-none">
			<svg
				class="h-6 w-6 flex-shrink-0 text-pink-500"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d={showLine ? 'M20 12H4' : 'M12 4v16m8-8H4'}
				/></svg
			>

			<h1 class="mx-4 text-xl text-neutral-100 ">{faqLine.title}</h1>
		</button>

		{#if showLine}
			<div class="mt-8  flex md:mx-10">
				<span class="border border-pink-500" />

				{#each faqLine.desc as desc}
					<p class="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
						{desc}
					</p>
				{/each}
			</div>
		{/if}
	</div>
</div>
