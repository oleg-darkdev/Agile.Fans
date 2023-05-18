<script>
  export let product;
</script>


<section class="m-auto px-6 py-16 text-gray-600 xl:container md:px-12 xl:px-16">
  <a name={product.anchor} />
	<div
		class="shadow-lg dark:lg:bg-darker {product.orientation} justify-center space-y-6 rounded-[4rem] md:flex md:gap-6 md:space-y-0 lg:items-center lg:bg-gray-50 lg:p-16"
	>
		<div class="md:5/12 lg:w-1/2">
			<img src={product.promoImg} alt={product.title} loading="lazy" width="" height="" />
		</div>

		<div class="md:7/12 lg:w-1/2">
			<h2 class="text-3xl font-bold text-gray-800  md:text-4xl">
				{product.title}
			</h2>
			<p class="my-8 text-gray-600">
				{product.shortDesc}
			</p>
			<div class="space-y-4 divide-y divide-gray-100 dark:divide-gray-800">
				{#each product.features as feature}
        <div class=" flex gap-4 md:items-center ">
					<div class="flex h-12 w-12 gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="m-auto h-6 w-6 text-blue-600"
						>
							<path
								fill-rule="evenodd"
								d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="w-5/6 mt-2">
						<h4 class="text-lg font-semibold text-gray-600">{feature.title}</h4>
						<p class="text-gray-500 dark:text-gray-400">
							{feature.desc}
						</p>
					</div>
				</div>
        {/each}
			</div>
		</div>
	</div>
</section>
