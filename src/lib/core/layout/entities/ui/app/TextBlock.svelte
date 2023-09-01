<script>
	import { Progress } from '@coreEntities';
	import { AppBlocksWrapper } from '@coreSharedLayout';

	export let title, desc, gameSteps, step;
</script>

<AppBlocksWrapper>
	<Progress {gameSteps} bind:step />

	<slot name="img" />
	<div class="py-6">
		<div class="mx-auto max-w-screen-xl px-4 md:px-8 md:text-center">
			<div class="max-w-xl md:mx-auto">
				<h3 class="text-3xl font-bold text-gray-100 sm:text-4xl">{title}</h3>
				<p class="mt-3 text-gray-100">
					{desc}
				</p>
			</div>
			<div class="mt-4 flex items-center justify-center">
				<slot name="btn" />
			</div>
		</div>
	</div>
</AppBlocksWrapper>
