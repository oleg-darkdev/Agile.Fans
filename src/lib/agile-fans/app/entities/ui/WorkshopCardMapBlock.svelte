<script>
	import { WorkshopCardLocalisationString } from '@agileFansAppShared';

	export let openmapLink, localisation;
</script>

<div class="my-4">
	<WorkshopCardLocalisationString {localisation} />

	<iframe
		class="m-2 mb-6 rounded-lg border border-gray-200 bg-white p-2 text-gray-500 shadow-md"
		width="100%"
		height="300px"
		frameborder="0"
		scrolling="no"
		marginheight="0"
		marginwidth="0"
		src={openmapLink}
	/>
</div>
