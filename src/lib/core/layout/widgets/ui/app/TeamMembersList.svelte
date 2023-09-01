<script>
	import Icon from 'svelte-awesome';
	import arrowDown from 'svelte-awesome/icons/arrowDown';
	import arrowUp from 'svelte-awesome/icons/arrowUp';
	import { findUsersInBoard, sumValuesForMember } from '@appActionDelegationShared';

	let showAllMembers = false;

	const getValueForUser = (board, memberId) =>
		sumValuesForMember(findUsersInBoard(board, memberId));

	const filteredCards = (board, memberId) => findUsersInBoard(board, memberId);

	export let selectedBoard;
</script>

<div
	class="bg-neutal-600  flex max-w-md  flex-col rounded-lg border border-neutral-600 p-4 text-gray-500 shadow-md hover:bg-neutral-900 "
>
	<div class="mb-4 flex items-center justify-between ">
		<h5 class="text-xl font-bold leading-none text-neutral-400 ">
			Team Members <span class="text-md ">({selectedBoard.members.length})</span>
		</h5>
		{#if selectedBoard.members.length > 2}
			<button
				on:click={() => (showAllMembers = !showAllMembers)}
				class="text-sm font-medium text-pink-600  "
				><Icon data={showAllMembers ? arrowUp : arrowDown} />
				{showAllMembers ? 'Hide' : 'View'} all
			</button>
		{/if}
	</div>
	<!-- -->
	<ul
		class="divide-y divide-gray-200  rounded-lg border border-0 border-neutral-600 py-2 px-2  text-gray-500 hover:bg-neutral-800 "
	>
		{#each showAllMembers ? selectedBoard.members : selectedBoard.members.slice(0, 2) as member}
			<li
				class="group w-full py-2 px-4 text-sm font-medium first:rounded-t-lg last:rounded-b-lg hover:bg-pink-900"
			>
				<div class="flex items-center space-x-4  ">
					<img
						alt={member.nickname}
						src={member.avatar}
						class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-100 text-gray-600 "
					/>
					<div class="min-w-0 flex-1">
						<p class="truncate text-lg font-semibold text-neutral-300  ">
							{member.nickname}
						</p>
						<!-- <p class="truncate text-sm text-gray-500 ">{member.email}</p> -->

						<span class="group-hover:text-neutral-100">
							value: <span class="truncate text-sm font-bold  text-neutral-300 "
								>{getValueForUser(selectedBoard, member.id)}</span
							>
						</span>
						<span class="group-hover:text-neutral-100"
							>tasks:
							<span class="truncate text-sm font-bold  text-neutral-300">
								{filteredCards(selectedBoard, member.id).length}</span
							>
						</span>
					</div>
					<div
						class="inline-flex items-center text-base font-semibold text-pink-600  group-hover:text-neutral-100"
					>
						{member.status}
					</div>
				</div>
			</li>
		{/each}
	</ul>
</div>
