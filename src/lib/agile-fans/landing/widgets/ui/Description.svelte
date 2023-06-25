<script>
	import { FreeDownload } from '../../../../core/layout/entities';
	import { ShowFullListBtn } from '../../../../core/layout/shared';

	import { products } from '../../shared';
	let showFullList = false;
</script>

<section>
	<div class=" mx-auto flex flex-col items-center px-5 py-2">
		<div class="prose mb-2 flex w-full max-w-max flex-col text-left lg:max-w-2xl">
			<div class="mx-auto w-full">
				<h1 class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
				<h2 class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
				<p class="text-gray-400">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				</p>
			</div>
		</div>
	</div>

	<div class=" w-full items-center px-5">
		<div class="prose mx-auto flex w-full max-w-max flex-wrap justify-center lg:max-w-3xl">
			<div class="relative justify-center lg:px-4">
				<div class="lg:grid lg:grid-cols-2">
					{#each showFullList ? products.splice(0, 6) : products as product}
						<div class="m-4 rounded-xl p-4 hover:bg-gray-100">
							<h1 class="text-gray-500">{product.title}</h1>
							<p class="text-gray-400">
								{product.shortDesc}
							</p>
							<a
								href="#{product.anchor}"
								class="mt-0 inline-flex items-center font-semibold text-blue-600 hover:text-neutral-600 lg:mb-0"
								title="read more"
							>
								Read More »
							</a>
						</div>
					{/each}
				</div>

				<ShowFullListBtn bind:showFullList />
			</div>
		</div>
	</div>

	<FreeDownload />
</section>
