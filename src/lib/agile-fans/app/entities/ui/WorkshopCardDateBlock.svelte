<script>
	import Icon from 'svelte-awesome';
	import angleDoubleRight from 'svelte-awesome/icons/angleDoubleRight';
	import { WorkshopCardDateString } from '@agileFansAppShared';

	export let date, time;
</script>

<div class="flex flex-row justify-between">
	<WorkshopCardDateString {date} {time} />

	<button title="Add to calendar" on:click={() => console.log('add for calendar')}>
		<Icon data={angleDoubleRight} scale={3} class="group-hover:fill-black" />
	</button>
</div>
