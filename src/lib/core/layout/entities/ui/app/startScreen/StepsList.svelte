<script>
	import { AppBlocksWrapper, StepElement } from '@coreSharedLayout';

	$: stepsLength = steps.length - 1;

	export let steps;
</script>

<!-- mx-2 grid rounded-lg border border-pink-600 bg-black px-4 py-4 shadow-md shadow-pink-600 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-4 -->
<AppBlocksWrapper>
	<h3 class="text-1xl mb-6 text-center font-bold text-gray-100 sm:text-4xl">
		Kroki przygotowania do gry
	</h3>
	<div class="mx-auto grid max-w-2xl">
		{#each steps as step, idStep}
			<StepElement {step} {idStep} {stepsLength} />
		{/each}
	</div>
	<slot />
</AppBlocksWrapper>
