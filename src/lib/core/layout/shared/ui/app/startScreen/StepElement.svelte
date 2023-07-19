<script>
	export let step, idStep, stepsLength;
</script>

<div class="flex ">
	<div class="mr-6 flex flex-col items-center ">
		<div class="h-10 w-px {idStep == 0 ? 'opacity-0' : 'bg-pink-600 '} sm:h-full" />
		<div>
			<div
				class="flex h-8 w-8 items-center justify-center rounded-full border border-pink-600 text-xs font-medium text-pink-600"
			>
				{idStep + 1}
			</div>
		</div>
		<div class="h-full w-px {stepsLength == idStep ? 'opacity-0' : 'bg-pink-600 '} " />
	</div>
	<div class="flex flex-col pb-6 sm:flex-row sm:items-center sm:pb-0">
		<div class="sm:mr-5">
			<div
				class="my-3 flex h-16 w-16 items-center justify-center rounded-full border border-pink-600 bg-indigo-50 shadow-md shadow-pink-600 sm:h-24 sm:w-24"
			>
				<img src={step.img} class="w-24 rounded-full bg-pink-600" alt="" />

				<!-- <svg
					class="text-deep-purple-accent-400 h-12 w-12 sm:h-16 sm:w-16"
					stroke="#661AE6"
					viewBox="0 0 52 52"
				>
					<polygon
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="none"
						points="29 13 14 29 25 29 23 39 38 23 27 23"
					/>
				</svg> -->
			</div>
		</div>
		<div>
			<p class="text-xl font-semibold text-pink-600">{step.title}</p>
			{#each step.desc as desc}
				<p class="text-sm text-gray-400">
					{desc}
				</p>
			{/each}
		</div>
	</div>
</div>
