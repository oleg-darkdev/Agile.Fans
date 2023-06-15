<script>
  export let features;
</script>

<div class="mb-md-0 mt-12 mb-6 flex w-full shrink-0 grow-0 basis-auto flex-wrap px-3">
	<a name="features" />

	{#each features as feature}
		<div class="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
			<div class="flex">
				<div class="shrink-0">
					<div class="bg-primary-100 mb-6 inline-block rounded-md p-4 text-primary">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							class="h-6 w-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
							/>
						</svg>
					</div>
				</div>
				<div class="ml-4 grow">
					<p class="mb-3 font-bold text-gray-600">Extremely fast</p>
					<p class="text-gray-500 ">
						Pellentesque varius ex vel consequat quis. Sed mauris ex, imperdiet sit amet nisl ac,
						ultrices.
					</p>
				</div>
			</div>
		</div>
	{/each}
</div>
