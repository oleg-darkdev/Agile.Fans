<script>
	export let components;
</script>

<div
	class="flex w-full mb-4 flex-col divide-gray-200 rounded-lg  bg-white p-4 text-gray-900 shadow-md  "
>
	<div class="mb-4 flex items-center justify-between">
		<h5 class="text-xl font-bold leading-none ">Components</h5>
	</div>
	<ul
		class="w-full divide-y divide-gray-200 rounded-lg border-0 border-gray-200 bg-white text-gray-900 "
	>
		{#each components as component}
			<li
				class="w-full list-none py-2 px-4 text-sm font-medium first:rounded-t-lg last:rounded-b-lg"
			>
				<div class="flex items-center space-x-4">
					{component.id}

					<img
						alt="{component.title} photo"
						src={component.photo}
						class="h-10 w-20 flex-shrink-0 rounded bg-gray-100 text-gray-600 "
					/>

					<div class="min-w-0 flex-1">
						<p class="truncate text-sm font-medium ">
							{component.title}
						</p>
						<!-- <p class="truncate text-sm text-gray-900 ">{component.shortDesc}</p> -->
					</div>
					<div class="inline-flex items-center text-base font-semibold ">
						{component.count}
					</div>
				</div>
			</li>
		{/each}
	</ul>
</div>
