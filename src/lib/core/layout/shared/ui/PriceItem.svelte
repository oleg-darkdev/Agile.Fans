<script>
  export let text;
</script>

<li class="mb-2 flex items-center text-base font-medium leading-relaxed text-gray-100">
	<span
		class="mr-2 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gray-50 text-white"
	>
		<svg
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2.5"
			class="stroke-blue-500 h-3 w-3"
			viewBox="0 0 24 24"
		>
			<path d="M20 6L9 17l-5-5" />
		</svg>
	</span> {text}
</li>
