<script>
	import { products } from '../../../shared/';

	export let productData;
</script>

<section>
	<div
		class="relative grid h-96 w-full place-items-center bg-gradient-to-t from-blue-200 via-blue-400 to-blue-500 lg:h-[20rem]"
	>
		<div class="mx-auto flex flex-col items-center text-center">
			<h1 class="text-4xl font-black  uppercase text-white md:text-6xl">
				{productData.shortDesc.title}
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
</section>

<section>
	<div class="mx-auto max-w-7xl px-4 py-4 sm:px-6 md:px-12 lg:px-24 lg:py-12">
		<div class="mx-auto flex max-w-7xl flex-wrap items-center">
			<div class="w-full rounded-xl lg:w-1/2 lg:max-w-lg">
				<div>
					<div class="relative w-full max-w-lg">
						<div
							class="animate-blob absolute top-0 -left-4 h-72 w-72 rounded-full bg-violet-300 opacity-70 mix-blend-multiply blur-xl filter"
						/>

						<div
							class="animate-blob animation-delay-4000 absolute -bottom-24 right-20 h-72 w-72 rounded-full bg-fuchsia-300 opacity-70 mix-blend-multiply blur-xl filter"
						/>
						<div class="relative">
							<img
								class="mx-auto rounded-lg object-cover object-center shadow-2xl"
								alt="hero"
								src=""
							/>
						</div>
					</div>
				</div>
			</div>
			<div
				class="mt-12 mb-16 flex flex-col items-start text-left md:mb-0 lg:w-1/2 lg:flex-grow lg:pl-6 xl:mt-0 xl:pl-24"
			>
				<span class="mb-8 text-xs font-bold uppercase tracking-widest text-blue-600">
					Lorem impsum
				</span>
				<h1
					class="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl"
				>
					One goal - more tools.
				</h1>
				<p class="mb-2 text-left text-base leading-relaxed text-gray-500">
					Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
					industries for previewing layouts and visual mockups.
				</p>
				<div class="mt-0 max-w-7xl flex-col sm:flex lg:mt-6">
					<div class="prose-md prose">
						<ul>
							{#each products as product}
								<li class="">
									<a class="text-underline text-gray-500 hover:text-blue-500" href={product.link}
										>{product.title}</a
									>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
