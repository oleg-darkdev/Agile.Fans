<script>
	import { getColumnStatsWithUniqueMembers } from '@appActionDelegationShared';

	import { ColumnLabel } from '@appActionDelegationEntities';

	export let selectedBoard, titleText;
</script>

<h2
	class="ml-8  w-full  text-left  text-2xl font-normal font-normal tracking-widest text-neutral-200"
>
	{titleText}
	<slot name="title" />
</h2>
<div class="max-w-2xl flex-row  flex-wrap">
	<div class=" flex  flex-col items-center justify-center  px-4 ">
		<div class="flex  flex-col ">
			{#each getColumnStatsWithUniqueMembers(selectedBoard) as column}
				<ColumnLabel {column} />
			{/each}
		</div>
	</div>
</div>
