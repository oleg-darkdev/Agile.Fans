<script>
	export let shortDesc;
</script>

<section class='pt-12'>
	<div class="mx-auto  max-w-7xl px-4 pt-12 sm:px-6 md:px-12 lg:px-24 ">
		<div class=" flex w-full flex-col items-center text-center">
			<h1
				class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:max-w-3xl lg:text-6xl"
			>
				{shortDesc.title}
			</h1>

			<p class="mx-auto mt-2 max-w-xl text-center text-base leading-relaxed text-gray-500">
				{shortDesc.text}
			</p>
			<button
				class="mt-4 mb-2 max-w-md rounded-lg bg-blue-600 px-5 py-4 text-center text-sm font-medium capitalize leading-5 text-white hover:bg-blue-500 focus:outline-none lg:mx-0 lg:w-auto"
			>
				Start 14-Day free trial
			</button>
			<a
				class="mx-auto text-sm font-semibold text-blue-600 hover:text-neutral-600"
				title="read more"
			>
				No credit card required - read more about the offer »
			</a>
		</div>

		<div class="mt-10 flex justify-center">
			<img class="h-96 w-full rounded-xl object-cover lg:w-4/5" src={shortDesc.banner} />
		</div>
	</div>
</section>
