<script>
	import { pomodoroState, pomodoroPaused } from '@coreSharedData';
	import { ListPomodoro, Pomodoro } from '@coreWidgets';

	import { Button } from '@coreSharedLayout';
</script>

<Button grows running={$pomodoroState} paused={$pomodoroState && $pomodoroPaused}
	><span slot="label">POMODORO</span></Button
>

<div class="max-w-2xl justify-center">
	<Pomodoro />

	<ListPomodoro />
</div>

<style>
</style>
