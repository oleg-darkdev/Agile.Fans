<script>
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
						break; // Если найден, можно прекратить поиск в этом объекте
					}
				}
			}
		}

		return foundObjects;
	}

	// const memberIdToFind = '1';
	const filteredCards = (board, memberId) => findUsersInBoard(board, memberId);

	// подсчёт общего во всех колонках кроме backlog, подсчёт полезности на одного юзера
	const getValueForUser = (board, memberId) => findUsersInBoard(board, memberId).length;

	console.log(filteredCards(selectedBoard, '2'));
</script>

<section class="flex min-h-screen w-screen  justify-center bg-black  py-12 ">
	<div class="{start ? 'w-full' : 'max-w-2xl'} flex  flex-row">
		{#if !start}
			<div
				class="flex max-w-md  flex-col rounded-lg border border-gray-200 bg-white p-4 text-gray-500 shadow-md sm:p-8"
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
						<div class="stat-title text-white">Tasks Delegated</div>
						<div class="stat-value text-white" />
					</div>

					<div class="stat place-items-center bg-pink-500">
						<div class="stat-title text-white">Not delegated</div>
						<div class="stat-value text-secondary text-white">
							{selectedBoard.columns[0].data.length}
						</div>
					</div>
				</div>

				<div class="mb-4 flex items-center justify-between">
					<h5 class="text-xl font-bold leading-none text-gray-900 ">
						Board Members <span class="text-md ">({selectedBoard.members.length})</span>
					</h5>
					<a href="/" class="text-sm font-medium text-pink-600 hover:underline ">View all </a>
				</div>
				<ul
					class="divide-y divide-gray-200 rounded-lg border border-0 border-gray-200 bg-white text-gray-500 "
				>
					{#each selectedBoard.members as member}
						<li class="w-full py-2 px-4 text-sm font-medium first:rounded-t-lg last:rounded-b-lg">
							<div class="flex items-center space-x-4">
								<img
									alt={member.nickname}
									src={member.avatar}
									class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-100 text-gray-600 "
								/>
								<div class="min-w-0 flex-1">
									<p class="truncate text-sm font-medium text-gray-900 ">
										{member.nickname}
									</p>
									<!-- <p class="truncate text-sm text-gray-500 ">{member.email}</p> -->
									<span class="truncate text-sm font-normal  text-gray-500"
										>value: {getValueForUser(selectedBoard, member.id)}</span
									>
									<span class="truncate text-sm font-normal  text-gray-500"
										>tasks: {filteredCards(selectedBoard, member.id).length}</span
									>
								</div>
								<div class="inline-flex items-center text-base font-semibold text-gray-900 ">
									{member.status}
								</div>
							</div>
						</li>
					{/each}
				</ul>

				<button
					on:click={() => (start = !start)}
					class="btn-primary btn-md btn mx-auto my-2 text-white"
				>
					Start to delegation
				</button>
			</div>
		{/if}

		<Board bind:start {selectedBoard} />
	</div>
</section>
