<script>
	//
	import { AppBlocksWrapper, BtnAddNewTimer } from '@coreSharedLayout';
	import { Progress } from '@coreEntities';

	import { timers } from '@coreSharedData';
	import { ListPomodoro } from '@coreWidgets';

	import { onMount } from 'svelte';

	onMount(() => {
		timers.setNewTimings([
			{
				id: 1,
				name: 'Delegation topic',
				time: 6,
				completed: false
			}
		]);
	});

	const newTiming = () => {
		return {
			id: Date.now(),
			name: 'Delegation topic',
			time: 6,
			completed: false
		};
	};

	export let gameSteps, step;
</script>

<AppBlocksWrapper>
	<Progress {gameSteps} bind:step />

	<!-- <h2>Testd;fkgdpkjgdjflgdlgflkjlk</h2> -->

	<ListPomodoro>
		<BtnAddNewTimer slot="btn" {newTiming} />
	</ListPomodoro>
	<slot name="btn" />
</AppBlocksWrapper>

<style>
</style>
