<script>
	import Icon from 'svelte-awesome';
	import arrowDown from 'svelte-awesome/icons/arrowDown';
	import arrowUp from 'svelte-awesome/icons/arrowUp';

	import { boards } from '../../../../lib/action-delegation/app/shared';

	import { Board } from '../../../../lib/action-delegation/app/widgets/';
	let selectedBoard = boards[0],
		start = false;

	function findUsersInBoard(board, memberId) {
		const foundObjects = [];

		for (const column of board.columns) {
			for (const obj of column.data) {
				for (const member of obj.members) {
					if (member.id === memberId) {
						foundObjects.push(obj);
						break;
					}
				}
			}
		}

		return foundObjects;
	}

	// const memberIdToFind = '1';
	const filteredCards = (board, memberId) => findUsersInBoard(board, memberId);

	const sumValuesForMember = (array) => {
		let totalSum = 0;

		for (const obj of array) {
			if (obj.value) {
				totalSum += parseFloat(obj.value);
			}
		}

		return totalSum;
	};

	// подсчёт общего во всех колонках кроме backlog

	// получение всех пользователей в задачах для каждой колонки
	const getValueForUser = (board, memberId) =>
		sumValuesForMember(findUsersInBoard(board, memberId));

	// console.log(getValueForUser(selectedBoard, '2'));

	let showAllMembers = false;

	function getColumnStatsWithUniqueMembers(board) {
		const columnStats = [];

		for (const column of board.columns) {
			const uniqueMembers = new Map();

			for (const obj of column.data) {
				for (const member of obj.members) {
					uniqueMembers.set(member.id, member);
				}
			}

			columnStats.push({
				columnTitle: column.title,
				tasksCounter: column.data.length,
				uniqueMembers: Array.from(uniqueMembers.values())
			});
		}

		return columnStats;
	}

	function countTotalTasks(board) {
		let totalTaskCount = 0;

		for (const column of board.columns) {
			totalTaskCount += column.data.length;
		}

		return totalTaskCount;
	}

	function countTasksInColumnsExceptBacklog(board) {
		let taskCounts = 0;

		for (const column of board.columns) {
			if (column.title !== 'Backlog') {
				taskCounts = taskCounts + column.data.length;
			}
		}

		return taskCounts;
	}
</script>

<section class="flex min-h-screen w-screen  justify-center bg-black  py-12 ">
	<div class="{start ? 'w-full' : 'max-w-4xl'} flex  flex-row">
		{#if !start}
			<div class="flex flex-col">
				<div
					class="mb-4 flex  max-w-md flex-col rounded-lg border border-gray-200 bg-white p-4 text-gray-500 shadow-md "
				>
					<div class="mb-2 flex flex-col">
						<p class="w-full text-xs font-normal uppercase tracking-widest text-gray-900">
							Created: <span class="font-black">{selectedBoard.dateCreated}</span>
						</p>
						<p class="w-full text-xs  font-normal uppercase tracking-widest text-pink-500">
							Last updates: <span class="font-black">{selectedBoard.lastUpd}</span>
						</p>
					</div>
					<!-- <div class="mb-2 flex items-center justify-between">
			<a href="/" class="text-sm font-medium text-gray-600 hover:underline ">Trello board </a>
		</div> -->

					<h1 class="max-w-md  text-4xl font-bold leading-none tracking-tighter text-neutral-600 ">
						{selectedBoard.title}
					</h1>
					<p class="mx-auto mb-6 mt-2 max-w-xl text-base leading-relaxed text-gray-500">
						{selectedBoard.description}
					</p>

					<div
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

					<button
						on:click={() => (start = !start)}
						class="btn-primary btn-md btn mx-auto my-2 text-white"
					>
						Start to delegation
					</button>
				</div>

				<div
					class="bg-neutal-600 flex  max-w-md flex-col rounded-lg border border-gray-200 p-4 text-gray-500 shadow-md "
				>
					<div class="mb-4 flex items-center justify-between">
						<h5 class="text-xl font-bold leading-none text-neutral-400 ">
							Board Members <span class="text-md ">({selectedBoard.members.length})</span>
						</h5>
						<button
							on:click={() => (showAllMembers = !showAllMembers)}
							class="text-sm font-medium text-pink-600  "
							><Icon data={showAllMembers ? arrowUp : arrowDown} />
							{showAllMembers ? 'Hide' : 'View'} all
						</button>
					</div>
					<ul
						class="hover:bg-neutral-800e divide-y divide-gray-200 rounded-lg border border-0 border-neutral-600  px-2 text-gray-500 "
					>
						{#each showAllMembers ? selectedBoard.members : selectedBoard.members.slice(0, 2) as member}
							<li class="w-full py-2 px-4 text-sm font-medium first:rounded-t-lg last:rounded-b-lg">
								<div class="flex items-center space-x-4">
									<img
										alt={member.nickname}
										src={member.avatar}
										class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-100 text-gray-600 "
									/>
									<div class="min-w-0 flex-1">
										<p class="truncate text-lg font-semibold text-neutral-300 ">
											{member.nickname}
										</p>
										<!-- <p class="truncate text-sm text-gray-500 ">{member.email}</p> -->

										<span>
											value: <span class="truncate text-sm font-bold  text-neutral-300"
												>{getValueForUser(selectedBoard, member.id)}</span
											>
										</span>
										<span
											>tasks:
											<span class="truncate text-sm font-bold  text-neutral-300">
												{filteredCards(selectedBoard, member.id).length}</span
											>
										</span>
									</div>
									<div class="inline-flex items-center text-base font-semibold text-pink-600  ">
										{member.status}
									</div>
								</div>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		{/if}

		<div class="flex w-full flex-col items-center justify-center text-gray-700">
			<h2
				class="ml-8  w-full  text-left  text-2xl font-normal font-normal tracking-widest text-neutral-200"
			>
				Allocation <span class="text-pink-500 ">{countTotalTasks(selectedBoard)}</span> tasks
			</h2>
			<div class="max-w-2xl flex-row  flex-wrap">
				<div class=" flex  flex-col items-center justify-center  px-4 ">
					<div class="flex  flex-col ">
						{#each getColumnStatsWithUniqueMembers(selectedBoard) as column}
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
									<span
										class="flex items-center justify-center text-xs font-normal text-neutral-100"
										>tasks:
									</span>
									<span
										class="flex  items-center justify-center text-2xl  font-bold text-neutral-100"
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
									<!-- <div class="placeholder avatar">
										<div class="w-6 bg-neutral-focus text-neutral-content">
											<span>{column.uniqueMembers.length}</span>
										</div>
									</div> -->
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<!-- <Board bind:start {selectedBoard} /> -->
	</div>
</section>
