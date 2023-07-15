<script>
	import { PriceLine } from '../../../entities';

export let prices;
</script>

<section class="md:my-12 lg:my-12">
	<div
		class="relative w-full max-w-7xl items-center rounded-xl py-12 md:mx-auto md:bg-gray-200 md:px-12 lg:mx-auto lg:bg-gray-200 lg:px-16"
	>
		<h2
			class="mb-8 text-center text-4xl font-bold leading-none tracking-tighter text-neutral-700 md:text-7xl lg:text-5xl"
		>
			Our plans
		</h2>
		<a name="price" />
		<div
			class="divide-y overflow-hidden  md:rounded-xl md:px-5 lg:rounded-xl lg:px-5 lg:px-0"
		>
			{#each prices as price}
				<PriceLine {price} />
			{/each}
		</div>
	</div>
</section>
