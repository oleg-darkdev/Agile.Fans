<script>
	export let features;
</script>

<div class="container flex max-w-md flex-col lg:flex-row lg:items-center ">
	<div class="w-full ">
		<div class="lg:max-w-lg">
			<p class="mt-1 text-gray-600 ">
				{features.desc}
			</p>
			<div class="mt-2 grid grid-cols-2 gap-2">
				{#each features.featuresList as feature}
					<div class="-px-3 flex items-center text-gray-800 ">
						<svg
							class="mx-1 h-12 w-12 stroke-pink-500"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke=""
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>
						<span class="mx-1 text-pink-600">{feature} </span>
					</div>
				{/each}
			</div>
		</div>
	</div>
	<!--
	<div class="flex h-96 w-full items-center justify-center lg:w-1/2">
		<img
			class="h-full w-full max-w-2xl rounded-md object-cover"
			src="https://images.unsplash.com/photo-1555181126-cf46a03827c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
			alt="glasses photo"
		/>
	</div> -->
</div>
