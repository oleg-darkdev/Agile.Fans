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
			bg: 'bg-gray-50',

			textColor: 'text-gray-400'
		},
		{
			title: 'Online acces for all products',
			priceItems: priceItems,
			link: '',
			tax: 12,
			terms: 'Full acces for all online apps',
			bg: 'bg-gray-100',

			textColor: 'text-gray-500'
		},
		{
			title: 'Full box',
			priceItems: priceItems,
			link: '',
			tax: 200,
			terms: 'Extended trial access to web services for 2 months ',
			bg: 'bg-white',
			textColor: 'text-gray-700'
		}
	];
</script>

<section>
	<div class="relative mx-auto w-full max-w-7xl items-center py-24 md:px-12 lg:px-16">
		<h2
			class="mb-8 text-center text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl"
		>
			Our plans
		</h2>
		<a name="price" />
		<div class="divide-y overflow-hidden rounded-xl px-5 shadow-xl lg:px-0">
			{#each prices as price}
				<PriceLine {price} />
			{/each}
		</div>
	</div>
</section>
