<script>
	import { AppScreen } from '@coreWidgets';

	import { StartScreen, GameProgressScreen, ManualScreen } from '@appActionDelegationWidgets';

	import { actionDelegation } from '@coreSharedData';

	let service = actionDelegation;

	let activeScreen = 'Instrukcja';
</script>

<AppScreen bind:activeScreen>
	<div slot="start-screen">
		<StartScreen {service} bind:activeScreen />
	</div>
	<div slot="manual-screen">
		<ManualScreen />
	</div>
	<div slot="game-screen">
		<GameProgressScreen />
	</div>
</AppScreen>
