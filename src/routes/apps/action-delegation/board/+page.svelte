<script>
	import { boards, countTasksInColumnsExceptBacklog, countTotalTasks } from '@appActionDelegationShared';
	import { DescriptionService, TeamMembersList } from '@coreWidgets';
	import { Board, ColumnsAndTasksData } from '@appActionDelegationWidgets';

	let selectedBoard = boards[0],
		start = false;

	// подсчёт общего во всех колонках кроме backlog

	// console.log(getValueForUser(selectedBoard, '2'));
</script>



<section class="flex min-h-screen w-screen  justify-center bg-black  py-12 ">
	<div class="{start ? 'w-full' : 'max-w-4xl'} flex  flex-row">
		{#if !start}
			<div class="flex flex-col">
				<DescriptionService
					titleBoard={selectedBoard.title}
					descriptionBoard={selectedBoard.description}
					{selectedBoard}
					dateCreated={selectedBoard.dateCreated}
					lastUpd={selectedBoard.lastUpd}
					bind:start
					btnText="Start to delegation"
				>
					<div
						slot="stats"
						class="stats stats-vertical mx-auto mb-4 max-w-xs bg-pink-500 shadow lg:stats-horizontal "
					>
						<div class="stat place-items-center bg-pink-500">
							<div class="stat-title text-black">Tasks Delegated</div>
							<div class="stat-value text-black">
								{countTasksInColumnsExceptBacklog(selectedBoard)}
							</div>
						</div>

						<div class="stat place-items-center bg-pink-500">
							<div class="stat-title text-black">Not delegated</div>
							<div class="stat-value text-black">
								{selectedBoard.columns[0].data.length}
							</div>
						</div>
					</div>
				</DescriptionService>

				<TeamMembersList {selectedBoard} />
			</div>

			<div class="flex w-full flex-col items-center justify-center text-gray-700">
				<ColumnsAndTasksData titleText="Allocation tasks" {selectedBoard}>
					<span slot="title" class="text-pink-500 ">{countTotalTasks(selectedBoard)}</span>
				</ColumnsAndTasksData>
			</div>
		{:else}
			<Board bind:start {selectedBoard} />
		{/if}
	</div>
</section>
