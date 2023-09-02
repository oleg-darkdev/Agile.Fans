<script>
	export let step;
</script>

<li class="step-secondary step">
	<div>
		<h3 class="text-xl font-normal text-pink-600">{step.title}</h3>
		{#each step.desc as desc}
			<p class="text-sm font-xs text-gray-400">
				{desc}
			</p>
		{/each}
	</div>
</li>
