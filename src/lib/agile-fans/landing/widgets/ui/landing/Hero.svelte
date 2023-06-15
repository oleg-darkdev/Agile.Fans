<script>
	import { products } from '../../../shared/';

	export let productData;
</script>

<!--
<section>
	<div
		class="relative grid h-96 w-full place-items-center bg-gradient-to-t from-blue-200 via-blue-400 to-blue-500 lg:h-[20rem]"
	>
		<div class="mx-auto flex flex-col items-center text-center">
			<h1 class="text-4xl font-black  uppercase text-white md:text-6xl">
				Welcome to {productData.shortDesc.title}
			</h1>

			<p class="mt-6 text-lg leading-5 text-white">{productData.shortDesc.synopsis}</p>

			<a href="#about" class="mt-8 animate-bounce cursor-pointer">
				<svg
					width="53"
					height="53"
					viewBox="0 0 53 53"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="27" cy="26" r="18" stroke="white" stroke-width="2" />
					<path
						d="M22.41 23.2875L27 27.8675L31.59 23.2875L33 24.6975L27 30.6975L21 24.6975L22.41 23.2875Z"
						fill="white"
					/>
				</svg>
			</a>
		</div>
	</div>

	<svg class="fill-blue-200 " viewBox="0 0 1440 57" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M1440 0H0V57C720 0 1440 57 1440 57V0Z" />
	</svg>
</section> -->

<section class="container mx-auto flex  justify-center md:px-6">
	<div class="mb-12 max-w-6xl md:my-24 lg:my-24">
		<div
			class="relative h-screen overflow-hidden bg-[url('https://ibvsolutions.com/wp-content/uploads/2019/02/Kanban-on-Screen-781x512.jpg')] bg-cover bg-[50%] bg-no-repeat md:h-[400px] md:rounded-lg lg:h-[400px] lg:rounded-lg"
		/>
		<div class="container mx-auto px-6 md:px-12 xl:px-32">
			<div class="text-center">
				<div
					class="-mt-[450px] block rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 py-12 shadow-black/20 backdrop-blur-[30px] md:mt-[-170px] md:px-6  md:py-16  md:px-12 lg:mt-[-170px] lg:px-6"
				>
					<h1 class="font-md mb-8 text-4xl tracking-tight text-white md:text-6xl lg:text-7xl">
						A new era in educational boardgames for your <br /><span class="font-black"
							>business, NGO, or community.</span
						>
					</h1>
					<a
						href="#about"
						class=" rounded-lg border-2 border-neutral-50 bg-blue-600 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
					>
						Read more
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="py-4 sm:px-6 md:px-4 md:px-12 lg:px-4 lg:px-24 lg:py-12">
	<div class="grid items-center md:mx-8 lg:mx-8 lg:grid-cols-2">
		<div class="hidden-sm">
			<img
				alt="Agile.fans - banner"
				src="https://www.giftedguru.com/wp-content/uploads/2020/10/kanban-board-nearly-done-888x1024.jpg"
				class="fancy-border-radius rotate-lg-6 w-full  rounded-2xl shadow-lg shadow-black/20"
			/>
		</div>
		<div
			class="relative z-[1] block lg:rounded-lg md:rounded-lg bg-gradient-to-r from-blue-500  to-blue-700 px-6 py-12 shadow-black/20 md:px-12 lg:-ml-14"
		>
			<span class="text-xs font-bold uppercase tracking-widest text-neutral-100"> about </span>
			<h1
				class="mb-4 text-4xl font-bold leading-none tracking-tighter text-white md:text-7xl lg:text-5xl"
			>
				{productData.shortDesc.title}: One goal - more tools.
			</h1>
			<p class="mb-2 max-w-2xl text-left leading-relaxed text-neutral-100 ">
				A new era in hybrid board educational boardgames. An exceptional combination of the better
				of educational board games and technology. Connecting board games with electronics and
				related applications - making it much easier for players to learn and improve their
				performance.
			</p>
			<p class="mb-2 max-w-2xl text-left leading-relaxed text-neutral-100 ">
				We've created the best game practices in one product to solve every possible problem.
			</p>

			<div class="mt-0 max-w-7xl flex-col sm:flex lg:mt-6">
				<div class="prose-md prose">
					<p class="-mb-4 text-left font-bold leading-relaxed text-neutral-100 ">List of games</p>
					<ul>
						{#each products as product}
							<li
								data-popover-target="popover-right"
								data-popover-trigger="hover"
								data-popover-placement="right"
								class=""
							>
								<a
									class="text-underline text-neutral-100 hover:text-blue-300"
									target="_blank"
									href="/{product.link}">{product.title}</a
								>
							</li>
							<div
								data-popover
								id="popover-right"
								role="tooltip"
								class="invisible absolute z-10 inline-block w-64 rounded-lg border border-gray-200 bg-white text-sm text-gray-500 opacity-0 shadow-sm transition-opacity duration-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
							>
								<div
									class="rounded-t-lg border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700"
								>
									<h3 class="font-semibold text-gray-900 dark:text-white">Popover right</h3>
								</div>
								<div class="px-3 py-2">
									<p>And here's some amazing content. It's very engaging. Right?</p>
								</div>
								<div data-popper-arrow />
							</div>
						{/each}
					</ul>
				</div>
			</div>
		</div>
		<!-- </div> -->
	</div>
</section>
