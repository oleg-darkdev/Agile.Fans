<script>
	const translates = [
		{
			lang: 'English',
			link: ''
		},
		{
			lang: 'Polish',
			link: ''
		},
		{
			lang: 'Russian',
			link: ''
		},
		{
			lang: 'Ukrainian',
			link: ''
		},
		{
			lang: 'German',
			link: ''
		},
		{
			lang: 'French',
			link: ''
		},
		{
			lang: 'Spanish',
			link: ''
		}
	];
</script>

<section
	class=" md:rounded-xl md:bg-blue-600 lg:mx-20 md:mx-16 md:py-12 lg:my-12 lg:my-24 lg:rounded-xl lg:bg-blue-600 "
>
	<div class="px-5 pb-24 lg:mx-0">
		<div
			class="shadow-long mx-auto mb-10 flex w-full max-w-6xl flex-col items-center justify-center overflow-hidden rounded-xl bg-gray-50 px-6 py-16 lg:px-12 lg:py-12"
		>
			<div
				class="flex w-full flex-col items-center justify-start space-y-8 text-center lg:flex-row lg:justify-between lg:space-y-0 lg:text-left"
			>
				<div class="lg:max-w-xl">
					<h2
						class="mx-auto max-w-5xl pb-4 text-3xl font-bold leading-none tracking-tighter text-neutral-600 sm:text-3xl"
					>
						You can get a set of educational boardgames and access to web applications
						<span class="ml-4 font-bold">
							<span class="text-blue-500"> FREE </span>
						</span>
					</h2>
				</div>
				<div class="flex justify-start lg:mt-2">
					<a
						href="#price"
						class="block w-full transform items-center rounded-xl border-2 border-white bg-blue-600 px-10 py-3.5 text-center text-base font-medium text-white shadow-md transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
					>
						Download
					</a>
				</div>
			</div>
		</div>

		<div
			class="shadow-long mx-auto flex w-full max-w-2xl flex-col items-center justify-center overflow-hidden rounded-xl bg-gray-50 px-6 py-16 lg:px-12 lg:py-12"
		>
			<p class="text-center text-gray-600 ">
				In our shop this game are available in English. If you require another language you can
				download them for free, print and cut yourself.
			</p>

			<p class="my-4 text-center text-gray-600">
				Currently the following languages and formats are available for download:
			</p>
			<div class="grid gap-x-6 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
				{#each translates as translate}
					<div class="mb-4">
						<a href={translate.link} class="hover:text-blue-600 hover:text-bold hover:border-blue-600 border-b-2 border-white flex items-center text-gray-600">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								class="mr-3 h-5 w-5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M4.5 12.75l6 6 9-13.5"
								/></svg
							>{translate.lang}
						</a>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
