<script>
	export let card;
</script>

<div
	class="group relative z-10 mt-1 flex w-80 transform   cursor-pointer flex-col items-start overflow-visible rounded-xl rounded-lg bg-white  bg-white p-4 shadow-2xl transition delay-150 duration-300 ease-in-out hover:-translate-x-8 hover:-translate-y-8 hover:bg-opacity-100 md:-ml-8 md:w-80"
	draggable="true"
>
	<button
		class="absolute top-0 right-0 mt-3 mr-2 flex hidden h-5 w-5 items-center justify-center rounded text-gray-500 hover:bg-gray-200 hover:text-gray-700 group-hover:flex"
	>
		<svg
			class="h-4 w-4 fill-current"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
			/>
		</svg>
	</button>

	<div class="flex justify-between">
		<h4 class="text-lg font-bold">
			{card.title} <span class="text-sm font-normal">value: {card.value}</span>
		</h4>
	</div>

	<p class="mb-2 text-sm text-gray-500">{card.desc}</p>
	<div class="mt-3 flex w-full items-center justify-between text-xs font-medium text-gray-400 ">
		<div class="flex flex-col w-full">
			<div class="flex flex-row w-full flex-wrap">
				{#each card.tags as tag}
					<span
						class="mx-1 mb-2 flex h-6 items-center rounded-full bg-pink-100 px-3 text-xs font-semibold text-pink-500"
						>{tag}</span
					>
				{/each}
			</div>

			<div class="flex flex-row w-full justify-between">
				<div class="flex items-center ">
					<svg
						class="h-6 w-6 fill-black text-black"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
							clip-rule="evenodd"
						/>
					</svg>
					<span class="ml-1 text-lg leading-none text-black">{card.date}</span>
				</div>

				<div
					class="avatar-group  -space-x-4 rounded-full ring ring-black ring-offset-2 ring-offset-base-100"
				>
					{#each card.members as member}
						<div class="avatar ">
							<div class="w-10">
								<img src={member.avatar} alt={member.fullName} />
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<!-- <span
						class="flex h-6 items-center rounded-full bg-green-100 px-3 text-xs font-semibold text-green-500"
						>Dev</span
					> -->
