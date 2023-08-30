<script>
	import { AppScreen } from '@coreWidgets';

	import { StartScreen, GameProgressScreen, ManualScreen } from '@appActionDelegationWidgets';
</script>

<AppScreen>
	<div slot="start-screen">
		<StartScreen />
	</div>
	<div slot="manual-screen">
		<ManualScreen />
	</div>
	<div slot="game-screen">
		<GameProgressScreen />
	</div>
</AppScreen>
