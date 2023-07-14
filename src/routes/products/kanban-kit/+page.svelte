<script>
	import { Description, Hero, Logos, ProductsList } from '../../../lib/agile-fans/landing/widgets';

	import {
		Contact,
		Header,
		Video,
		StickyBanner,
		FAQ,
		Price,
		Reviews,
		Stats,
		Cookie
	} from '../../../lib/core/layout/widgets';

	import { FeaturesForStats } from '../../../lib/core/layout/entities';

	import { productsList, kanbanKitSubProducts } from '../../../lib/core/data';

	const productData = productsList.kanbanKit;

	// console.log(kanbanKitSubProducts);
</script>



<StickyBanner {productData} />

<Header {productData} />

<Hero {productData}>
	<div class="mt-0 max-w-7xl flex-col sm:flex lg:mt-6">
		<div class="text-md ">
			<!-- <p class="-mb-1 text-left font-bold leading-relaxed text-neutral-100 ">List of games</p>? -->

			<ProductsList productsList={kanbanKitSubProducts} />
		</div>
	</div>
</Hero>

<Cookie />

<a name="about" />
<!-- <Description products={kanbanKitSubProducts} /> -->
<!-- {arrayOfProducts}
 -->

<Logos />

<Stats stats={productData.stats}>
	<FeaturesForStats features={productData.features} />
</Stats>

<Video link={productData.shortDesc.video} />

<!-- <Features /> -->

<!-- <Product {product} /> -->
<!-- {#each products as product} -->
<!-- <Product {product} />
{/each} -->

<Price />
<Reviews feedback={productData.feedback} />

<FAQ />

<Contact />
