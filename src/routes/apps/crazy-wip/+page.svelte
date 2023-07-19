<script>
	import { AppScreen } from '../../../lib/core/layout/widgets/';

	import { TextBlock } from '../../../lib/core/layout/entities';
</script>

<AppScreen>
	<div slot="start-screen">
		<TextBlock title="Lorem impsum" desc="Lorem impsum is text." />
	</div>
	<div slot="manual-screen" />
	<div slot="game-screen" />
</AppScreen>
