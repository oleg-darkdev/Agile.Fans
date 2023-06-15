<script>
	import { Description, Product, Hero, Logos } from '../lib/agile-fans/landing/widgets';

	import {
		Contact,
		Header,
		FreeDownload,
		Video,
		FAQ,
		Price,
		Reviews,
		Stats,
		Cookie
	} from '../lib/core/layout/widgets';

	import { FeaturesForStats } from '../lib/core/layout/entities';

	import { productsList } from '../lib/core/data';
	import { convertObjToArray } from '../lib/core/utils';

	const arrayOfProducts = convertObjToArray(productsList),
		productData = productsList.agileKit;
</script>

<Header {productData} />

<Hero {productData} />

<Cookie />

<a name="about" />
<!-- <Description /> -->
<!-- {arrayOfProducts}
 -->
<Product />

<Logos />

<Stats stats={productData.stats}>
	<FeaturesForStats features={productData.features} />
</Stats>

<Video
	link="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
/>

<!-- <Features /> -->

<!-- <Product {product} /> -->
<!-- {#each products as product} -->
<!-- <Product {product} />
{/each} -->

<Price />
<Reviews feedback={productData.feedback} />

<FAQ />

<Contact />
