<script>

	const features = [
		{
			title: 'Lorem ipsum dolor sit amet',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://cdn-icons-png.flaticon.com/512/4341/4341139.png'
		},
		{
			title: 'Lorem ipsum dolor sit amet',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://cdn-icons-png.flaticon.com/512/4341/4341139.png'
		},
		{
			title: 'Lorem ipsum dolor sit amet',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://cdn-icons-png.flaticon.com/512/4341/4341139.png'
		},
		{
			title: 'Lorem ipsum dolor sit amet',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://cdn-icons-png.flaticon.com/512/4341/4341139.png'
		}
	];
</script>

<section>
	<div class="m-auto space-y-16 px-6 text-gray-500 xl:container md:px-12">
		<div>
			<h2 class="mt-4 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
				A technology-first approach to payments <br class="sm:block" hidden />
				and finance
			</h2>
		</div>
		<div class="mt-16 flex flex-row flex-wrap justify-center md:-mx-8">
			{#each features as feature}
				<!-- dark:border-gray-700 dark:bg-gray-800 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800  -->
				<!-- dark:lg:bg-transparent -->
				<div
					class="group relative m-2 max-w-lg rounded-3xl border border-gray-100 bg-gray-100 p-8 shadow-2xl shadow-gray-600/10 transition duration-300 hover:border-gray-100 sm:flex sm:gap-8 lg:border-transparent lg:shadow-transparent lg:hover:shadow-gray-600/10 "
				>
					<div class="relative">
						<img
							src={feature.img}
							class="w-10"
							width="512"
							height="512"
							alt="{feature.title} image"
						/>
						<h3 class="mt-8 mb-4 text-2xl font-semibold text-gray-500 transition">
							{feature.title}
						</h3>
						<p class="text-gray-400">
							{feature.desc}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>

</section>
