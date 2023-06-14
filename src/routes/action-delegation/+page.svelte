<script>
	import { DegreeDescriptionCard } from '../../lib/action-delegation/landing/entities';
	import delegationDegrees from '../../lib/action-delegation/degreeDescription';
	import { ShowFullListBtn } from '../../lib/core/layout/shared';
	import { FeaturesForProductType } from '../../lib/core/layout/entities';
	import { Features } from '../../lib/action-delegation/landing/widgets';

	import {
		Contact,
		FreeDownload,
		ProductVariants,
		FaqProduct,
		CallToWorkshop,
		AboutProduct,
		Reviews,
		HeroProduct,
		HeaderBottomLine,
		Stats,
		Cookie
	} from '../../lib/core/layout/widgets';

	$: showFullList = true;

	import { productsList } from '../../lib/core/data';
	const productData = productsList.delegation;
</script>

<!--
Teoria stopniej delegowania
Web Aplikacja
Warsztaty
Prices
FAQ
Contact -->

<HeaderBottomLine />

<Cookie />

<HeroProduct shortDesc={productData.shortDesc} />

<Features features={productData.features} />

<!-- <Stats stats={productData.stats} /> -->
<AboutProduct about={productData.about} title={productData.shortDesc.title} />

<section class="mb-12 flex flex-col items-center justify-center">
	<div class="max-w-7xl">
		<h2
			class="max-w-5xl text-center text-4xl font-medium leading-none tracking-tighter text-neutral-600 md:text-5xl lg:max-w-4xl "
		>
			Opis etapów delegowania
		</h2>

		{#each showFullList ? delegationDegrees.splice(0, 3) : delegationDegrees as degree}
			<DegreeDescriptionCard {degree} />
		{/each}
	</div>
	<div class="mx-auto w-80">
		<ShowFullListBtn bind:showFullList />
	</div>

	<!-- <div class="embed-responsive embed-responsive-16by9 w-8/12 overflow-hidden rounded ">
			<iframe
				class="embed-responsive-item h-96 w-full rounded"
				src="https://www.youtube.com/embed/v64KOxKVLVg"
				allowfullscreen
			/>
		</div> -->
</section>

<CallToWorkshop />

<Reviews feedback={productData.feedback} />

<ProductVariants>
	<FeaturesForProductType />
</ProductVariants>

<FaqProduct faq={productData.faq} />

<Contact />
