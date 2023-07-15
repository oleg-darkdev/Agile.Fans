<script>
	export let faq;
</script>

<section class="min-h-screen  bg-white py-6 sm:py-8 lg:py-12">
	<div class="mx-auto max-w-screen-xl px-4 md:px-8">
		<div class="mb-8">
			<h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
				Odpowiedzi na najczęściej zadawane pytania
			</h2>

			<p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
				This is a section of some simple filler text, also known as placeholder text. It shares some
				characteristics of a real written text but is random or otherwise generated.
			</p>
		</div>
		<a name="faq" />

		<div class="grid gap-4 sm:grid-cols-2 md:gap-8">
			{#each faq.content as data}
				<div class="rounded-lg bg-pink-500 p-5">
					<div class="mb-4 flex items-center justify-between gap-4 border-b pb-4">
						<h3 class="font-semibold text-white sm:text-lg md:text-xl">
							{data.title}
						</h3>

						<span
							class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
									clip-rule="evenodd"
								/>
							</svg>
						</span>
					</div>
					{#each data.desc as description}
						<p class="text-gray-100">
							{@html description}
						</p>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</section>
