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

	import { Header, Footer, StickyBanner } from '../lib/core/layout/widgets';

	import { productsList } from '../lib/core/data';
	import { convertObjToArray } from '../lib/core/utils';

	const arrayOfProducts = convertObjToArray(productsList),
		productData = productsList.agileKit;
</script>

<Header {productData} />

<StickyBanner {productData}/>

<main class="">
	<slot />
</main>

<Footer {productData} {arrayOfProducts} />

<style>
</style>
