<script>
	import Icon from 'svelte-awesome';
	import mapMarker from 'svelte-awesome/icons/mapMarker';

	export let localisation;
</script>

<div class="flex flex-row">
	<Icon data={mapMarker} scale={2} class="mr-4 group-hover:fill-black" />
	<div class="flex w-full flex-col">
		<p class="font-bold text-pink-500 group-hover:text-black">
			{localisation.organisation}
		</p>
		<p class="">{localisation.address}</p>
	</div>
</div>
