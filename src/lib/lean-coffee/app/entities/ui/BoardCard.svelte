<script>
	export let card;
</script>

<div
	class="group relative mt-1 flex w-80 cursor-pointer flex-col  items-start overflow-visible rounded-lg bg-white bg-opacity-90 p-4 hover:bg-opacity-100"
	draggable="true"
>
	<button
		class="absolute top-0 right-0 mt-3 mr-2 flex hidden h-5 w-5 items-center justify-center rounded text-gray-500 hover:bg-gray-200 hover:text-gray-700 group-hover:flex"
	>
		<svg
			class="h-4 w-4 fill-current"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
			/>
		</svg>
	</button>

	<h4 class="text-lg font-medium ">
		{card.title}
	</h4>
	<p class="font-sm mb-2 text-sm text-gray-500">{card.desc}</p>
	<div
		class="hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 mx-auto inline-flex  items-center rounded-md  transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
		role="group"
	>
		<button
			type="button"
			class="hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 inline-block rounded-l bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0"
			data-te-ripple-init
			data-te-ripple-color="light"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-white" viewBox="0 0 448 512"
				><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
					d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
				/></svg
			>
		</button>
		<!-- <button
			type="button"
			class="hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 inline-block bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0"
			data-te-ripple-init
			data-te-ripple-color="light"
		>
			Middle
		</button> -->
		<button
			type="button"
			class="hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 inline-block rounded-r bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0"
			data-te-ripple-init
			data-te-ripple-color="light"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-white" viewBox="0 0 448 512"
				><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
					d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
				/></svg
			>
		</button>
	</div>
</div>

<!-- <span
						class="flex h-6 items-center rounded-full bg-green-100 px-3 text-xs font-semibold text-green-500"
						>Dev</span
					> -->
