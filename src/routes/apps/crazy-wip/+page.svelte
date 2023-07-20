<script>
	import { AppScreen } from '../../../lib/core/layout/widgets/';
	import { StartScreen, GameProgressScreen, ManualScreen } from '../../../lib/crazy-wip/app/widgets';

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
