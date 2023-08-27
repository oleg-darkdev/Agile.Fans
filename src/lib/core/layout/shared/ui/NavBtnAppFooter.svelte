<script>
	export let text, activeScreen;
</script>

<!-- <button  on:click class={text === activeScreen? 'active bg-black': ''}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-5 w-5"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<slot />
	</svg>
	<span class="btn-nav-label">{text}</span>
</button> -->

<button on:click class="{text === activeScreen ? 'active bg-black' : ''} w-16 rounded-lg lg:px-4 px-2 py-2 my-2">
	<slot />
	<span class="lg:display hidden md:display btn-nav-label">{text}</span>
</button>
