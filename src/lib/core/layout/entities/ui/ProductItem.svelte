<script>
	export let product;
</script>

<div class="mb-6 lg:mb-0">
	<div class="relative block rounded-lg bg-primary">
		<div class="flex">
			<div
				class="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-black/20"
			>
				<img src={product.shortDesc.banner} class="w-full" />
				<a href="/">
					<div
						class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98.4%,.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
					/>
				</a>
			</div>
		</div>
		<div class="py-6 pt-2 pb-4">
			<h4 class="mb-1 text-3xl font-bold text-white">{product.shortDesc.title}</h4>

			<p class="mb-4 pb-2 text-white">
				{product.shortDesc.synopsis}
			</p>
			<button
				class="transform rounded-xl bg-pink-500 px-5 py-4 text-center text-base font-medium text-white transition duration-500 ease-in-out hover:bg-pink-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 lg:px-10"
				>Get started</button
			>
		</div>
	</div>
</div>
