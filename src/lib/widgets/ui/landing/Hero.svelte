<script>
	import { products } from '../../../shared/';
</script>

<section>
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-12 lg:px-24 lg:py-24">
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
					Lorem ipsum is placeholder text commonly.
				</h1>
				<p class="mb-8 text-left text-base leading-relaxed text-gray-500">
					Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
				</p>
				<div class="mt-0 max-w-7xl flex-col sm:flex lg:mt-6">
					<div class="prose-md prose">
						<ul>
							{#each products as product}
								<li class="">
                  <a class="text-gray-500 text-underline hover:text-blue-500" href={product.link}>{product.title}</a>
                </li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
