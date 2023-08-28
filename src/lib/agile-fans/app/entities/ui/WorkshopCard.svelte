<script>
	import {
		WorkshopCardDateBlock,
		WorkshopCardLocalisationBlock,
		WorkshopCardFollowUsBlock,
		WorkshopCardFooter,
		WorkshopCardShortDescBlock
	} from '@agileFansAppEntities';

	export let workshopData;
</script>

<li class="w-full list-none py-2 px-4 text-sm font-medium first:rounded-t-lg last:rounded-b-lg">
	<div
		class="group flex flex-col items-center rounded-lg border  border-black  bg-black shadow hover:bg-pink-800 md:max-w-xl md:flex-row"
	>
		<div class="flex flex-row">
			<img
				class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
				src={workshopData.img}
				alt="Worhshop img "
			/>
			<div class="flex flex-col justify-between p-4 leading-normal">
				<WorkshopCardShortDescBlock
					title={workshopData.description.title}
					shortDesc={workshopData.description.shortDesc}
				/>

				<a
					href="workshops/{workshopData.date}"
					target="_blank"
					rel="noopener noreferrer"
					class="mb-4 inline-flex items-center text-2xl font-bold text-pink-600 hover:underline group-hover:text-black"
				>
					More information
					<svg
						class="ml-2.5 h-3 w-3"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill=""
						viewBox="0 0 18 18"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
						/>
					</svg>
				</a>

				<WorkshopCardDateBlock date={workshopData.date} time={workshopData.time} />
				<WorkshopCardLocalisationBlock localisation={workshopData.localisation} />

				<WorkshopCardFollowUsBlock links={workshopData.links} />

				<WorkshopCardFooter
					registrationLink={workshopData.links.registration}
					price={workshopData.price}
				/>
			</div>
		</div>
	</div>
</li>
