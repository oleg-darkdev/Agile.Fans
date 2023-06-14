<script>
	import { BtnLogIn, BtnSignIn } from './lib/core/layout/entities';
	export let productData;

	let open = true;
</script>

<header class="h-24">
	<nav class="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-blue-500  ">
		<div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
			<a
				href="/"
				class="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl"
				aria-label="logo"
			>
				<img src={productData.shortDesc.logo} class="h-12 w-24 lg:h-24 lg:w-48 " alt="" />
			</a>
			<div class="flex md:order-2">
				<BtnLogIn />
				<BtnSignIn />
				<button
					data-collapse-toggle="navbar-sticky"
					type="button"
					class="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
					aria-controls="navbar-sticky"
					aria-expanded="false"
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
			<div
				class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
				id="navbar-sticky"
			>
				<ul
					class="mt-4 flex flex-col rounded-lg p-4   md:mt-0 md:flex-row md:space-x-8 md:border-0  md:p-0 "
				>
					{#each productData.headerLinks as link}
						<li>
							<a
								href='{link.link}'
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
