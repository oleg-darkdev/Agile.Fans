<script>
  export let stats;
</script>

<section class="row-gap-8 grid grid-cols-2 md:grid-cols-4">
  {#each stats as stat}
	<div class="mb-12 text-center md:mb-0 md:border-r md:last:border-none dark:md:border-slate-500">
		<div
			class="font-heading text-[2.6rem] font-bold text-primary dark:text-blue-600 lg:text-5xl xl:text-6xl"
		>
			{stat.value}
		</div>
		<p
			class="text-sm font-medium uppercase tracking-widest text-gray-800 dark:text-slate-400 lg:text-base"
		>
			{stat.title}
		</p>
	</div>
  {/each}
</section>
