<script>
	export let features;
</script>

<section class="mb-12 bg-white ">
	<div class="container mx-auto max-w-6xl px-6 pt-12">
		<!-- <h1 class="text-2xl font-semibold capitalize text-gray-800  lg:text-3xl">
			explore our <br /> awesome <span class="underline decoration-blue-500">Components</span>
		</h1>

		<p class="mt-4 text-gray-500  xl:mt-6">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
		</p> -->

		<div class="grid grid-cols-1 gap-2 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-6">
			{#each features as feature}
				<div class="group space-y-2 rounded-xl border-2 border-blue-400 p-6 hover:bg-blue-500 ">
					<span class="inline-block text-blue-500 ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-8 w-8 stroke-blue-500 group-hover:stroke-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke=""
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
							/>
						</svg>
					</span>

					<h1
						class="text-xl font-semibold capitalize text-gray-700 group-hover:bg-blue-500 group-hover:text-white "
					>
						{feature.title}
					</h1>

					<p class="text-gray-500 group-hover:bg-blue-500 group-hover:text-white ">
						{feature.desc}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
