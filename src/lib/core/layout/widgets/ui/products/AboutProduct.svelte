<script>
	export let about, title;
</script>

<section class="min-h-screen bg-white py-6 sm:py-8 lg:py-12">
	<div class="mx-auto max-w-screen-xl px-4 md:px-8">
		<a name="about" />
		<div class="grid gap-8 md:grid-cols-2 lg:gap-12">
			<div>
				<div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
					<img
						src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
						loading="lazy"
						alt="Photo by Martin Sanchez"
						class="h-full w-full object-cover object-center"
					/>
				</div>
			</div>

			<div class="md:pt-8">
				<p class="text-center font-bold text-indigo-500 md:text-left">Na czym polega gra</p>

				<h2
					class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left"
				>
					{title}
				</h2>

				{#each about.desc as desc}
					<p class=" text-gray-500 sm:text-lg ">
						{desc}
					</p>
				{/each}

				<slot />

				<h2
					class="mb-2 mt-4 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left"
				>
					O autorze gry
				</h2>

				<p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
					{about.author}
				</p>
			</div>
		</div>
	</div>
</section>
