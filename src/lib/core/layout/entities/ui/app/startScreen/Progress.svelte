<script>
	export let gameSteps, step;
</script>

<div class="flex w-full justify-center overflow-x-auto mb-2">
	<ul class="steps ">
		{#each gameSteps as stepData, i}
			<li class="{step == i ? 'step-secondary ' : 'step-neutral'} step">{i}</li>
		{/each}
	</ul>
</div>
