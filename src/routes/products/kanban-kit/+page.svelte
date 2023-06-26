<script>
	import { Description, Hero, Logos, ProductsList } from '../../../lib/agile-fans/landing/widgets';

	import {
		Contact,
		Header,
		Product,
		Video,
		StickyBanner,
		FAQ,
		Price,
		Reviews,
		Stats,
		Cookie
	} from '../../../lib/core/layout/widgets';

	import { FeaturesForStats } from '../../../lib/core/layout/entities';

	import { productsList } from '../../../lib/core/data';
	import { convertObjToArray } from '../../../lib/core/utils';

	const arrayOfProducts = convertObjToArray(productsList),
		productData = productsList.agileKit;
</script>

<StickyBanner {productData} />

<Header {productData} />

<Hero {productData}>
	<div class="mt-0 max-w-7xl flex-col sm:flex lg:mt-6">
		<div class="text-md ">
			<!-- <p class="-mb-1 text-left font-bold leading-relaxed text-neutral-100 ">List of games</p>? -->

			<ProductsList productsList={arrayOfProducts} />
		</div>
	</div>
</Hero>

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
