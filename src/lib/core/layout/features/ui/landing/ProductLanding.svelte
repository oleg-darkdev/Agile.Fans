<script>
	import { Features } from '../../../../../action-delegation/landing/widgets';

	import {
		Contact,
		FreeDownload,
		ProductVariants,
		Header,
		Video,
		FaqProduct,
		CallToWorkshop,
		AboutProduct,
		Reviews,
		HeroProduct,
		HeaderBottomLine,
		StickyBanner,
		Footer,
		Stats,
		Cookie
	} from '../../../../../core/layout/widgets';

	export let productData;
</script>

<Header {productData} />

<StickyBanner {productData} />

<Cookie />

<HeroProduct shortDesc={productData.shortDesc} />

<Features features={productData.features} />

<AboutProduct about={productData.about} title={productData.shortDesc.title} />

<slot />

<CallToWorkshop />

<Video link={productData.shortDesc.video} />
<Reviews feedback={productData.feedback} />

<ProductVariants
	title="Warianty produktu"
	productVariants={productData.variants}
	mainProduct={productData.shortDesc.title}
/>

<FreeDownload translates={productData.shortDesc.translates} />

<FaqProduct faq={productData.faq} />

<Contact />

<Footer />
