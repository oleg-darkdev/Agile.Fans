<script>
	import {
		WorkshopCardDateBlock,
		WorkshopCardLocalisationBlock,
		WorkshopCardFollowUsBlock,
		WorkshopCardFooter,
		WorkshopCardShortDescBlock,
		WorkshopCardMapBlock,
		WorkshopCardAgendaBlock
	} from '@agileFansAppEntities';

	import { WorkshopCardShowHidePanel } from '@agileFansAppShared';
	export let data;

	let workshopData = data.workshopData;
</script>

<section class="flex h-full items-center justify-center bg-black py-10">
	<div class="max-w-2xl rounded-lg border-2 border-pink-600 ">
		<div class="px-8 py-4">
			<WorkshopCardShortDescBlock
				title={workshopData.description.title}
				shortDesc={workshopData.description.shortDesc}
			/>

			<WorkshopCardDateBlock date={workshopData.date} time={workshopData.time} />
			<WorkshopCardLocalisationBlock localisation={workshopData.localisation} />

			<WorkshopCardShowHidePanel title="Description">
				<div class="prose-pink prose ">
					{#each workshopData.description.fullDesc as desc}
						<p>{desc}</p>
					{/each}
				</div>
			</WorkshopCardShowHidePanel>

			<WorkshopCardShowHidePanel title="About game">
				<div class="prose-pink prose ">
					{#each workshopData.boardgame.desc as desc}
						<p>{desc}</p>
					{/each}

					<a
						href={workshopData.boardgame.link}
						target="_blank"
						rel="noopener noreferrer"
						class="mb-4 inline-flex items-center text-2xl font-bold text-pink-600 hover:underline "
					>
						More about boardgame
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
				</div>
			</WorkshopCardShowHidePanel>

			<WorkshopCardAgendaBlock
				agenda={workshopData.agenda}
				date={workshopData.date}
				time={workshopData.time}
			/>

			<WorkshopCardMapBlock
				localisation={workshopData.localisation}
				openmapLink={workshopData.localisation.mapLink}
			/>

			<WorkshopCardFollowUsBlock links={workshopData.links} />
		</div>
		<WorkshopCardFooter
			registrationLink={workshopData.links.registration}
			price={workshopData.price}
		/>
	</div>
</section>
