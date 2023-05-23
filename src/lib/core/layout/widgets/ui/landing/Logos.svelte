<script>
	const clients = [
		{
			title: '',
			link: '',
			href: '',
			img: ''
		},
		{
			title: '',
			link: '',
			href: '',
			img: ''
		},
		{
			title: '',
			link: '',
			href: '',
			img: ''
		},
		{
			title: '',
			link: '',
			href: '',
			img: ''
		},
		{
			title: '',
			link: '',
			href: '',
			img: ''
		},
	];
</script>

<section class="mb-8 bg-gray-200 py-16">
	<div class=" mx-auto px-5  lg:px-16">
		<div class="mb-8 flex w-full flex-col text-center">
			<span class="mb-4 text-sm font-medium uppercase tracking-wide text-gray-600">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
				<a
					href="https://www.wickedtemplates.com/expo.html"
					class="font-semibold text-blue-600 hover:text-blue-500 lg:mb-0">Our customers »</a
				>
			</span>
		</div>
		<div class="mx-auto text-center">
			<div class="mx-auto grid grid-cols-5 gap-4 lg:grid-cols-5">
				{#each clients as client}
					<div>
						<img
							class="mx-auto h-4 lg:h-12"
							src="https://d33wubrfki0l68.cloudfront.net/07ddf740e29509004147c6a83c09f299366546c9/03a26/images/logos/logofive.svg"
							alt="Invision"
						/>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
