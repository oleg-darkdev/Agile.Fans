<script>
	import { AppBlocksWrapper } from '@coreSharedLayout';

	export let desc, title;
</script>

<AppBlocksWrapper>
	<div class="mx-auto max-w-screen-xl py-6 px-4 md:px-8 md:text-center">
		<div class="max-w-xl md:mx-auto">
			<h3 class=" text-2xl font-semibold text-gray-300 md:text-3xl lg:text-3xl xl:text-3xl ">
				{title}
			</h3>
			{#each desc as text}
				<p class="mt-3 text-gray-300">
					{text}
				</p>
			{/each}
		</div>
		<div class="mt-4 flex items-center justify-center">
			<button class="btn-lg  btn mx-6 mt-4 max-w-2xl bg-pink-600" on:click>Rozpocząć grę</button>
		</div>
	</div>
</AppBlocksWrapper>
