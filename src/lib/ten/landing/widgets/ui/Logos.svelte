<script>
	const logosList = [
		{
			title: 'Lorem impsum',
			img: 'https://img-corp.com/images/logo@2x.png',
			link: '/'
		},
		{
			title: 'Lorem impsum',
			img: 'https://img-corp.com/images/logo@2x.png',
			link: '/'
		},
		{
			title: 'Lorem impsum',
			img: 'https://img-corp.com/images/logo@2x.png',
			link: '/'
		},
		{
			title: 'Lorem impsum',
			img: 'https://img-corp.com/images/logo@2x.png',
			link: '/'
		},
		{
			title: 'Lorem impsum',
			img: 'https://img-corp.com/images/logo@2x.png',
			link: '/'
		},
	];
</script>

<section class="bg-neutral-50">
	<div class=" mx-auto px-5 py-12 lg:px-16">
		<div class="mb-8 flex w-full flex-col text-center">
			<span class="mb-4 text-sm font-medium uppercase tracking-wide text-gray-500">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				<a
					href="https://www.wickedtemplates.com/expo.html"
					class="font-semibold text-blue-600 hover:text-blue-500 lg:mb-0">Our customers »</a
				>
			</span>
		</div>
		<div class="mx-auto text-center">
			<div class="mx-auto grid grid-cols-5 gap-4 lg:grid-cols-5">
				{#each logosList as logo}
					<div>
						<img class="mx-auto h-4 lg:h-24" src={logo.img} alt={logo.title} />
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
