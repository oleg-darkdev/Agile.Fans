<script>
	import { boards } from '../../../../lib/lean-coffee/app/shared';

	import { Board } from '../../../../lib/lean-coffee/app/widgets/';
	import { Timer } from '../../../../lib/lean-coffee/app/entities';

	let selectedBoard = boards[0],
		start = false;
</script>

<section class="flex w-full justify-center ">
	{#if !start}
		<div
			class="mt-12 flex max-w-lg flex-col rounded-lg border border-gray-200 bg-white p-4 text-gray-500 shadow-md sm:p-8"
		>
			<span class="text-xs font-bold uppercase tracking-widest text-pink-500">
				Last updates: {selectedBoard.lastUpd}
			</span>

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
					<div class="stat-title text-white">Topics for discuss</div>
					<div class="stat-value text-white">34</div>
				</div>

				<div class="stat place-items-center bg-pink-500">
					<div class="stat-title text-white">Member</div>
					<div class="stat-value text-secondary text-white">24</div>
				</div>
			</div>

			<div class="mb-4 flex items-center justify-between">
				<h5 class="text-xl font-bold leading-none text-gray-900 ">Board Members</h5>
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
								<p class="truncate text-sm text-gray-500 ">{member.email}</p>
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
				Start to meeting
			</button>
		</div>
	{:else}
		<div class="flex flex-col">
			<Board />
		</div>
	{/if}
</section>
