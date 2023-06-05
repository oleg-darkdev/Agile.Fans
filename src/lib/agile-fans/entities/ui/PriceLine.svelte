<script>
import { PriceItem, List } from '../../shared';

  export let price;
</script>




<div class="flex w-full flex-wrap items-end justify-start {price.bg}">
	<List>
		<h2 slot="title" class="mb-4 text-md font-medium leading-none  uppercase tracking-widest text-neutral-100">
			{price.title}
		</h2>
		<ul slot="list" class="space-y-4">
			{#each price.priceItems as item}
				<PriceItem text={item} />
			{/each}
		</ul>
	</List>

	<List>
		<ul slot="list" class="space-y-4">
			{#each price.priceItems as item}
				<PriceItem text={item} />
			{/each}
		</ul>
	</List>
	<List>
		<ul slot="list" class="space-y-4">
			{#each price.priceItems as item}
				<PriceItem text={item} />
			{/each}
		</ul>
	</List>

	<div class="w-full md:w-1/4 lg:ml-auto xl:w-1/4">
		<div class="relative flex h-full flex-col p-8">
			<strong class="mx-auto flex items-end text-3xl font-black leading-none text-white">
        <!-- neutral-600 -->
				<span>${price.tax} </span>
			</strong>
			<div class="mt-2">
				<button
					role="button"
					class="block w-full transform items-center rounded-xl border-2 border-white bg-white px-10 py-3.5 text-center text-base font-medium text-blue-600 shadow-md transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
					>Buy Now</button
				>
			</div>
			<p class="mx-auto mt-6 text-xs text-gray-50">{price.terms}</p>
		</div>
	</div>
</div>
