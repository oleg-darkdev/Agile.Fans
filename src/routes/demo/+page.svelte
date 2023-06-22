<script>
	import { HeaderApp } from '../../lib/core/layout/widgets';
	import { ProductItem } from '../../lib/core/layout/entities';

	import { Aside } from '../../lib/core/layout/entities';

	import { productsList } from '../../lib/core/data';
	import { convertObjToArray } from '../../lib/core/utils';

	const arrayOfProducts = convertObjToArray(productsList);

	$: selectedApp = '';
</script>

<HeaderApp productData={productsList.agileKit} />

<main class="flex flex-row ">
	<Aside {selectedApp} />

	<div class="container my-24 mx-auto md:px-6">
		<section class="mb-32 text-center">
			<!-- <h2 class="mb-12 pb-4 text-center text-3xl font-bold">Latest articles</h2> -->

			<div class="grid gap-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-10">
				{#each arrayOfProducts as product}
					<ProductItem {product} />
				{/each}
			</div>
		</section>
	</div>
</main>
<!-- {#if selectedApp}{/if} -->
