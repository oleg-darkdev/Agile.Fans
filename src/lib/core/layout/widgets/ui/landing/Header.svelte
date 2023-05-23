<script>
	export let productData;

	let open = true;

	const links = [
		{
			title: 'Contact',
			link: '#contact'
		},
		{
			title: 'FAQ',
			link: '#faq'
		},
		{
			title: 'Price',
			link: '#price'
		},
		{
			title: 'About',
			link: '#about'
		},
		{
			title: 'Features',
			link: '#features'
		}
		// {
		//   title: '',
		//   link: ''
		// },
	];
</script>

<header class="bg-blue-500">
	<nav class="container relative mx-auto flex items-center justify-between px-6 py-8 text-white">
		<a href="#">
			<img src={productData.shortDesc.logo} class="h-24 w-24 rounded-xl" alt="" />
			<!-- <svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-8 w-8 md:h-10 md:w-10"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
				/>
			</svg> -->
		</a>

		<button on:click={(open = !open)} class="md:hidden">
			{#if !open}
				<span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
					</svg>
				</span>
			{:else}
				<span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</span>
			{/if}
		</button>

		<div
			class="{open
				? 'translate-x-0 opacity-100 '
				: '-translate-x-full opacity-0'} absolute inset-x-0 top-16 z-30 mt-4 w-full space-y-6 bg-indigo-600 px-6 py-8 transition-all duration-300 ease-in-out md:relative md:top-0 md:-mx-6 md:mt-0 md:flex md:w-auto md:translate-x-0 md:items-center md:space-y-0 md:bg-transparent md:p-0 md:opacity-100"
		>
			{#each links as link}
				<a
					href={link.link}
					class="block text-white transition-colors duration-300 hover:text-indigo-300 md:px-6"
					>{link.title}</a
				>
			{/each}

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
		</div>
	</nav>
</header>

<!--
        <section class="container px-6 py-8 mx-auto lg:py-16 " id="about">
            <div class="lg:flex lg:items-center lg:-mx-4">
                <div class="lg:w-1/2 lg:px-4">
                    <h3 class="text-xl font-medium text-gray-800 md:text-2xl lg:text-3xl">We create awesome prototypes,
                        plugins, and templates.</h3>

                    <p class="mt-6 text-gray-500 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam
                        provident voluptatum id magni iste nobis corrupti, delectus quis repellat, debitis error quod
                        explicabo molestiae rerum totam ab sunt excepturi?</p>

                    <button class="flex items-center mt-8 -mx-2 text-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 mx-1" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p class="mx-1 font-semibold">PLAY VIDEO</p>
                    </button>
                </div>

                <div class="mt-8 lg:w-1/2 lg:px-4 lg:mt-0">
                    <img class="object-cover w-full rounded-xl h-96"
                        src="https://images.unsplash.com/photo-1516131206008-dd041a9764fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                        alt="Video thumbnail">
                </div>
            </div>
        </section> -->
