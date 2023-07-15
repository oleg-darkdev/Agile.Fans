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
		Cookie,
    ProductVariants,
		Footer
	} from '../../../lib/core/layout/widgets';

	import { FeaturesForStats } from '../../../lib/core/layout/entities';

	import { productsList, kanbanKitSubProducts, allKit } from '../../../lib/core/data';
  import {extractFaqValues} from '../../../lib/core/utils';

	const productData = productsList.kanbanKit;

  const kanbanKitFaq = extractFaqValues(kanbanKitSubProducts);

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

<ProductVariants title='Zestaw produktów zawiera' productVariants={productData.variants}  mainProduct={productData.shortDesc.title}/>


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

<Price prices={productData.prices}/>
<Reviews feedback={productData.feedback} />

<FAQ productsFaq={kanbanKitFaq}/>

<Contact />

<Footer {productData} productsCategories={allKit.products} />
