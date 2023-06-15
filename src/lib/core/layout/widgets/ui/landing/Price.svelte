<script>
	import { PriceLine } from '../../../entities';

	let priceItems = [
		'Lorem ipsum is placeholder',
		'Lorem ipsum is placeholder',
		'Lorem ipsum is placeholder'
	];

	let prices = [
		{
			title: 'Free',
			priceItems: priceItems,
			link: '',
			tax: 0,
			terms: 'Trial access to web services for 2 weeks',
			bg: 'bg-blue-500'

			// textColor: 'text-gray-400'
		},
		{
			title: 'Online acces for all products',
			priceItems: priceItems,
			link: '',
			tax: 12,
			terms: 'Full acces for all online apps',
			bg: 'bg-blue-600'

			// textColor: 'text-gray-500'
		},
		{
			title: 'Full box',
			priceItems: priceItems,
			link: '',
			tax: 200,
			terms: 'Extended trial access to web services for 2 months ',
			bg: 'bg-blue-700'
			// textColor: 'text-gray-700'
		}
	];
</script>

<section class="lg:my-12 md:my-12">
	<div
		class="relative lg:mx-auto md:mx-auto w-full max-w-7xl items-center rounded-xl lg:bg-gray-200 md:bg-gray-200 py-12 md:px-12 lg:px-16"
	>
		<h2
			class="mb-8 text-center text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl"
		>
			Our plans
		</h2>
		<a name="price" />
		<div class="divide-y overflow-hidden lg:rounded-xl md:rounded-xl lg:px-5 md:px-5 shadow-xl lg:px-0">
			{#each prices as price}
				<PriceLine {price} />
			{/each}
		</div>
	</div>
</section>
