<script>
	export let startPlay, isOpen;
</script>

<div
	x-transition:enter="transition duration-300 ease-out"
	x-transition:enter-start="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
	x-transition:enter-end="translate-y-0 opacity-100 sm:scale-100"
	x-transition:leave="transition duration-150 ease-in"
	x-transition:leave-start="translate-y-0 opacity-100 sm:scale-100"
	x-transition:leave-end="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
	class="fixed inset-0 z-10 overflow-y-auto"
>
	<!-- aria-labelledby="modal-title"
		role="dialog"
		aria-modal="true" -->
	<div
		class="flex min-h-screen items-end justify-center bg-pink-500 bg-opacity-60 px-4 pt-4 pb-20 text-center sm:block sm:p-0"
	>
		<span class="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true"
			>&#8203;</span
		>

		<div
			class="relative inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all  sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle"
		>
			<div>
				<div class="flex items-center justify-center ">
					<img
						class="h-12 w-12 rounded-full object-cover ring ring-white"
						src="https://images.unsplash.com/photo-1490195117352-aa267f47f2d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
						alt=""
					/>
					<img
						class="-mx-4 h-12 w-12 rounded-full object-cover ring ring-white"
						src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
						alt=""
					/>
					<img
						class="h-12 w-12 rounded-full object-cover ring ring-white"
						src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
						alt=""
					/>
				</div>

				<div class="mt-4 mb-2 text-center">
					<h3 class="font-medium capitalize leading-6 text-gray-800 " id="modal-title">
						Invite your team
					</h3>

					<p class="mt-2 text-sm text-gray-500 ">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolorum aliquam ea.
					</p>
				</div>

				<div class="">
					<label for="Description" class="block text-sm text-gray-500 ">Description</label>

					<textarea
						placeholder="lorem..."
						class="focus:ring-opacity-400  mt-2 block h-32 w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-700 placeholder-gray-400/70 focus:border-pink-400 focus:outline-none focus:ring focus:ring-pink-300"
					/>
				</div>
			</div>

			<div class="mt-4">
				<label class="text-sm text-gray-700 " for="share link">Share link</label>

				<div class="-mx-1 mt-2 flex items-center">
					<input
						type="text"
						value="invite-link"
						class="mx-1 block h-10 flex-1 rounded-md border border-gray-200 bg-white px-4 text-sm text-gray-700 focus:border-pink-400 focus:outline-none focus:ring focus:ring-pink-300 focus:ring-opacity-40 "
					/>

					<button
						class="mx-1 hidden text-gray-600 transition-colors duration-300 hover:text-pink-500  sm:block"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 stroke-pink-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
							/>
						</svg>
					</button>
				</div>
			</div>

			<div class="mt-0 mt-4 flex justify-center gap-2 sm:-mx-2 sm:mt-6 sm:items-center lg:mt-6">
				<div class="mt-3 rounded-lg sm:mt-0">
					<button
						on:click={() => (isOpen = false)}
						class="block transform items-center rounded-xl border-2 border-white px-10 py-3.5 text-center text-base font-medium text-pink-600 shadow-md transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
						>Decline</button
					>
				</div>
				<div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
					<button
						on:click={() => {
							startPlay = true;
							isOpen = false;
						}}
						class="block transform items-center rounded-xl bg-pink-600 px-10 py-4 text-center text-base font-medium text-white transition duration-500 ease-in-out hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
						>Get Started</button
					>
				</div>
			</div>
		</div>
	</div>
</div>
