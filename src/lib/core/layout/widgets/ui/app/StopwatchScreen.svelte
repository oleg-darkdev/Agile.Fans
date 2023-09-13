<script>
	import { Button } from '@coreSharedLayout';

	import { stopwatchState, stopwatchPaused } from '@coreSharedData';
	import { ListStopwatch, Stopwatch } from '@coreWidgets';
</script>

<Button grows running={$stopwatchState} paused={$stopwatchState && $stopwatchPaused}
	><span slot="label">STOPWATCH</span></Button
>

<div class="max-w-2xl justify-center">
	<Stopwatch />

	<ListStopwatch />
</div>
