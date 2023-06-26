<script>
	export let product, icon;

	console.log(product);
</script>

<li
	class="group m-2 rounded-xl border-2 border-pink-700 p-3 transition duration-300 ease-in-out hover:bg-pink-700 hover:text-white"
>
	<a href="/">
		<div class="flex items-start">
			<div class="shrink-0">
				<div class="pr-3 ">
					<!-- product.shortDesc.logo -->
					<img
						src={icon.icon}
						class="h-12 w-12  rounded-xl bg-pink-700"
						alt="{product.shortDesc.title} logo"
					/>
					<!-- <span
						class="[&>svg]:text-primary-400 [&>svg]:mr-2 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:text-primary"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
							/>
						</svg>
					</span> -->
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
