<script>
	import {
		StepsList,
		TextBlock,
		StepsBtns,
		WelcomeBlock,
		CheckboxAppOrService,
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

	$: selectedMode = {
		title: '',
		desc: '',
		video: '',
		value: 0,
		link: ''
	};
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
		<CheckboxAppOrService {gameSteps} bind:step bind:selectedMode>
			<StepsBtns slot="btn" bind:step />
		</CheckboxAppOrService>
	{:else if step == 2}
		<StepsList steps={gameSteps}>
			<StepsBtns bind:step />
		</StepsList>
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
			title="Przygotowanie kart eksperymentów"
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
