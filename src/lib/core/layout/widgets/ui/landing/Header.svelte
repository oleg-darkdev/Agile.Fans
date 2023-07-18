<script>
	import { BtnLogIn, BtnSignIn } from '../../../shared/';

	export let productData;

	let showMenu = false;
</script>

<header class="h-24">
	<nav
		class="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-[hsla(0,0%,0%,0.82)] shadow-black/20 backdrop-blur-[30px]  "
	>
		<div
			class="justify-content mx-auto flex max-w-screen-xl flex-wrap items-center justify-start p-4"
		>
			<a
				href="/"
				class="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl"
				aria-label="logo"
			>
				<img src="/core/logo.svg" alt="Agile.fans logo" class="h-12 w-24 lg:h-24 lg:w-48" />
			</a>
			<div class="flex w-full md:order-2 md:py-2 lg:w-[200px] lg:py-2">
				<div class="justify-content-sm flex flex-row">
					<BtnLogIn />
					<BtnSignIn />
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

			<div class="z-20 w-full {showMenu ? 'hidden' : ''} md:hidden lg:hidden">
				{#each productData.headerLinks as link}
					<div on:click={() => (showMenu = !showMenu)}>
						<a
							href={link.link}
							class="block w-full  rounded py-2 pl-3 pr-4 text-lg font-bold text-white  focus:text-gray-800 md:p-0"
							>{link.title}</a
						>
					</div>
				{/each}
			</div>

			<div class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto">
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
			</div>
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
