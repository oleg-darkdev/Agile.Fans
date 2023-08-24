<script>
	import {
		TextBlock,
		CountdownTimer,
		TimeCounterBlock,
		GameStepsBtns,
		FinalStepOnScreen
	} from '@coreEntities';

	import { HorisontalImage } from '@coreSharedLayout';

	import { firstScenarioBasic } from '../../shared';

	import { StepsList } from '@coreEntities';
	import { LargeBtn } from '@coreSharedLayout';

	import { dayInstruction } from '../../shared';

	let step = 0,
		showMsg = false,
		time = 3;

	let showFullInstruction = false;
</script>

{#if !step}
	<TextBlock
		title="Przedyskutujcie plan działania z pozostałymi graczami. "
		desc="Jak tylko naciśniesz przycisk start, gra się rozpoczyna i zaczyna się timer."
	>
		<HorisontalImage slot="img" img="./images/hero.png" alt=" Welcome banner" />
		<button slot="btn" class="btn-lg  btn mx-6 mt-4 max-w-2xl bg-pink-600" on:click={() => step++}
			>Rozpocząć grę</button
		>
	</TextBlock>
{:else if step >= 1 && step <= 15}
	<TimeCounterBlock bind:showMsg bind:showFullInstruction day={firstScenarioBasic[step - 1]}>
		<CountdownTimer slot="timer" bind:showMsg bind:time />

		<GameStepsBtns
			slot="btn"
			on:click={() => {
				step++;
				time = 3;
				showMsg = false;
			}}
			bind:step
			bind:showMsg
		/>

		<button
			slot="instructionBtns"
			on:click={() => (showFullInstruction = !showFullInstruction)}
			class="btn-lg btn mx-6 mx-auto mt-6 mt-4 w-full bg-pink-600"
			>{showFullInstruction ? 'Ukryj' : 'Pokaż'} instrukcje na dany dzień</button
		>

		<StepsList slot="instruction" steps={dayInstruction.data} />
	</TimeCounterBlock>
{:else if step == 13}
	<FinalStepOnScreen
		title="Final  game"
		desc={[
			'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
		]}
		btnText="Zacznij grę od nowa"
		on:click={() => {
			step = 0;
		}}
	/>
{/if}
