<script>
	const testimonials = [
		{
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			img: 'https://cdn4.iconfinder.com/data/icons/bold-line-color-v2/512/man_user_avatar_male_human-1024.png',
			organisation: 'Lorem ipsum is',
			position: 'Lorem ipsum is'
		},
		{
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			img: 'https://cdn4.iconfinder.com/data/icons/bold-line-color-v2/512/man_user_avatar_male_human-1024.png',
			organisation: 'Lorem ipsum is',
			position: 'Lorem ipsum is'
		},
		{
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			img: 'https://cdn4.iconfinder.com/data/icons/bold-line-color-v2/512/man_user_avatar_male_human-1024.png',
			organisation: 'Lorem ipsum is',
			position: 'Lorem ipsum is'
		}
	];
</script>

<section class="bg-white ">
	<div class="mx-auto max-w-6xl px-6 py-10">
		<p class="text-xl font-medium text-blue-500 ">Testimonials</p>

		<h1 class="mt-2 text-2xl font-semibold capitalize text-gray-800 lg:text-3xl">
			What clients saying
		</h1>

		<main class="relative z-20 mt-8 w-full md:flex md:items-center xl:mt-12">
			<div class="absolute -z-10 w-full rounded-2xl bg-blue-600 md:h-96" />

			<div
				class="w-full rounded-2xl bg-blue-600 p-6 md:flex md:items-center md:justify-evenly md:bg-transparent md:p-0 lg:px-12"
			>
				<img
					class="h-24 w-24 rounded-full object-cover shadow-md md:mx-6 md:h-[32rem] md:w-80 md:rounded-2xl lg:h-[36rem] lg:w-[26rem]"
					src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
					alt="client photo"
				/>

				<div class="mt-2 md:mx-6">
					<div>
						<p class="text-xl font-medium tracking-tight text-white">Ema Watson</p>
						<p class="text-blue-200 ">Marketing Manager at Stech</p>
					</div>

					<p class="mt-4 text-lg leading-relaxed text-white md:text-xl">
						“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus
						libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus
						assumenda”.
					</p>

					<div class="mt-6 flex items-center justify-between md:justify-start">
						<button
							title="left arrow"
							class="rounded-full border p-2 text-white transition-colors duration-300 hover:bg-blue-400 rtl:-scale-x-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
							</svg>
						</button>

						<button
							title="right arrow"
							class="rounded-full border p-2 text-white transition-colors duration-300 hover:bg-blue-400 rtl:-scale-x-100 md:mx-6"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</main>
	</div>
</section>

<!--
<section>
	<div class="relative mx-auto w-full max-w-7xl items-center px-5 py-12 md:px-12 lg:px-24">
		<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
			{#each testimonials as testimonial}
				<div class="flex w-full max-w-lg flex-col rounded-xl p-8 text-left shadow-2xl lg:mx-auto">
					<p class="mx-auto text-base leading-relaxed text-gray-500">
						{testimonial.desc}
					</p>
					<h2 class="mt-4 text-xs font-semibold uppercase tracking-widest text-blue-500">
						{testimonial.organisation}
						<span href="#" class="font-semibold text-gray-200 lg:mb-0">{testimonial.position}</span>
					</h2>
					<img
						alt="testimonial"
						class="mt-8 inline-block h-20 w-20 rounded-full object-cover object-center"
						src={testimonial.img}
					/>
				</div>
			{/each}
		</div>
	</div>
</section> -->
