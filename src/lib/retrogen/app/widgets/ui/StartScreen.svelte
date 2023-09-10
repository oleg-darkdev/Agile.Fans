<script>
	import { allScanariousForRetrogen } from '@appRetrogenShared';
	import {
		StepsList,
		TextBlock,
		StepsBtns,
		WelcomeBlock,
		// LevelSecelect,
		FinalStepOnScreen
	} from '@coreEntities';

	import { gameSteps } from '@coreSharedData';

	import { HorisontalImage } from '@coreSharedLayout';
	// 		MapGenerator,
	// RolesSetup,

	let step = 0;
	const video = {
		title: 'Przygotowanie do gry',
		link: '/agile-fans/landing/video.mp4',
		poster: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/fashion.jpg'
	};

	export let activeScreen;
</script>

{#if step == 0}
	<WelcomeBlock
		{video}
		bind:step
		title="Witamy   "
		desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
	/>
{:else if step >= 1 && step <= 6}
	{#if step == 1}
		<StepsList steps={gameSteps}>
			<StepsBtns bind:step />
		</StepsList>
	{:else if step == 2}
		<TextBlock
			{gameSteps}
			bind:step
			title="Lorem ipsum is placeholder"
			desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
		>
			<StepsBtns slot="btn" bind:step />
		</TextBlock>
		<!--  -->
	{:else if step == 3}
		<TextBlock
			{gameSteps}
			bind:step
			title="Lorem ipsum is placeholder"
			desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
		>
			<StepsBtns slot="btn" bind:step />
		</TextBlock>
	{:else if step == 4}
		<TextBlock
			{gameSteps}
			bind:step
			title="Lorem ipsum is placeholder"
			desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
		>
			<StepsBtns slot="btn" bind:step />
		</TextBlock>
		<!--  -->
	{:else if step == 5}
		<TextBlock
			{gameSteps}
			bind:step
			title="'Dostarczanie surowców do ISS"
			desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
		>
			<HorisontalImage slot="img" img="" alt="Science banner" />
			<StepsBtns slot="btn" bind:step />
		</TextBlock>
	{:else if step == 6}
		<TextBlock
			{gameSteps}
			bind:step
			title="Lorem ipsum is placeholder text commonly"
			desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
		>
			<HorisontalImage slot="img" img="/images/manual/science_bg.png" alt="Science banner" />
			<StepsBtns slot="btn" bind:step />
		</TextBlock>
	{/if}
{:else}
	<FinalStepOnScreen
		title="Yay, prawie skończyliśmy przygotowania"
		desc={[
			'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
		]}
		on:click={() => {
			activeScreen = 'Rozgrywka';
			step = 1;
		}}
	>
		<HorisontalImage img="" alt="Hello banner" />
	</FinalStepOnScreen>
{/if}

<section class=" flex w-full justify-center py-20">
	<div
		class="mx-4  mx-4 h-auto max-w-sm rounded rounded-xl  bg-black  py-5 md:max-w-2xl md:px-6 lg:max-w-4xl lg:px-8"
	>
		<!-- <div class="grid gap-6 lg:grid-cols-2"> -->

		<!-- ounded-lg p-4 text-gray-500   -->
		<ul id="start" class="flex flex-row flex-wrap justify-center px-8 ">
			{#each allScanariousForRetrogen as scenario, i}
				<li
					class="m-2 flex w-full flex-row flex-row-reverse  flex-wrap justify-between {scenario.showFull
						? ''
						: ' border-2 border border-neutral-600 hover:text-white'} bg-neutal-600  rounded-xl p-3 shadow-md transition duration-300 ease-in-out hover:bg-neutral-900  "
				>
					<a class="" href={scenario.author.link}>Author: <span>{scenario.author.bio}</span></a>
					<a class="w-full" href="./retrogen/tools/{scenario.link}">
						<div class="mb-4 flex flex-col items-start md:mb-0 lg:mb-0">
							<div class="shrink-0">
								<div class="flex  flex-row  pr-3">
									<span class="mr-2 text-4xl  font-black text-white"> ID </span>
									<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-700">
										<span class="text-2xl font-black  text-white">
											{scenario.id}
										</span>
									</div>
								</div>
							</div>
							<div class="group grow ">
								<p class="mb-1 font-bold text-pink-700 group-hover:text-white">
									{scenario.title}
								</p>
								<p class="mb-0 text-pink-500 group-hover:text-neutral-50">
									{scenario.shortDesc}
								</p>
							</div>
						</div>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>
