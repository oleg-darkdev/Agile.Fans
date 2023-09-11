<script>
	import { AppBlocksWrapper, StepElement } from '@coreSharedLayout';

	export let steps, selectedMode;
</script>

<!-- mx-2 grid rounded-lg border border-pink-600 bg-black px-4 py-4 shadow-md shadow-pink-600 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-4 -->
<AppBlocksWrapper>
	<h3 class="text-1xl mb-6 text-center font-bold text-gray-100 sm:text-4xl">
		Kroki przygotowania do gry w trybie {selectedMode}
	</h3>
	<ul class="steps steps-vertical">
		{#each steps as step}
			<StepElement {step} />
		{/each}
		<li class="step-primary step">Register</li>
	</ul>


	<slot />
</AppBlocksWrapper>
