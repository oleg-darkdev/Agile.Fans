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
		},
	];
</script>

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
</section>
