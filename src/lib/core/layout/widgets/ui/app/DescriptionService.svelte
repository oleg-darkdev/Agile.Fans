<script>
	import { LastUpdCreateDate } from '@coreSharedLayout';
	export let start, btnText, titleBoard, descriptionBoard, dateCreated, lastUpd;
</script>

<div
	class="mb-4 flex  max-w-md flex-col rounded-lg border border-gray-200 bg-white p-4 text-gray-500 shadow-md "
>
	<LastUpdCreateDate {dateCreated} {lastUpd} />

	<!-- <div class="mb-2 flex items-center justify-between">
			<a href="/" class="text-sm font-medium text-gray-600 hover:underline ">Trello board </a>
		</div> -->

	<h1 class="max-w-md  text-4xl font-bold leading-none tracking-tighter text-neutral-600 ">
		{titleBoard}
	</h1>
	<p class="mx-auto mb-6 mt-2 max-w-xl text-base leading-relaxed text-gray-500">
		{descriptionBoard}
	</p>

	<slot name="stats" />

	<button on:click={() => (start = !start)} class="btn-primary btn-md btn mx-auto my-2 text-white">
		{btnText}
	</button>
</div>
