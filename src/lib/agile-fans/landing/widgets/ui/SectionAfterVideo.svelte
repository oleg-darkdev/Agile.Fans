<script>
	export let productData;
</script>

<section class="min-h-screen">
	<div
		class="mix-blend-mode  mt-[4%]  flex w-full flex-col items-center justify-center text-center"
	>
		<nav class="mb-12 w-auto">
			<ul
				class="mt-4 flex flex-col rounded-lg p-4   md:mt-0 md:flex-row md:space-x-8 md:border-0  md:p-0 "
			>
				{#each productData.headerLinks as link}
					<li>
						<a
							href={link.link}
							class="block rounded  py-2 pl-3 pr-4 text-lg font-bold  text-white hover:text-pink-600 md:p-0"
							>{link.title}</a
						>
					</li>
				{/each}
			</ul>
		</nav>
		<h2
			class="max-w-5xl text-center text-4xl font-bold leading-none tracking-tighter text-neutral-50 md:text-5xl lg:max-w-7xl lg:text-6xl"
		>
			Witamy w <span class="font-black text-pink-500">#Agile.fans</span>
		</h2>

		<!-- <p class=" mx-auto mt-8 max-w-xl text-center text-2xl  leading-relaxed text-gray-200">
			Przyspieszanie globalnego procesu przechodzenia na zrównoważone źródła energii
		</p>

		<a
			class="text-1xl mx-auto mt-8 font-semibold text-pink-600 hover:text-neutral-50"
			title="read more"
		>
			Read more about the offer »
		</a> -->
	</div>

	<div class="mt-[24%] flex w-full justify-center ">
		<div class="stats shadow">
			<div style="" class="mix-blend-mode stat">
				<div class="stat-figure text-primary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-8 w-8 stroke-pink-600"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
						/></svg
					>
				</div>
				<div class="stat-title text-white">Lorem impsum</div>
				<div class="stat-value text-pink-600">25.6K</div>
				<div class="stat-desc text-neutral-100">Lorem impsum textarea</div>
			</div>

			<div style="" class="mix-blend-mode stat">
				<div class="stat-figure text-secondary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-8 w-8 stroke-pink-500"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 10V3L4 14h7v7l9-11h-7z"
						/></svg
					>
				</div>
				<div class="stat-title text-white">Lorem impsum</div>
				<div class="stat-value text-white">25.6K</div>
				<div class="stat-desc text-neutral-100">Lorem impsum textarea</div>
			</div>

			<div style="" class="mix-blend-mode stat">
				<div class="stat-figure text-primary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-8 w-8 stroke-pink-500"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
						/></svg
					>
				</div>
				<div class="stat-title text-white">Lorem impsum</div>
				<div class="stat-value text-pink-600">25.6K</div>
				<div class="stat-desc text-neutral-100">Lorem impsum textarea</div>
			</div>
		</div>
	</div>
</section>


<style>
  .mix-blend-mode {
		mix-blend-mode: screen;
	}
</style>
