<script>
	import { motivatorsList, fearsList } from '../../../lib/ten/shared';

	const referencesList = [
		{
			img: 'http://solankidefenceacademy.com/images/motivation.jpeg ',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
			title: 'Motivators',
			data: motivatorsList,
			userChoice: []
		},
		{
			img: 'http://solankidefenceacademy.com/images/motivation.jpeg ',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
			title: 'Fears',
			data: fearsList,
			userChoice: []
		},
		{
			img: 'http://solankidefenceacademy.com/images/motivation.jpeg ',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
			title: 'Materials',
			data: [''],
			userChoice: []
		}
	];

	let selected = false;
	// referencesList[0]
	function updCardsOrder(id) {
		selected.userChoice.push();
	}
</script>

<section class="flex flex-col items-center justify-center">
	<h3 class="text-center text-xl font-semibold leading-6 text-gray-800">Select the type</h3>

	<div class="relative mx-auto max-w-7xl">
		{#if selected}
			<div class="mx-auto mt-12 grid max-w-lg gap-2 lg:max-w-none lg:grid-cols-3">
				{#each selected.data as card, id}
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
									<figcaption
										class="font-numbers absolute inset-y-auto inset-x-auto text-8xl text-gray-500"
									>
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
				{/each}
			</div>
		{:else}
			<section class="">
				<div class="mx-auto flex flex-wrap p-12 md:flex-nowrap">
					{#each referencesList as reference}
						<div on:click={() => (selected = reference)} class="flex w-full">
							<div
								class="relative m-1 flex transform flex-col items-start rounded-xl bg-white shadow-2xl transition delay-150 duration-300 ease-in-out md:-ml-16 md:w-80 md:hover:-translate-x-16 md:hover:-translate-y-8"
							>
								<img
									class="w-full rounded-t-xl object-cover object-center md:h-36 lg:h-48"
									src={reference.img}
									alt={reference.title}
								/>
								<div class="px-6 py-8">
									<h4 class="mt-4 text-2xl font-semibold text-neutral-600">
										<span class="">{reference.title}</span>
									</h4>
									<p class="leading-relax mt-4 text-base font-normal text-gray-500">
										{reference.desc}
									</p>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</section>
		{/if}
	</div>
</section>
