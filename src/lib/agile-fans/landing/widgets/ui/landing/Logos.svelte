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
		}
	];
</script>

<!-- mb-32 text-center my-24 mx-auto md:px-6 -->
<section class="container mb-8 bg-gray-200 rounded-lg py-16">
	<div class="py-12 md:px-12">
		<div class="container mx-auto xl:pr-32">
			<div class="flex grid items-center lg:grid-cols-2">
				<div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
					<div
						class="relative z-[1] block rounded-lg bg-[hsla(0,0%,5%,0.55)] px-6 py-12 shadow-black/20 backdrop-blur-[30px] md:px-12 lg:-mr-14"
					>
						<h2 class="mb-16 text-3xl font-bold">
							Trusted by the best companies <br />
							<span class="">around the world</span>
						</h2>
						<div class="grid gap-x-6 md:grid-cols-2">
							<!-- <div class="mb-12">
								<img
									src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/logo2-1.png"
									class="neutralscale px-6"
								/>
							</div> -->
							{#each clients as client}
								<div class="mb-12">
									<img
										class="neutralscale mx-auto px-6 "
										src="https://d33wubrfki0l68.cloudfront.net/07ddf740e29509004147c6a83c09f299366546c9/03a26/images/logos/logofive.svg"
										alt="Invision"
									/>
								</div>
							{/each}
						</div>
					</div>
				</div>
				<div class="md:mb-12 lg:mb-0">
					<img
						src="https://mdbcdn.b-cdn.net/img/new/textures/full/166.jpg"
						class="w-full rounded-lg shadow-lg dark:shadow-black/20"
						alt="image"
					/>
				</div>
			</div>
		</div>
	</div>
	<!-- <div class=" mx-auto px-5  lg:px-16">
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
	</div> -->
</section>
