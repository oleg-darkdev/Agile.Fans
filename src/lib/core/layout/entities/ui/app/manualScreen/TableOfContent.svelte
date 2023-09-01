<script>
	import { AppBlocksWrapper } from '@coreSharedLayout';

	export let card, index, selected, showFullInstruction;
</script>

<!-- 	class="bg-neutal-600 rounded-lg group m-1 max-w-sm border border-neutral-600 p-4 text-gray-500 shadow-md shadow-md hover:bg-neutral-900  hover:no-underline focus:no-underline"
 -->
<AppBlocksWrapper>
	<div
		class="space-y-2 p-6 group-focus:bg-pink-700  "
		on:click={() => {
			selected = card.data;
			showFullInstruction = card.id;
		}}
	>
		<h3 class="text-2xl font-semibold group-hover:underline group-focus:underline ">
			<span class="text-pink-700 group-hover:text-gray-100 group-focus:text-gray-100 "
				>#{index + 1}
			</span>
			{card.title}
		</h3>
		<p>{card.shortDesc}</p>
	</div>
</AppBlocksWrapper>
