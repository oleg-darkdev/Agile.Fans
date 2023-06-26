<script>
	import {
		Motivators,
		Subscription,
		Logos,
		Video,
		CardsMatch,
		Description
	} from '../../../lib/ten/landing/widgets';
	import { FeaturesForProductType } from '../../../lib/core/layout/entities';

	import {
		Contact,
		ProductVariants,
		FaqProduct,
		CallToWorkshop,
		AboutProduct,
		Reviews,
		Stats,
		HeaderBottomLine,
		StickyBanner,
		Header,
		Cookie,
		HeroProduct
	} from '../../../lib/core/layout/widgets';

	import { motivatorsList, fearsList } from '../../../lib/ten/app/shared';
	import { productsList } from '../../../lib/core/data';

	const productData = productsList.ten;
</script>

<Header {productData} />

<StickyBanner {productData} />

<HeaderBottomLine />

<Cookie />

<HeroProduct shortDesc={productData.shortDesc} />
<!-- <Subscription /> -->
<!-- <Logos /> -->

<AboutProduct about={productData.about} title={productData.shortDesc.title} />
<!-- motivators -->
<Description />
<Motivators />
<Video />
<CardsMatch cardList={motivatorsList} />

<!-- fears -->
<Description />
<Motivators />
<Video />
<CardsMatch cardList={fearsList} />

<CallToWorkshop />

<Reviews feedback={productData.feedback} />

<ProductVariants>
	<FeaturesForProductType />
</ProductVariants>

<FaqProduct faq={productData.faq} />

<Contact />
