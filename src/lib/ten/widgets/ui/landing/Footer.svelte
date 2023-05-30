<script>
	import { motivatorsList, fearsList } from '../../../shared/';
</script>

<footer class=" bg-gray-50" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>

	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-16">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="text-white xl:col-span-1">
				<a
					href="./index.html"
					class="tracking-relaxed transform text-lg font-bold tracking-tighter text-blue-600 transition duration-500 ease-in-out lg:pr-8"
				>
					wickedblocks
				</a>
				<p class="mt-2 w-1/2 text-sm text-gray-500">Wicked templates for wicked dev's</p>
			</div>
			<div class="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm font-bold uppercase tracking-wider text-blue-500">Motivators</h3>
						<ul role="list" class="mt-4 space-y-2">
							{#each motivatorsList as motivation}
								<li>
									<a
										href={motivation.link}
										class="text-base font-normal text-gray-500 hover:text-blue-600"
									>
										{motivation.title}
									</a>
								</li>
							{/each}
						</ul>
					</div>
					<div class="mt-12 md:mt-0">
						<h3 class="text-sm font-bold uppercase tracking-wider text-blue-500">Fears</h3>
						<ul role="list" class="mt-4 space-y-2">
							{#each fearsList as fear}
								<li>
									<a
										href={fear.link}
										class="text-base font-normal text-gray-500 hover:text-blue-600"
									>
										{fear.title}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				</div>
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm font-bold uppercase tracking-wider text-blue-500">Things</h3>
						<ul role="list" class="mt-4 space-y-2">
							<li>
								<a
									href="./changelog.html"
									class="text-base font-normal text-gray-500 hover:text-blue-600"
								>
									Changelog
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- <div class="mx-auto max-w-7xl bg-gray-50 px-4 py-12 sm:px-6 lg:px-16">
		<div class="flex flex-wrap items-baseline">
			<span class="mt-2 text-sm font-light text-gray-500">
				Copyright © 2020 - 2021
				<a
					href="https://wickedlabs.dev"
					class="text-wickedblue mx-2 hover:text-gray-500"
					rel="noopener noreferrer">@wickedlabsHQ</a
				>. Since 2020
			</span>
		</div>
	</div> -->
</footer>
