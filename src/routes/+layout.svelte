<!--
  ToDo:
   * get product data fro, url


 -->
  <script lang="ts">
	import '../app.css';
	import 'aos/dist/aos.css';

	// import { invalidateAll } from '$app/navigation';
	// import { supabaseClient } from '$lib/supabase';
	// import { onMount } from 'svelte';

	// onMount(() => {
	// 	const {
	// 		data: { subscription }
	// 	} = supabaseClient.auth.onAuthStateChange(() => {
	// 		invalidateAll();
	// 	});

	// 	return () => {
	// 		subscription.unsubscribe();
	// 	};
	// });
</script>

<slot />


<main class="">
	<slot />
</main>
<!--  -->

<style>
	@media (max-width: 640px) {
		:global(.hidden-sm) {
			display: none;
		}
	}
</style>
