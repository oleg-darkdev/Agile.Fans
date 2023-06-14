<script>
	export let title, cardsLength;
</script>

<div class="flex max-w-2xl flex-shrink-0 flex-col bg-blue-500 pr-4 ">
	<div class="flex h-10 flex-shrink-0 items-center px-2">
		<span class="block text-3xl font-semibold text-white">{title}</span>
		<span
			class="ml-2 flex h-5 w-5 items-center justify-center rounded bg-white bg-opacity-30 text-sm font-semibold text-indigo-500"
			>{cardsLength}</span
		>
		<button
			class="ml-auto flex h-6 w-6 items-center justify-center rounded text-indigo-500 hover:bg-indigo-500 hover:text-indigo-100"
		>
			<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 6v6m0 0v6m0-6h6m-6 0H6"
				/>
			</svg>
		</button>
	</div>

	<div class="flex flex-col overflow-auto pb-2 pr-4">
		<slot />
	</div>
</div>
