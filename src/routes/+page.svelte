<script>
	// почистить файл импортов agile.fans

	import { Features, Description, Price, Product, Hero, Logos } from '../lib/agile.fans/widgets';
	// 		FreeDownload,

	import { Contact, FAQ, Header, Footer, Reviews, Stats, Cookie } from '../lib/core/layout/widgets';

	import { productsList } from '../lib/core/data';
	import { convertObjToArray } from '../lib/core/utils';

	let arrayOfProducts = convertObjToArray(productsList);

	const productData = productsList.agileFans;

	// console.log(productsList);
	// порефакторить, оставить прямые импорты где это необходимо, или динамические
</script>

<Header {productData} />

<Hero {productData} />
<Logos />

<Cookie />

<a name="about" />
<Description />
<!-- {arrayOfProducts}
 -->

 <Stats stats={productData.stats} />

<a name="features" />
<Features />

<!-- <Product {product} /> -->
<!-- {#each products as product} -->
<!-- <Product {product} />
{/each} -->

<a name="price" />

<Price />
<Reviews />

<a name="faq" />
<FAQ />

<a name="contact" />
<Contact {productData} />

<Footer {productData} {arrayOfProducts} />
