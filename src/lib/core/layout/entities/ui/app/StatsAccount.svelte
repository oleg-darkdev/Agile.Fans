<script>
  export let stats;
</script>

<div class="stats shadow">
	{#each stats as stat}
		<div class="mix-blend-mode stat">
			<div class="stat-figure text-primary">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block h-8 w-8 stroke-pink-600"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
					/></svg
				>
			</div>
			<div class="stat-title text-black">Lorem impsum</div>
			<div class="stat-value text-pink-600">25.6K</div>
			<div class="stat-desc text-neutral-900">Lorem impsum textarea</div>
		</div>
	{/each}
</div>
