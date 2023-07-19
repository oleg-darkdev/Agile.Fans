<script>
	import { productsCategories } from '../../../../data';

	let selectedCategory = productsCategories[0];
</script>

<section
	class="container mx-auto my-12 px-4 py-8 md:rounded-xl md:bg-gray-200 md:px-12 lg:rounded-xl lg:bg-gray-200 lg:px-12 lg:py-16"
>
	<h3 class="text-center text-4xl font-black text-neutral-700 md:text-2xl lg:text-6xl">
		Browse Our Projects
	</h3>

	<div class="-mx-2 mt-4 flex items-center justify-center overflow-x-auto whitespace-nowrap py-6">
		{#each productsCategories as category, i}
			<button
				on:click={() => (selectedCategory = category)}
				class="mx-2 inline-flex cursor-pointer rounded-2xl py-0.5 px-4 text-2xl transition-colors duration-300
    {selectedCategory.title == category.title
					? 'bg-pink-500  text-white hover:bg-black'
					: 'border-gray-600 border-2 text-black hover:bg-black hover:text-white focus:outline-none'}"
				>{category.title}</button
			>
		{/each}
	</div>

	<div class="mt-10 grid grid-cols-1 gap-6 gap-x-8 md:grid-cols-2 lg:grid-cols-3 ">
		{#each selectedCategory.products as product, i}
			<a
				href='/products/{product.shortDesc.link}'
				class:lg:col-span-2={i % 2 === 0 && i < 6}
				class="rounded-2xl  bg-primary px-4 pb-8 pt-2 transition-all duration-500 hover:scale-105"
			>
				<img
					class="max-h-40  w-full rounded-lg object-cover object-center bg-gray-200 shadow-md shadow-gray-200 xl:h-96"
					src={product.shortDesc.promo}
					alt="{product.shortDesc.title} photo"
				/>
				<h2 class="mt-4 text-3xl  font-bold text-white">{product.shortDesc.title}</h2>
				<p class="leading-relax mt-2 text-base font-normal text-white ">
					{product.shortDesc.synopsis}
				</p>
			</a>
		{/each}
	</div>
</section>
<!--
<section class="bg-white dark:bg-gray-900">
	<div class="container mx-auto px-6 py-12">
		<h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">Portfolio</h1>

		<div class="mt-8 lg:-mx-12 lg:flex xl:mt-16">
			<div class="lg:mx-12">
				<h1 class="text-xl font-semibold text-gray-800 dark:text-white">Table of Content</h1>

				<div class="mt-4 space-y-4 lg:mt-8">
					<a href="#" class="block text-pink-500 hover:underline dark:text-pink-400">Web design</a>
					<a href="#" class="block text-gray-500 hover:underline dark:text-gray-300">App design</a>
					<a href="#" class="block text-gray-500 hover:underline dark:text-gray-300">Branding</a>
					<a href="#" class="block text-gray-500 hover:underline dark:text-gray-300">Animation</a>
				</div>
			</div>

			<div class="mt-8 flex-1 lg:mx-12 lg:mt-0">
				<div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
					<div>
						<img
							class="h-96 w-full rounded-lg object-cover "
							src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
							alt=""
						/>
						<h2 class="mt-4 text-xl font-semibold capitalize text-gray-800 dark:text-white">
							Best website collections
						</h2>
						<p class="mt-2 text-lg uppercase tracking-wider text-pink-500 dark:text-pink-400 ">
							Website
						</p>
					</div>

					<div>
						<img
							class="h-96 w-full rounded-lg object-cover "
							src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
							alt=""
						/>
						<h2 class="mt-4 text-xl font-semibold capitalize text-gray-800 dark:text-white">
							Block of Ui kit collections
						</h2>
						<p class="mt-2 text-lg uppercase tracking-wider text-pink-500 dark:text-pink-400 ">
							Ui kit
						</p>
					</div>

					<div>
						<img
							class="h-96 w-full rounded-lg object-cover "
							src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
							alt=""
						/>
						<h2 class="mt-4 text-xl font-semibold capitalize text-gray-800 dark:text-white">
							Ton’s of mobile mockup
						</h2>
						<p class="mt-2 text-lg uppercase tracking-wider text-pink-500 dark:text-pink-400 ">
							Mockups
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section> -->

<!--
<section class="m-auto px-6 py-16 text-gray-600 xl:container md:px-12 xl:px-16">
	<a name={product.anchor} />
	<div
		class="dark:lg:bg-darker shadow-lg {product.orientation} justify-center space-y-6 rounded-[4rem] md:flex md:gap-6 md:space-y-0 lg:items-center lg:bg-gray-50 lg:p-16"
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
								class="m-auto h-6 w-6 text-pink-600"
							>
								<path
									fill-rule="evenodd"
									d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div class="mt-2 w-5/6">
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
</section> -->
