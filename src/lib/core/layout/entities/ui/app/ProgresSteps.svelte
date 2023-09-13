<script>
	export let gameSteps, step;

	// let tempGameSteps = gameSteps;

	// $: steps = tempGameSteps.splice(step - 2, gameSteps.length - 1);

	// console.log(tempGameSteps.splice(step - 2, gameSteps.length - 1));
</script>

<div class="mb-2 flex w-full justify-center overflow-x-auto">
	<ul class="steps ">
		{#each gameSteps as stepData}
    <!-- {#if stepData.id - 2> step && stepData.id < step + 4} -->
			<li
				on:click={() => step = stepData.id}
				class="{step == stepData.id ? 'step-secondary ' : 'step-neutral'} step"
			>
				{stepData.id}
			</li>
      <!-- {/if} -->
		{/each}
	</ul>
</div>
