<script>
	export let product;
</script>

<a href="/apps/{product.shortDesc.link}">
	<div class="mb-6 lg:mb-0">
		<div class="relative block rounded-lg bg-primary">
			<div class="flex">
				<div
					class=" relative mx-4 -mt-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-black/20"
				>
					<img
						src={product.shortDesc.icon}
						class="h-20 w-full w-20  rounded-xl bg-pink-700"
						alt="{product.shortDesc.title} logo"
					/>
				</div>
			</div>
			<div class="py-4 pt-2 ">
				<h4 class="mb-1 text-3xl font-bold text-white">{product.shortDesc.title}</h4>

				<p class="mb-4 p-2 text-white">
					{product.shortDesc.synopsis}
				</p>
				<button
					class=" transform rounded-xl bg-pink-500 px-5 py-4  text-center text-base font-medium text-white transition duration-500 ease-in-out hover:bg-pink-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 lg:px-10"
					>Przejdź</button
				>
			</div>
		</div>
	</div>
</a>
