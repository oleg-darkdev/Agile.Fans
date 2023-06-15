<script>
	import { ShowFullListBtn } from '../../lib/core/layout/shared';
	import { FeaturesForProductType } from '../../lib/core/layout/entities';
	import { Features } from '../../lib/action-delegation/landing/widgets';
	import cards from '../../lib/health-check/cards';

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
		StickyBanner,
		Header,
		Cookie
	} from '../../lib/core/layout/widgets';

	$: showFullList = true;

	import { productsList } from '../../lib/core/data';
	const productData = productsList.healthCheck;

	const steps = [
		'Create your board',
		'Share the unique link with your team',
		'Evaluate the health of the team',
		'Use the results as a conversation starter'
	];
</script>

<!--
Teoria stopniej delegowania

Warsztaty
Prices
FAQ
Contact -->

<!--
  ToDo:

  В виде формы сделать - и данные передаются в таблицу?
  https://teamhealthcheck.io/about
 -->

<StickyBanner {productData} />

<Header {productData} />

<HeaderBottomLine />

<Cookie />

<HeroProduct shortDesc={productData.shortDesc} />
<!-- Health Check - How is your team feeling? -->
<!-- A free, anonymous, and super simple tool to run a version of the Spotify Health Check Survey. -->

<Features features={productData.features} />

<!-- <Stats stats={productData.stats} /> -->
<AboutProduct about={productData.about} title={productData.shortDesc.title}>
	<h2
		class="mb-2 mt-4 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left"
	>
		Steps for starting
	</h2>
	<ol class="mb-4">
		{#each steps as step, i}
			<li class="text-center font-medium text-gray-500 md:text-left">
				<span class="font-medium text-gray-500">{i}.</span>
				{step}
			</li>
		{/each}
	</ol>
</AboutProduct>

<!--

All answers are anonymous, and no login is required.

You can create an account to organize the different polls from your team. Still, no login is required from your team. -->
<section class="mb-12 flex flex-col items-center justify-center">
	<div class="mx-auto grid max-w-5xl gap-5  lg:grid-cols-3">
		{#each cards as card}
			<div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
				<div class="flex-shrink-0">
					<img class="h-48 w-full object-cover" src={card.icon} alt={card.title} />
				</div>
				<div class="flex flex-1 flex-col justify-between bg-white p-6">
					<div class="flex-1">
						<a href="#" class="mt-2 block">
							<h4 class="text-xl font-semibold text-neutral-600">{card.title}</h4>
							<div class="mt-3 ">
								<div class="badge-success  badge-outline badge">positive</div>
								<p class="text-base text-gray-500">
									{card.positive}
								</p>
							</div>
							<div class="mt-3 ">
								<div class="badge-error badge-outline badge">negative</div>
								<p class="text-base text-gray-500">
									{card.negative}
								</p>
							</div>
						</a>
					</div>
					<!-- <div class="mt-6 flex items-center">
					<div class="flex-shrink-0">
						<a href="https://twitter.com/Mike_Andreuzza">
							<span class="sr-only">Michael Andreuzza</span>
							<img
								class="h-10 w-10 rounded-full"
								src="https://d33wubrfki0l68.cloudfront.net/2f76102fd18a4e095eaed7a836a3f2183a982a4d/91dd4/images/avatar.jpg"
								alt=""
							/>
						</a>
					</div>
					<div class="ml-3">
						<p class="text-sm font-medium text-neutral-600">
							<a href="https://twitter.com/Mike_Andreuzza" class="hover:underline">
								Michaerl Andreuzza</a
							>
						</p>
						<div class="flex space-x-1 text-sm text-gray-500">
							<time datetime="2020-03-16"> Mar 16, 2020 </time>
							<span aria-hidden="true"> · </span>
							<span> 6 min read </span>
						</div>
					</div>
				</div> -->
				</div>
			</div>
		{/each}
	</div>
</section>

<CallToWorkshop />

<Reviews feedback={productData.feedback} />

<ProductVariants>
	<FeaturesForProductType />
</ProductVariants>

<FaqProduct faq={productData.faq} />

<Contact />
