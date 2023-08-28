<script>
	import Icon from 'svelte-awesome';
	import angleDoubleRight from 'svelte-awesome/icons/angleDoubleRight';
	import { WorkshopCardLocalisationString } from '@agileFansAppShared';

	export let localisation;
</script>

<div class="flex flex-row justify-between">
	<WorkshopCardLocalisationString {localisation} />

	<a href={localisation.mapLink} target="_blank" rel="noopener noreferrer"
		><Icon data={angleDoubleRight} scale={3} class="group-hover:fill-black" /></a
	>
</div>
