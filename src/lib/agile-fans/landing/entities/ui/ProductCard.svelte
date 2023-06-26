<script>
	export let product;
</script>

<li
	class="group m-2 rounded-xl border-2 border-pink-700 p-3 transition duration-300 ease-in-out hover:bg-pink-700 hover:text-white"
>
	<a href="/products/{product.shortDesc.link}">
		<div class="flex items-start">
			<div class="shrink-0">
				<div class="pr-3 ">
					<img
						src='{product.shortDesc.icon}'
						class="h-12 w-12  rounded-xl bg-pink-700"
						alt="{product.shortDesc.title} logo"
					/>
				</div>
			</div>
			<div class="group grow">
				<p class="mb-1 font-bold text-pink-700 group-hover:text-white">{product.shortDesc.title}</p>
				<p class="mb-0 text-pink-500 group-hover:text-neutral-50">
					{product.shortDesc.synopsis}
				</p>
			</div>
		</div>
	</a>
</li>
