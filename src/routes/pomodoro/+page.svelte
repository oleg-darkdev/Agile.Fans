<!-- <script>
	import {  timers } from '@coreSharedData';
	import { ListPomodoro, Pomodoro } from '@coreWidgets';

	import { BtnAddNewTimer } from '@coreSharedLayout';

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
	}
</script>



<div class="max-w-2xl justify-center">
	<BtnAddNewTimer {newTiming}/>

	<ListPomodoro />
</div>

<style>
</style> -->
