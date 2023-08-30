<script>
	import { boards } from '@appActionDelegationShared';
	import { LastUpdCreateDate } from '@coreSharedLayout';
</script>

<section class="flex  w-full justify-center py-12">
	<!-- среди этапов будет выбор, играть в игру или пользоваться сервисом! -->

	<div class="flex flex-row flex-wrap justify-center space-y-8">
		{#each boards as board}
			<a href="./action-delegation/board/" class="flex flex-col justify-center "
				><div
					class="group mb-4 max-w-lg rounded rounded-xl border-2 border-neutral-600  px-2  py-6 hover:bg-neutral-800 sm:flex lg:items-end"
				>
					<div>
						<LastUpdCreateDate dateCreated={board.dateCreated} lastUpd={board.lastUpd} />

						<p class="mt-3 text-lg font-medium leading-6">
							{board.title}
						</p>
						<p class="mt-2 text-lg text-gray-500">
							{board.description}
						</p>
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>
