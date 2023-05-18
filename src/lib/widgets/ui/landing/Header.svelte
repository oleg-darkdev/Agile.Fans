<script>
	let open = true;
</script>

<div class=" flex w-full justify-center">
	<!-- x-data="{ open: false }" -->
	<div
		class="mx-auto flex max-w-screen-xl flex-col p-5 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8"
	>
		<div class="flex flex-row items-center justify-between lg:justify-start">
			<a
				href="./"
				class="tracking-relaxed transform text-lg font-bold tracking-tighter text-blue-600 transition duration-500 ease-in-out lg:pr-8"
			>
				LOGO
			</a>
		</div>
		<!-- :class="{'flex': open, 'hidden': !open}" -->
		<nav class="flex hidden flex-grow flex-col md:flex md:flex-row md:justify-start">
			<ul class="list-none space-y-2 lg:inline-flex lg:items-center lg:space-y-0">
				<li>
					<a
						href="#features"
						class="border-b-2 border-transparent px-2 py-6 text-sm leading-[22px] text-gray-500 hover:border-blue-600 hover:text-blue-500 md:px-3 lg:px-6"
					>
						<span class="hidden lg:inline"> Features </span>
					</a>
				</li>
				<li>
					<a
						href="#about"
						class="border-b-2 border-transparent px-2 py-6 text-sm leading-[22px] text-gray-500 hover:border-blue-600 hover:text-blue-500 md:px-3 lg:px-6"
					>
						<span class="hidden lg:inline"> About </span>
					</a>
				</li>
				<li>
					<a
						href="#price"
						class="border-b-2 border-transparent px-2 py-6 text-sm leading-[22px] text-gray-500 hover:border-blue-600 hover:text-blue-500 md:px-3 lg:px-6"
					>
						<span class="hidden lg:inline"> Price </span>
					</a>
				</li>
				<li>
					<a
						href="#faq"
						class="border-b-2 border-transparent px-2 py-6 text-sm leading-[22px] text-gray-500 hover:border-blue-600 hover:text-blue-500 md:px-3 lg:px-6"
					>
						<span class="hidden lg:inline"> FAQ </span>
					</a>
				</li>
				<li>
					<a
						href="#contact"
						class="border-b-2 border-transparent px-2 py-6 text-sm leading-[22px] text-gray-500 hover:border-blue-600 hover:text-blue-500 md:px-3 lg:px-6"
					>
						<span class="hidden lg:inline"> Contact </span>
					</a>
				</li>
				<li>
					<div on:click={() => (open = false)} class="relative" x-data={open}>
						<button
							on:click={() => (open = !open)}
							class="focus:shadow-outline mt-2 flex w-full flex-row items-center px-4 py-2 text-left text-sm text-gray-500 hover:text-blue-600 focus:outline-none md:mt-0 md:inline md:w-auto"
						>
							<span>Product List</span>
							<!-- <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open, 'rotate-0': !open}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform rotate-0 md:-mt-1">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg> -->
						</button>
						<div
							x-show="open"
							x-transition:enter="transition ease-out duration-100"
							x-transition:enter-start="transform opacity-0 scale-95"
							x-transition:enter-end="transform opacity-100 scale-100"
							x-transition:leave="transition ease-in duration-75"
							x-transition:leave-start="transform opacity-100 scale-100"
							x-transition:leave-end="transform opacity-0 scale-95"
							class="absolute right-0 z-30 mt-2 w-full origin-top-right rounded-md shadow-lg md:w-48"
							style="display: none"
						>
							<div class="rounded-md bg-white px-2 py-2 shadow">
								<a
									class="focus:shadow-outline mt-2 block px-4 py-2 text-sm text-gray-500 hover:text-blue-600 focus:outline-none md:mt-0"
									href="#">Link #1</a
								>
								<a
									class="focus:shadow-outline mt-2 block px-4 py-2 text-sm text-gray-500 hover:text-blue-600 focus:outline-none md:mt-0"
									href="#">Link #2</a
								>
								<a
									class="focus:shadow-outline mt-2 block px-4 py-2 text-sm text-gray-500 hover:text-blue-600 focus:outline-none md:mt-0"
									href="#">Link #3</a
								>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</nav>
	</div>
</div>
