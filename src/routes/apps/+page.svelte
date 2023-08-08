<script>
	import { ProductItem,  StatsAccount, WorkshopsList } from '../../lib/core/layout/entities';

	import { productsList, allKit } from '../../lib/core/data';
	import { convertObjToArray } from '../../lib/core/utils';

	const arrayOfProducts = convertObjToArray(productsList);

	const allProductsArr = [].concat(allKit.products);

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

<section class="my-12 grid gap-4 py-8 px-4 lg:grid-cols-2 xl:gap-x-12 ">
	<div class=" rounded-xl bg-gray-200  py-4 px-4 text-center ">
		<h2 class="my-4 py-4 text-center text-5xl font-bold text-neutral-700">Ostatnie aplikacje</h2>

		<div class="mb-12 grid gap-6 lg:grid-cols-2 lg:gap-x-4 lg:gap-y-10">
			{#each allProductsArr.slice(5, 7) as product}
				<ProductItem {product} />
			{/each}
		</div>

		<h2 class="my-4 py-4 text-center text-5xl font-bold text-neutral-700">Dostępne aplikacje</h2>

		<div class="grid gap-6 lg:grid-cols-2 lg:gap-x-4 lg:gap-y-10">
			{#each allProductsArr as product}
				<ProductItem {product} />
			{/each}
		</div>
	</div>

	<div class=" rounded-xl bg-primary py-4 px-4 text-center">
		<div class="mb-4 flex w-full justify-center ">
			<StatsAccount {stats} />
		</div>

		<WorkshopsList {workshopsList} />
	</div>
</section>
