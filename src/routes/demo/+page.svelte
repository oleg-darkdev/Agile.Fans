

<script>
	import { HeaderApp, Footer } from '../../lib/core/layout/widgets';
	import { ProductItem } from '../../lib/core/layout/entities';

	import { Aside } from '../../lib/core/layout/entities';

	import { productsList, agileFans, allKit, productsCategories } from '../../lib/core/data';
	import { convertObjToArray } from '../../lib/core/utils';

	const arrayOfProducts = convertObjToArray(productsList);

	const allProductsArr = [].concat(
		allKit.products
	);

	$: selectedApp = '';

	const stats = [
		{
			title: ''
		},
		{
			title: ''
		},
		{
			title: ''
		}
	];
	const workshopsList = [
		{
			title: 'Lorem ipsum is placeholder text',
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			img: 'https://weknowyourdreams.com/images/workshop/workshop-11.jpg',
			link: '/'
		},
		{
			title: 'Lorem ipsum is placeholder text',
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			img: 'https://weknowyourdreams.com/images/workshop/workshop-11.jpg',
			link: '/'
		},
		{
			title: 'Lorem ipsum is placeholder text',
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			img: 'https://weknowyourdreams.com/images/workshop/workshop-11.jpg',
			link: '/'
		},
		{
			title: 'Lorem ipsum is placeholder text',
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			img: 'https://weknowyourdreams.com/images/workshop/workshop-11.jpg',
			link: '/'
		},
		{
			title: 'Lorem ipsum is placeholder text',
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			img: 'https://weknowyourdreams.com/images/workshop/workshop-11.jpg',
			link: '/'
		}
	];
</script>

<HeaderApp productData={productsList.agileKit} />

<main class="flex flex-row ">
	<Aside {selectedApp} {allProductsArr}/>

	<section class="my-12 grid gap-4 py-8 px-4 lg:grid-cols-2 xl:gap-x-12 ">
    <div class=" rounded-xl bg-gray-200  py-4 px-4 text-center ">
			<h2 class="my-4 py-4 text-center text-5xl font-bold text-neutral-700">Ostatnie aplikacje</h2>

			<div class="mb-12 grid gap-6 lg:grid-cols-2 lg:gap-x-4 lg:gap-y-10">
				{#each arrayOfProducts.splice(0, 2) as product}
					<ProductItem {product} />
				{/each}
			</div>


      <h2 class="my-4 py-4 text-center text-5xl font-bold text-neutral-700">Dostępne aplikacje</h2>

			<div class="grid gap-6 lg:grid-cols-2 lg:gap-x-4 lg:gap-y-10">
				{#each arrayOfProducts as product}
					<ProductItem {product} />
				{/each}
			</div>
		</div>

		<div class=" rounded-xl bg-primary py-4 px-4 text-center">
			<div class="mb-4 flex w-full justify-center ">
				<div class="stats shadow">
					{#each stats as stat}
						<div class="mix-blend-mode stat">
							<div class="stat-figure text-primary">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									class="inline-block h-8 w-8 stroke-pink-600"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
									/></svg
								>
							</div>
							<div class="stat-title text-black">Lorem impsum</div>
							<div class="stat-value text-pink-600">25.6K</div>
							<div class="stat-desc text-neutral-900">Lorem impsum textarea</div>
						</div>
					{/each}
				</div>
			</div>

			<div class="w-full rounded-lg  bg-gradient-to-r from-pink-500 to-pink-700 p-4  shadow sm:p-8">
				<div class="flex items-center justify-between">
					<h4 class="my-2  text-center text-4xl font-bold text-neutral-800">
						Nadchodzące warsztaty
					</h4>

					<a href="#" class="text-sm font-medium text-black hover:underline "> View all </a>
				</div>
				<div class="flow-root">
					<ul role="list" class="divide-y divide-black">
						{#each workshopsList as workshop}
							<li class="py-3 sm:py-4">
								<div class="flex items-center space-x-4">
									<div class="flex-shrink-0">
										<img class="h-8 w-8 rounded-full" src={workshop.img} alt={workshop.title} />
									</div>
									<div class="min-w-0 flex-1">
										<p class="truncate text-sm font-medium text-gray-900 dark:text-white">
											Neil Sims
										</p>
										<p class="truncate text-sm text-gray-500 dark:text-gray-400">
											{workshop.title}
										</p>
									</div>
									<div
										class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
									>
										$320
									</div>
								</div>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</section>
</main>
<!-- {#if selectedApp}{/if} -->

<Footer />
