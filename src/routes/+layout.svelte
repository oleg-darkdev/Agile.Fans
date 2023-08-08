<script>
	import '../app.css';
	// import 'aos/dist/aos.css';
	// import AOS from 'aos';
	// import { onMount } from 'svelte';
	// onMount(() => {
	// 	AOS.init();
	// });
	export let data;
</script>


<main class="min-h-full">
	<!--  -->
	<slot />
</main>

<style>
	@media (max-width: 640px) {
		:global(.hidden-sm) {
			display: none;
		}
	}
</style>
