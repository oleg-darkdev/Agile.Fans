<script>
	let open = false;

	const links = [
		{
			title: 'App',
			link: '/app'
		},
		{
			title: 'About',
			link: ''
		},
		{
			title: 'Buy',
			link: ''
		},
		{
			title: 'Contact',
			link: ''
		}
		// {
		//   title: '',
		//   link: ''
		// },
	];
</script>

<div class="flex w-full justify-center">
	<header class=" w-full max-w-5xl ">
		<div
			x-data={open}
			class="mx-auto flex max-w-screen-xl flex-col p-5 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8"
		>
			<div class="flex flex-row items-center justify-between lg:justify-start">
				<a
					href="./index.html"
					class="tracking-relaxed transform text-lg font-bold tracking-tighter text-blue-600 transition duration-500 ease-in-out lg:pr-8"
				>
					wickedblocks
				</a>
				<button
					class="focus:shadow-outline rounded-lg focus:outline-none md:hidden"
					on:click={() => (open = !open)}
				>
					<svg fill="currentColor" viewBox="0 0 20 20" class="h-8 w-8">
						<path
							x-show="!open"
							fill-rule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
							clip-rule="evenodd"
						/>
						<path
							x-show="open"
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
							style="display: none"
						/>
					</svg>
				</button>
			</div>

			<nav
				:class="flex:{open}; hidden {!open}"
				class="hidden flex-grow flex-col items-center border-blue-600 pb-4 md:flex md:flex-row md:justify-end md:pb-0 lg:border-l-2 lg:pl-2"
			>
				{#each links as link}
					<a
						class="focus:shadow-outline mt-2 px-4 py-2 text-sm text-gray-500 hover:text-blue-600 focus:outline-none md:mt-0"
						href={link.link}>{link.title}</a
					>
				{/each}

				<!-- <div @click.away="open = false" class="relative" x-data="{ open }">
                <button @click="open = !open" class="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm text-left text-gray-500 md:w-auto md:inline md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline">
                    <span>Dropdown List</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open, 'rotate-0': !open}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform rotate-0 md:-mt-1">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </button>
                <div x-show="open" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" class="absolute right-0 z-30 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48" style="display: none">
                    <div class="px-2 py-2 bg-white rounded-md shadow">
                        <a class="block px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline" href="#">Link #1</a>
                        <a class="block px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline" href="#">Link #2</a>
                        <a class="block px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline" href="#">Link #3</a>
                    </div>
                </div>
            </div> -->

				<div class="inline-flex list-none items-center gap-2 lg:ml-auto">
					<button
						class="block transform items-center rounded-xl border-2 border-white px-10 py-2.5 text-center text-base font-medium text-blue-600 shadow-md transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
						>Sign in</button
					>
					<button
						class="block transform items-center rounded-xl bg-blue-600 px-10 py-3 text-center text-base font-medium text-white transition duration-500 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
						>Sign up</button
					>
				</div>
			</nav>
		</div>
	</header>
</div>
