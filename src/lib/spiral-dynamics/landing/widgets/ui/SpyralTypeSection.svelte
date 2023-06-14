<script>
	let showContact = false;

	export let type;
</script>

<section class="bg-white py-6 sm:py-8 lg:py-12">
	<div class="mx-auto max-w-screen-xl px-4 md:px-8">
		<div class="grid gap-8 md:grid-cols-2 lg:gap-12">
			<div>
				<div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
					<img
						src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
						loading="lazy"
						alt="Photo by Martin Sanchez"
						class="h-full w-full object-cover object-center"
					/>
				</div>
			</div>

			<div class="md:pt-8">
				<p class="text-center font-bold text-indigo-500 md:text-left">Na czym polega gra</p>

				<h1
					class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left"
				>
					SpyralDynamic boardgame
				</h1>

				<p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
					<a
						href="#"
						class="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700"
						>random</a
					>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
					nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
					velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
					sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>

				<h2
					class="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left"
				>
					O autorze gry
				</h2>

				{#if !showContact}
					<p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
				{:else}
					<div class="flex items-center justify-center space-x-3 border-t-2 p-3">
						<a
							rel="noopener noreferrer"
							href=''
							title="LinkedIn"
							class="text-gray-900 hover:text-violet-400"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 32 32"
								class="h-16 w-16"
							>
								<path
									d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"
								/>
							</svg>
						</a>

						<a
							rel="noopener noreferrer"
							href=''
							title="GitHub"
							class="text-gray-900 hover:text-violet-400"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 32 32"
								class="h-16 w-16"
							>
								<path
									d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"
								/>
							</svg>
						</a>
					</div>
				{/if}
				<button on:click={() => (showContact = !showContact)} class="btn-outline btn  btn-warning "
					>Kontakt do autora</button
				>
			</div>
		</div>
	</div>
</section>
