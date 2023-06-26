<script>
	import { ProductCard } from '../../entities';

	export let productsList;

</script>

<div class="mx-4 py-5 md:px-6 lg:px-8">
	<!-- <div class="grid gap-6 lg:grid-cols-2"> -->
	<ul class="flex flex-row flex-wrap justify-center ">
		{#each productsList as product, i}
			<ProductCard {product}  />
		{/each}
	</ul>

	<!-- </div> -->
</div>
