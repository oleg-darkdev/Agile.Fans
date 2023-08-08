<script>
	export let productData;

	let showMenu = false;

	export let data;


  console.log(data);
</script>

<!--
<nav class="navbar border-b bg-base-100">
		<div class="flex-1">
			<a href="/" class="btn-ghost btn text-xl normal-case">Pomodoro plan</a>
		</div>

	</nav>
   -->
<header class="h-24">
	<nav
		class="fixed top-0 left-0 z-20 w-full border-b border-gray-200  bg-[hsla(0,0%,0%,0.82)] shadow-black/20 shadow-black/20 backdrop-blur-[30px] backdrop-blur-[30px]  "
	>
		<div class="justify-content flex w-full flex-wrap items-center justify-start px-6 ">
			<a
				href="/"
				class="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl"
				aria-label="logo"
			>
				<img src="/core/logo.svg" class="h-12 w-24 lg:h-24 lg:w-48 " alt="" />
			</a>

			<div class="flex-none">
				{#if !data.user}
					<div class="dropdown-end dropdown">
						<a href="/login" class="btn-primary btn">Login</a>
						<a href="/register" class="btn-secondary btn">Register</a>
					</div>
				{:else}
					<div class="dropdown-end dropdown mr-4">
						<a href="/projects/new" class="btn-outline btn-primary btn">Add Project</a>
					</div>
					<div class="dropdown-end dropdown">
						<label tabindex="0" class="btn-ghost btn-circle avatar btn">
							<div class="w-10 rounded-full">
								<img src="https://placeimg.com/80/80/people" alt="User avatar" />
							</div>
						</label>
						<ul
							tabindex="0"
							class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
						>
							<li>
								<a href="/my/projects" class="justify-between">My Projects</a>
							</li>
							<li><a href="/my/settings">Settings</a></li>
							<li>
								<form action="/logout" method="POST">
									<button type="submit" class="w-full text-start">Logout</button>
								</form>
							</li>
						</ul>
					</div>
				{/if}
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
