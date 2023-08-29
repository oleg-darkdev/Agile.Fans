<script>
	import { Aside } from '../../lib/core/layout/entities';

	export let data;

	// console.log(data.user);
</script>

<!--
<header class="min-h-full ">
	<nav class="navbar flex w-full justify-between bg-primary">
		<a
			href="/"
			class="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl"
			aria-label="logo"
		>
			<img src="/core/logo.svg" class="h-12 w-24 lg:h-24 lg:w-48 " alt="" />
		</a>
		<div class="flex w-full justify-end md:order-2 md:py-2 lg:w-6/12 lg:py-2">
			{#if !data.user}
				<div class="dropdown-end dropdown pr-4">
					<a href="/login" class="btn-outline btn-secondary btn">Login</a>
					<a href="/register" class="btn-secondary btn">Register</a>
				</div>
			{:else}

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
								<span class="badge-primary badge badge-xs indicator-item" />
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
								<img src={data.user.avatar} alt="avatar" />
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
							<li>
								<form action="/logout" method="POST">
									<button type="submit" class="w-full text-start">Logout</button>
								</form>
							</li>
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
			{/if}
		</div>
	</nav>
</header> -->

<!--
{#if !data.user}
	<section class="">
		<span class="[&>svg]:-z-10[&>svg]:block  [&>svg]:absolute [&>svg]:w-full">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				height="680"
				preserveAspectRatio="none"
				viewBox="0 0 1920 880"
			>
				<g transform="translate(960,440) scale(1,1) translate(-960,-440)">
					<linearGradient id="lg-0.047955344060927496" x1="0" x2="1" y1="0" y2="0">
						<stop stop-color="hsl(217, 88%, 33.7%)" offset="0" />
						<stop stop-color="hsl(217, 88%, 75.1%)" offset="1" />
					</linearGradient>
					<path d="" fill="pink" opacity="0.4">
						<animate
							attributeName="d"
							dur="33.333333333333336s"
							repeatCount="indefinite"
							keyTimes="0;0.333;0.667;1"
							calcmod="spline"
							keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
							begin="0s"
							values="M0 0L 0 804.2328934685746Q 320 597.3613372284876  640 571.0708916590191T 1280 512.0661063245175T 1920 301.8788007488083L 1920 0 Z;M0 0L 0 877.6839081951588Q 320 668.0720922803877  640 649.0018928349388T 1280 328.7087077664202T 1920 162.95038242563396L 1920 0 Z;M0 0L 0 724.9886210051687Q 320 661.4364572061575  640 623.2173947479624T 1280 359.20353038907734T 1920 135.51673041732283L 1920 0 Z;M0 0L 0 804.2328934685746Q 320 597.3613372284876  640 571.0708916590191T 1280 512.0661063245175T 1920 301.8788007488083L 1920 0 Z"
						/>
					</path>
					<path d="" fill="pink" opacity="0.4">
						<animate
							attributeName="d"
							dur="33.333333333333336s"
							repeatCount="indefinite"
							keyTimes="0;0.333;0.667;1"
							calcmod="spline"
							keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
							begin="-6.666666666666667s"
							values="M0 0L 0 765.7607191473613Q 320 641.7853945676919  640 624.2534689988059T 1280 365.27264408032966T 1920 190.38947978522663L 1920 0 Z;M0 0L 0 842.1984196370487Q 320 570.6690721707517  640 540.6844954979398T 1280 439.92879442880593T 1920 200.29713960445451L 1920 0 Z;M0 0L 0 796.6802345094818Q 320 721.9216894353016  640 696.8815669355181T 1280 373.6367381440213T 1920 196.63169821789495L 1920 0 Z;M0 0L 0 765.7607191473613Q 320 641.7853945676919  640 624.2534689988059T 1280 365.27264408032966T 1920 190.38947978522663L 1920 0 Z"
						/>
					</path>
					<path d="" fill="pink" opacity="0.4">
						<animate
							attributeName="d"
							dur="33.333333333333336s"
							repeatCount="indefinite"
							keyTimes="0;0.333;0.667;1"
							calcmod="spline"
							keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
							begin="-13.333333333333334s"
							values="M0 0L 0 801.7562714943509Q 320 634.0247183381232  640 605.7090791951217T 1280 503.9393370140325T 1920 224.7551247480177L 1920 0 Z;M0 0L 0 821.0401780336218Q 320 670.8690783540507  640 637.0744123031742T 1280 456.40745286432224T 1920 278.1294357804296L 1920 0 Z;M0 0L 0 744.0534225112256Q 320 637.6425395409125  640 593.2079605185819T 1280 457.03995196824286T 1920 254.87693899994804L 1920 0 Z;M0 0L 0 801.7562714943509Q 320 634.0247183381232  640 605.7090791951217T 1280 503.9393370140325T 1920 224.7551247480177L 1920 0 Z"
						/>
					</path>
					<path d="" fill="pink" opacity="0.4">
						<animate
							attributeName="d"
							dur="33.333333333333336s"
							repeatCount="indefinite"
							keyTimes="0;0.333;0.667;1"
							calcmod="spline"
							keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
							begin="-20s"
							values="M0 0L 0 817.8603658675457Q 320 592.9404308081629  640 559.1126621853513T 1280 428.9912604821798T 1920 209.017381620229L 1920 0 Z;M0 0L 0 802.0504889976935Q 320 561.3963273210122  640 537.6024084387631T 1280 430.41283267566695T 1920 256.1972069733954L 1920 0 Z;M0 0L 0 789.4448177495887Q 320 561.9675446430498  640 531.6192318019404T 1280 414.76018143244175T 1920 265.9163329632971L 1920 0 Z;M0 0L 0 817.8603658675457Q 320 592.9404308081629  640 559.1126621853513T 1280 428.9912604821798T 1920 209.017381620229L 1920 0 Z"
						/>
					</path>
					<path d="" fill="pink" opacity="0.4">
						<animate
							attributeName="d"
							dur="33.333333333333336s"
							repeatCount="indefinite"
							keyTimes="0;0.333;0.667;1"
							calcmod="spline"
							keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
							begin="-26.666666666666668s"
							values="M0 0L 0 844.0541574423102Q 320 623.0697081316591  640 592.8483890737847T 1280 469.85448734523794T 1920 190.81850676853674L 1920 0 Z;M0 0L 0 871.4928294956283Q 320 618.9784567388518  640 593.1183717103518T 1280 376.5051942642811T 1920 141.32293927545027L 1920 0 Z;M0 0L 0 782.0118384610068Q 320 727.3267836497654  640 694.0476176759635T 1280 518.1545471640493T 1920 276.0053882957168L 1920 0 Z;M0 0L 0 844.0541574423102Q 320 623.0697081316591  640 592.8483890737847T 1280 469.85448734523794T 1920 190.81850676853674L 1920 0 Z"
						/>
					</path>
				</g>
			</svg>
		</span>
		<div
			class="w-100 mx-auto px-6 pt-40  sm:max-w-2xl md:max-w-3xl md:px-12 lg:max-w-5xl xl:max-w-7xl xl:px-32 "
		>
			<div class="text-center">
				<div
					class="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,15%,0.8)] dark:shadow-black/20 md:py-16 md:px-12"
					style="

            backdrop-filter: saturate(200%) blur(25px);
          "
				>
					<h1 class="mt-6 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
						Zaloguj się, aby korzystać z aplikacji
					</h1>
					<a href="/register " class="btn-secondary btn-active btn-lg btn">Rejestracja</a>
					<a href="/login" class="btn-primary btn-active btn-lg btn">Autoryzacja</a>
				</div>
			</div>
		</div>
	</section>
{:else} -->
<section class="flex flex-row">
	<Aside user={data.user} />
	<slot />
</section>

<!-- {/if} -->
<style>
	@media (max-width: 640px) {
		:global(.hidden-sm) {
			display: none;
		}
	}
</style>
