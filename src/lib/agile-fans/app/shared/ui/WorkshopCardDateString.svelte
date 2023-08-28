<script>
	import Icon from 'svelte-awesome';
	import calendar from 'svelte-awesome/icons/calendar';

	export let date, time;
</script>

<div class="flex flex-row">
	<Icon data={calendar} scale={2} class="mr-4 group-hover:fill-black" />
	<div class="flex w-full flex-col">
		<p class="font-bold text-pink-500 group-hover:text-black">{time}</p>
		<p class="">{date}</p>
	</div>
</div>
