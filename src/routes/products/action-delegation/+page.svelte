<script>
	import { DegreeDescriptionCard } from '@landingActionDelegationEntities';
	import { ShowFullListBtn } from '@coreSharedLayout';

	$: showFullList = true;

	import { ProductLanding } from '@coreFeatures';

	import { actionDelegation } from '@coreSharedData';
	const productData = actionDelegation;

	const cardsDescription = actionDelegation.cards;
</script>

<!--
  Header


Teoria stopniej delegowania
Web Aplikacja
Warsztaty
Prices
FAQ
Contact -->

<ProductLanding {productData}>
	<section class="mb-12 flex flex-col items-center justify-center">
		<div class="max-w-7xl">
			<h2
				class="max-w-5xl text-center text-4xl font-medium leading-none tracking-tighter text-neutral-600 md:text-5xl lg:max-w-4xl "
			>
				Opis etapów delegowania
			</h2>
			{#each cardsDescription as degree}
				<DegreeDescriptionCard {degree} />
			{/each}
			<!-- {#each showFullList ? cardsDescription.splice(0, 3) : cardsDescription as degree}
				<DegreeDescriptionCard {degree} />
			{/each} -->
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
</ProductLanding>
