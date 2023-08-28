<script>
	import { WorkshopCard } from '@agileFansAppEntities';
	import { WorkshopsFooter } from '@agileFansLandingEntities';
  import {workshopsList} from '@agileFansLandingShared'

</script>

<section class="flex  content-center items-center justify-center  py-20">
	<div class="flex max-w-6xl flex-col rounded-lg border-2 border-black">
		<ul
			class=" grid grid-flow-row  grid-cols-2 gap-2 divide-gray-600 rounded-lg border-0 border-gray-700 bg-gray-800 !bg-transparent text-gray-400"
		>
			{#each workshopsList as workshopData}
				<WorkshopCard {workshopData} />
			{/each}
		</ul>

		<WorkshopsFooter />
	</div>
</section>
