<script>
	import { boards } from '../../../../lib/action-delegation/app/shared';
</script>

<section class="flex  w-full justify-center py-12">
	<div class="relative">
		<div class="relative flex justify-start">
			<span class="bg-white pr-3 text-lg font-medium text-neutral-600"> All Boards</span>
		</div>
	</div>

	<div class="flex flex-row flex-wrap justify-center space-y-8">
		{#each boards as board}
			<a href="board/"
				><div class="group max-w-lg pt-8 sm:flex lg:items-end">
					<div class="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
						<img
							class="h-32 w-full rounded-md object-cover lg:w-32"
							src="https://i.pinimg.com/originals/f6/41/af/f641af4abaf0416c0142f4ee6ab32348.jpg"
							alt="Image text"
						/>
					</div>
					<div>
						<span class="text-sm text-gray-500">Last updates: {board.lastUpd}</span>
						<p class="mt-3 text-lg font-medium leading-6">
							{board.title}
						</p>
						<p class="mt-2 text-lg text-gray-500">
							{board.description}
						</p>
						<div class="ml-2 flex">
							{#each board.members as member}
								<img
									alt={member.nickname}
									src={member.avatar}
									class="-ml-4 h-10 w-10 rounded-full border-2 border-white bg-gray-100 text-gray-600 dark:border-gray-800 dark:bg-gray-600 dark:text-gray-300"
								/>
							{/each}
							<a
								href="/"
								class="relative -ml-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gray-100 bg-gray-700 text-sm text-gray-600 text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-gray-600 dark:text-gray-300"
								>{board.members.length}
							</a>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>
