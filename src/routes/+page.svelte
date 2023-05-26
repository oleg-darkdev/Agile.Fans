<script>
	import { Features, Description, Price, Product, Hero, Logos } from '../lib/agile-fans/widgets';

	import {
		Contact,
		FreeDownload,
		FAQ,
		Header,
		Footer,
		Reviews,
		Stats,
		Cookie
	} from '../lib/core/layout/widgets';

	import { productsList } from '../lib/core/data';
	import { convertObjToArray } from '../lib/core/utils';

	const arrayOfProducts = convertObjToArray(productsList),
		productData = productsList.agileFans;


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
<Contact  />

<Footer {productData} {arrayOfProducts} />
