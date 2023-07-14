<!--
  ToDo:
   * get product data fro, url


 -->
<script>
	import '../app.css';
	import 'aos/dist/aos.css';
	// import AOS from 'aos';
	// import { onMount } from 'svelte';
	// onMount(() => {
	// 	AOS.init();
	// });

	// import { Footer } from '../lib/core/layout/widgets';

	// import { productsList, allKit } from '../lib/core/data';

	// const productData = productsList.agileKit;
</script>


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
