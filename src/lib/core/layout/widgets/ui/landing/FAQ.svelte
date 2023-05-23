<script>
	const faq = [
		{
			categoryTitle: 'Lorem ipsum is placeholder text ',
			content: [
				{
					title: 'Lorem ipsum is placeholder text ',
					desc: [
						'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
						'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
					]
				},
				{
					title: 'Lorem ipsum is placeholder text ',
					desc: [
						'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
						'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
					]
				},
				{
					title: 'Lorem ipsum is placeholder text ',
					desc: [
						'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
						'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
					]
				},
				{
					title: 'Lorem ipsum is placeholder text ',
					desc: [
						'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
						'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
					]
				}
			]
		},
		{
			categoryTitle: 'Lorem ipsum is placeholder text ',
			content: [
				{
					title: 'Lorem ipsum is placeholder text ',
					desc: [
						'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
						'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
					]
				},
				{
					title: 'Lorem ipsum is placeholder text ',
					desc: [
						'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
						'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
					]
				},
				{
					title: 'Lorem ipsum is placeholder text ',
					desc: [
						'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
						'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
					]
				},
				{
					title: 'Lorem ipsum is placeholder text ',
					desc: [
						'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
						'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
					]
				}
			]
		},
		{
			categoryTitle: 'Lorem ipsum is placeholder text ',
			content: [
				{
					title: 'Lorem ipsum is placeholder text ',
					desc: [
						'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
						'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
					]
				},
				{
					title: 'Lorem ipsum is placeholder text ',
					desc: [
						'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
						'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
					]
				},
				{
					title: 'Lorem ipsum is placeholder text ',
					desc: [
						'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
						'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
					]
				},
				{
					title: 'Lorem ipsum is placeholder text ',
					desc: [
						'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
						'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
					]
				}
			]
		}
	];

	$: selectedCategory = [faq[0].content];
</script>

<section class="bg-white ">
	<div class="container mx-auto px-6 py-12">
		<h1 class="text-center text-2xl font-semibold text-gray-800  lg:text-3xl">
			Have any Questions?
		</h1>

		<div class="mt-8 lg:-mx-12 lg:flex xl:mt-16">
			<div class="lg:mx-12">
				<h1 class="text-xl font-semibold text-gray-800 ">Table of Content</h1>

				<div class="mt-4 space-y-4 lg:mt-8">
					{#each faq as toc}
						<button
							on:click={() => (selectedCategory = toc.content)}
							class="block text-blue-500 hover:underline ">{toc.categoryTitle}</button
						>
					{/each}
				</div>
			</div>

			<div class="mt-8 flex-1 lg:mx-12 lg:mt-0">
				{#each selectedCategory as answers}
					<div>
						<button class="flex items-center focus:outline-none">
							<svg
								class="h-6 w-6 flex-shrink-0 text-blue-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M20 12H4"
								/></svg
							>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6 flex-shrink-0 text-blue-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 4v16m8-8H4"
								/>
							</svg>

							<h1 class="mx-4 text-xl text-gray-700 ">
								{answers.title}
							</h1>
						</button>

						<div class="mt-8 flex md:mx-10">
							<span class="border border-blue-500" />

							<p class="max-w-3xl px-4 text-gray-500 ">
								{answers.desc}
							</p>
						</div>
					</div>

					<hr class="my-8 border-gray-200 " />
				{/each}
			</div>
		</div>
	</div>
</section>
