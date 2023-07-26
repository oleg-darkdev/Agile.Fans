<script>
	import { AppScreen } from '../../../lib/core/layout/widgets/';
	import {
		StartScreen,
		GameProgressScreen,
		ManualScreen
	} from '../../../lib/crazy-wip/app/widgets';

	import { kanbanMetrics } from '../../../lib/core/utils/';


  const stories = [
  {
    "created": "2017-03-01",
    "started": "2017-03-03",
    "finished": "2017-03-11"
  },
  {
    "created": "2017-03-07",
    "started": "2017-03-12",
    "finished": "2017-03-17"
  },
  {
    "created": "2017-03-10",
    "started": "2017-03-12",
    "finished": "2017-03-16"
  }
];


const metrics = kanbanMetrics(stories);

console.log(metrics);
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
