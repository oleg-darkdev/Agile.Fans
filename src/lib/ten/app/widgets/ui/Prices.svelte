<script>
	const premiumPriceList = [
			'Lorem impsum',
			'Lorem impsum',
			'Lorem impsum',
			'Lorem impsum',
			'Lorem impsum',
			'Lorem impsum'
		],
		basePriceList = ['Lorem impsum', 'Lorem impsum', 'Lorem impsum'];
</script>

<section class="">
	<div class="relative mx-auto w-full max-w-7xl items-center py-24 md:px-12 lg:px-16">
		<div class="mx-auto flex w-full flex-wrap items-start justify-center gap-4 px-5 lg:px-0">
			<div class="w-full md:text-center lg:w-2/6 lg:text-left xl:w-1/3">
				<div class="flex flex-col p-8 lg:p-0">
					<strong class="mb-1 text-xs font-semibold uppercase tracking-widest text-blue-500">
						Safe payments with Gumroad
					</strong>
					<span class="tracking-relaxed mb-8 text-2xl font-bold text-neutral-600 lg:text-5xl">
						Pricing
					</span>
					<p class="mx-auto mb-4 text-xl font-light text-gray-500 text-opacity-70 lg:pr-10">
						Lorem ipsum is placeholder text commonly used in the graphic.
					</p>
					<p class="mx-auto mb-2 text-xl font-light text-gray-500 text-opacity-70 lg:pr-10">
						Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
						industries for previewing layouts and visual mockups.
					</p>
				</div>
			</div>
			<div class="w-full md:w-2/6 xl:w-1/4">
				<div class="relative flex h-full flex-col rounded-xl bg-gray-50 p-8 hover:border-white">
					<span class="mb-4 text-base font-medium uppercase tracking-widest text-neutral-600">
						Starter
					</span>
					<span
						class="mb-8 flex items-center text-base font-medium tracking-tight text-neutral-600"
					>
						Try and decide.
					</span>
					<div class="flex items-end text-3xl font-black leading-none text-neutral-600 lg:text-4xl">
						<span>$0 </span>
					</div>
					<ul>
						{#each basePriceList as item}
							<li
								class="mt-1 mb-2 flex items-center text-base font-medium tracking-tight text-neutral-600"
							>
								<span
									class="mr-2 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center text-neutral-600"
								>
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2.5"
										class="h-3 w-3"
										viewBox="0 0 24 24"
									>
										<path d="M20 6L9 17l-5-5" />
									</svg>
								</span>
								<strong>{item}</strong>
							</li>
						{/each}
					</ul>

					<div class="mt-8">
						<button
							class="block w-full transform items-center rounded-xl border-2 border-white bg-white px-10 py-3.5 text-center text-base font-medium text-blue-600 shadow-md transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
							>Download</button
						>
					</div>
				</div>
			</div>
			<div class="w-full md:w-2/6 xl:w-1/4">
				<div class="relative flex h-full flex-col rounded-xl bg-blue-600 p-8 hover:border-white">
					<span class="mb-4 text-base font-medium uppercase tracking-widest text-white">
						Bundle
					</span>
					<span class="mb-8 flex items-center text-base font-medium tracking-tight text-white">
						No need to subscribe
					</span>
					<div class="flex items-end text-3xl font-black leading-none text-white lg:text-4xl">
						<span>
							<span>$69</span>
							<del class="text-2xl font-normal text-white">$149</del>
						</span>
					</div>
					<ul>
						{#each premiumPriceList as item}
							<li
								class="mt-1 mb-2 flex items-center text-base font-medium tracking-tight text-white"
							>
								<span
									class="mr-2 inline-flex  w-5 flex-shrink-0 items-center justify-center text-white"
								>
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2.5"
										class="h-3 w-3"
										viewBox="0 0 24 24"
									>
										<path d="M20 6L9 17l-5-5" />
									</svg>
								</span>
								<strong>{item}</strong>
							</li>
						{/each}
					</ul>

					<div class="mt-8">
						<button
							class="block w-full transform items-center rounded-xl border-2 border-white bg-white px-10 py-3.5 text-center text-base font-medium text-blue-600 shadow-md transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
							>Buy for $69</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
