<script>
	function updCardsOrder(id) {
		userChoice.push(id);
	}

	let userChoice = [];

	export let card;
</script>


<div
	on:click={() => {
		card.selected = !card.selected;
		updCardsOrder(card.id);
	}}
	class="mb-2 flex cursor-pointer flex-col overflow-hidden rounded-lg p-4 hover:border-gray-500 hover:bg-gray-100 {card.selected
		? 'border border-2 border-gray-500 bg-gray-100 bg-opacity-60'
		: ''}"
>
	<div class="relative flex-shrink-0">
		<figure>
			<img class="h-48 w-full rounded-lg object-cover " src={card.img} alt={card.title} />
			{#if card.selected}
				<figcaption class="font-numbers absolute inset-y-auto inset-x-auto text-8xl text-gray-500">
					{card.id}
				</figcaption>
			{/if}
		</figure>
	</div>

	<div class="flex flex-1 flex-col justify-between">
		<div class="flex-1 pt-2 {card.selected ? 'pl-20' : ''}">
			<h3 class="text-2xl font-semibold leading-none tracking-tighter text-neutral-600">
				{card.title}
			</h3>
			<p class="text-lg font-normal text-gray-500">
				{card.text}
			</p>
		</div>
	</div>
</div>
