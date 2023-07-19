<script>
	export let card, index, selected, showFullInstruction;
</script>

<div
	class="group m-1 max-w-sm rounded-lg border-2 border-pink-700 bg-black shadow-md shadow-pink-700 hover:bg-pink-700 hover:no-underline focus:no-underline"
>
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
</div>
