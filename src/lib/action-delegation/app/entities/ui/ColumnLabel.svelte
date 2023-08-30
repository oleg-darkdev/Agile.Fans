<script>
  export let column;
</script>

<div
	class="group  my-1 grid h-20 w-full grid-flow-row grid-cols-7 place-items-center gap-2 rounded rounded-xl border-2 border-neutral-600 px-2  hover:bg-neutral-800"
>
	<button
		on:click={() => {
			console.log('object');
		}}
		class="col-span-4 m-1  w-full transform rounded-xl bg-pink-200 bg-opacity-20 px-2 py-2 text-base font-medium  focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 group-hover:bg-pink-700 group-hover:transition group-hover:duration-500 group-hover:ease-in-out "
	>
		<span class="block text-start text-4xl font-semibold text-neutral-100"
			>{column.columnTitle}</span
		>
	</button>
	<div
		class="ml-2 mr-6 flex h-14 w-10 flex-col rounded bg-white bg-opacity-20 group-hover:bg-pink-700 group-hover:transition  group-hover:duration-500 group-hover:ease-in-out"
	>
		<span class="flex items-center justify-center text-xs font-normal text-neutral-100"
			>tasks:
		</span>
		<span class="flex  items-center justify-center text-2xl  font-bold text-neutral-100"
			>{column.tasksCounter}
		</span>
	</div>

	<div class="avatar-group col-span-2 -space-x-4  ">
		{#each column.uniqueMembers as member}
			<div class="avatar">
				<div class="w-8">
					<img src={member.avatar} alt={member.fullName} />
				</div>
			</div>
		{/each}
	</div>
</div>
