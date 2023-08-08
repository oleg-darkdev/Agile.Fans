<script>
  export let workshopsList;
</script>

<div class="w-full rounded-lg  bg-gradient-to-r from-pink-500 to-pink-700 p-4  shadow sm:p-8">
	<div class="flex items-center justify-between">
		<h4 class="my-2  text-center text-4xl font-bold text-neutral-800">Nadchodzące warsztaty</h4>

		<a href="#" class="text-sm font-medium text-black hover:underline "> View all </a>
	</div>
	<div class="flow-root">
		<ul role="list" class="divide-y divide-black">
			{#each workshopsList as workshop}
				<li class="py-3 sm:py-4">
					<div class="flex items-center space-x-4">
						<div class="flex-shrink-0">
							<img class="h-8 w-8 rounded-full" src={workshop.img} alt={workshop.title} />
						</div>
						<div class="min-w-0 flex-1">
							<p class="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p>
							<p class="truncate text-sm text-gray-500 dark:text-gray-400">
								{workshop.title}
							</p>
						</div>
						<div
							class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
						>
							$320
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</div>
