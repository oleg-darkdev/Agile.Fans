<script>
	import {
		StepsList,
		TextBlock,
		WelcomeBlock,
		StepsBtns,
		VideoCard,
		Progress,
		ComponentsTable,
		CheckboxAppOrService,
		// LevelSecelect,
		FinalStepOnScreen
	} from '@coreEntities';
	import { AppBlocksWrapper, HorisontalImage } from '@coreSharedLayout';

	let step = 0;
	const video = {
		title: 'Przygotowanie do gry',
		link: '/agile-fans/landing/video.mp4',
		poster: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/fashion.jpg'
	};

	$: selectedMode = {
		title: '',
		desc: '',
		video: '',
		value: 0,
		link: ''
	};

	export let activeScreen, service;

	let gameSteps = service.appSteps,
		components = service.components;
</script>

{#if step == 0}
	<WelcomeBlock
		{video}
		bind:step
		title="Witamy   "
		desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
	/>
{:else if step >= 1 && step <= gameSteps.length - 1}
	{#if step == 1}
		<CheckboxAppOrService {gameSteps} bind:step bind:selectedMode>
			<StepsBtns slot="btn" bind:step />
		</CheckboxAppOrService>
	{:else if step == 2}
		<StepsList steps={gameSteps} selectedMode={selectedMode.title}>
			<StepsBtns bind:step />
		</StepsList>
	{:else if step == 3}
		<AppBlocksWrapper>
			<Progress {gameSteps} bind:step />

			<ComponentsTable {components} />
			<StepsBtns bind:step />
		</AppBlocksWrapper>
	{:else if step > 3}
		<TextBlock {gameSteps} bind:step title={gameSteps[step].title} desc={gameSteps[step].desc[0]}>
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
