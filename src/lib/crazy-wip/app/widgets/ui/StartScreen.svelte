<script>
	import {
		StepsList,
		TextBlock,
		StepsBtns,
		// LevelSecelect,
		FinalStepOnScreen
	} from '@coreEntities';

	import { gameSteps } from '../../shared';

	import { HorisontalImage } from '@coreSharedLayout';
	// 		MapGenerator,
	// RolesSetup,

	let step = 0;

export let activeScreen;
</script>

{#if step == 0}
	<TextBlock
		title="Witamy serdecznie na ...."
		desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
	>
		<HorisontalImage slot="img" img="" alt=" Welcome banner" />
		<StepsBtns slot="btn" bind:step />
	</TextBlock>
{:else if step >= 1 && step <= 6}
	{#if step == 1}
		<StepsList steps={gameSteps}>
			<StepsBtns bind:step />
		</StepsList>
	{:else if step == 2}
		<TextBlock
			title="Lorem ipsum is placeholder"
			desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
		>
			<StepsBtns slot="btn" bind:step />
		</TextBlock>
		<!--  -->
	{:else if step == 3}
		<TextBlock
			title="Lorem ipsum is placeholder"
			desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
		>
			<StepsBtns slot="btn" bind:step />
		</TextBlock>
	{:else if step == 4}
		<TextBlock
			title="Lorem ipsum is placeholder"
			desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
		>
			<StepsBtns slot="btn" bind:step />
		</TextBlock>
		<!--  -->
	{:else if step == 5}
		<TextBlock
			title="'Dostarczanie surowców do ISS"
			desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
		>
			<HorisontalImage slot="img" img="" alt="Science banner" />
			<StepsBtns slot="btn" bind:step />
		</TextBlock>
	{:else if step == 6}
		<TextBlock
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
