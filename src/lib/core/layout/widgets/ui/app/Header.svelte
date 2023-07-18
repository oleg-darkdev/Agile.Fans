<script>
	export let productData;

	let showMenu = false;
</script>

<header class="h-24">
	<nav class="fixed top-0 left-0 z-20 w-full border-b border-gray-200  bg-[hsla(0,0%,0%,0.82)] shadow-black/20 backdrop-blur-[30px] shadow-black/20 backdrop-blur-[30px]  ">
		<div class="justify-content flex w-full flex-wrap items-center justify-start px-6 ">
			<a
				href="/"
				class="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl"
				aria-label="logo"
			>
				<img src='/core/logo.svg' class="h-12 w-24 lg:h-24 lg:w-48 " alt="" />
			</a>
			<div class="flex w-full justify-end md:order-2 md:py-2 lg:w-6/12 lg:py-2">
				<div class="justify-content-sm flex flex-row ">
					<div class="form-control">
						<input type="text" placeholder="Search" class="input-bordered input w-24 md:w-auto" />
					</div>
					<div class="dropdown-end dropdown">
						<label tabindex="0" class="btn-ghost btn-circle btn">
							<div class="indicator">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
									/></svg
								>
								<span class="badge badge-primary badge-xs indicator-item" />
							</div>
						</label>
						<div
							tabindex="0"
							class="card dropdown-content card-compact mt-3 w-52 bg-base-100 shadow"
						>
							<div class="card-body">
								<span class="text-lg font-bold">8 Items</span>
								<span class="text-info">Subtotal: $999</span>
								<div class="card-actions">
									<button class="btn-primary btn-block btn">View cart</button>
								</div>
							</div>
						</div>
					</div>
					<div class="dropdown-end dropdown">
						<label tabindex="0" class="btn-ghost btn-circle btn">
							<div class="indicator">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
									/></svg
								>
								<span class="badge badge-sm indicator-item">8</span>
							</div>
						</label>
						<div
							tabindex="0"
							class="card dropdown-content card-compact mt-3 w-52 bg-base-100 shadow"
						>
							<div class="card-body">
								<span class="text-lg font-bold">8 Items</span>
								<span class="text-info">Subtotal: $999</span>
								<div class="card-actions">
									<button class="btn-primary btn-block btn">View cart</button>
								</div>
							</div>
						</div>
					</div>
					<div class="dropdown-end dropdown">
						<label tabindex="0" class="btn-ghost btn-circle avatar btn">
							<div class="w-10 rounded-full">
								<img
									src="https://images.generated.photos/ADBiDLhLYriwtsaAaUiMrqn-TLCFP1rZJ-X7pUPd33U/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTcwODM4LmpwZw.jpg"
								/>
							</div>
						</label>
						<ul
							tabindex="0"
							class="menu-sm dropdown-content menu rounded-box mt-3 w-52 bg-base-100 p-2 shadow"
						>
							<li>
								<a class="justify-between">
									Profile
									<span class="badge">New</span>
								</a>
							</li>
							<li><a>Settings</a></li>
							<li><a>Logout</a></li>
						</ul>
					</div>
				</div>

				<button
					data-collapse-toggle="navbar-sticky"
					type="button"
					class="mx-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200  md:hidden"
					aria-controls="navbar-sticky"
					aria-expanded="false"
					on:click={() => {
						showMenu = !showMenu;
						console.log(showMenu);
					}}
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="h-6 w-6 fill-white"
						aria-hidden="true"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clip-rule="evenodd"
						/></svg
					>
				</button>
			</div>

			<!-- <div class="z-20 w-full {showMenu ? 'hidden' : ''} md:hidden lg:hidden">
				{#each productData.headerLinks as link}
					<div on:click={() => (showMenu = !showMenu)}>
						<a
							href={link.link}
							class="block w-full  rounded py-2 pl-3 pr-4 text-lg font-bold text-white  focus:text-gray-800 md:p-0"
							>{link.title}</a
						>
					</div>
				{/each}
			</div> -->

			<!-- <div class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto">
				<ul
					class="mt-4 flex flex-col rounded-lg p-4   md:mt-0 md:flex-row md:space-x-8 md:border-0  md:p-0 "
				>
					{#each productData.headerLinks as link}
						<li>
							<a
								href={link.link}
								class="block rounded  py-2 pl-3 pr-4 text-lg font-bold  text-white md:p-0"
								>{link.title}</a
							>
						</li>
					{/each}
				</ul>
			</div> -->
		</div>
	</nav>
</header>

<style>
	@media (max-width: 640px) {
		.justify-content-sm {
			justify-content: space-between;
		}
	}

	.justify-content {
		justify-content: space-between;
	}
</style>
