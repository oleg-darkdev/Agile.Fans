<script>
	let showBanner = true;

	export let productData;
</script>

<section
	id="marketing-banner"
	tabindex="-1"
	class:hidden={showBanner == false}
	class="fixed left-1/2 top-24  z-50 flex max-w-3xl -translate-x-1/2 flex-col justify-between rounded-lg border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 md:flex-row lg:max-w-7xl"
>
	<div class="mb-3 mr-4 flex flex-col items-start md:mb-0 md:flex-row md:items-center">
		<a
			href="https://flowbite.com/"
			class="mb-2 flex items-center border-gray-200 dark:border-gray-600 md:mr-4 md:mb-0 md:border-r md:pr-4"
		>
			<img src={productData.shortDesc.logo} class="mr-2 h-10 w-auto" alt="Flowbite Logo" />
		</a>
		<p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
			The {productData.shortDesc.title} is still being developed, try the demo version
		</p>
	</div>
	<div class="flex flex-shrink-0 items-center">
		<a
			href="/demo"
			class="mr-2 rounded-lg bg-blue-700 px-5 py-2 text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>Demo</a
		>
		<button
			on:click={() => (showBanner = false)}
			data-dismiss-target="#marketing-banner"
			type="button"
			class="absolute top-2.5 right-2.5 inline-flex flex-shrink-0 items-center justify-center rounded-lg p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white md:relative md:top-auto md:right-auto"
		>
			<svg
				aria-hidden="true"
				class="h-4 w-4"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/></svg
			>
			<span class="sr-only">Close banner</span>
		</button>
	</div>
</section>
