<script>
	import Icon from 'svelte-awesome';
	import book from 'svelte-awesome/icons/book';
	import gamepad from 'svelte-awesome/icons/gamepad';
	import home from 'svelte-awesome/icons/home';
	import playCircleO from 'svelte-awesome/icons/playCircleO';
	import infoCircle from 'svelte-awesome/icons/infoCircle';
	import shoppingCart from 'svelte-awesome/icons/shoppingCart';
	import user from 'svelte-awesome/icons/user';
	import lineChart from 'svelte-awesome/icons/lineChart';
	import linode from 'svelte-awesome/icons/linode';
	import barChart from 'svelte-awesome/icons/barChart';
	import share from 'svelte-awesome/icons/share';
	import arrowLeft from 'svelte-awesome/icons/arrowLeft';
	import arrowRight from 'svelte-awesome/icons/arrowRight';

	//   import { onMount } from "svelte";

	// let version = "";

	// onMount(async () => {
	//   const response = await fetch("/package.json");
	//   const data = await response.json();
	//   version = data.version;
	// });

	import { NavBtnAppFooter, NavLinkAppFooter } from '../../shared';

	export let activeScreen;
</script>

<div class="btm-nav flex flex-row  bg-pink-600 shadow-md shadow-pink-600">
	<!--
        эти иконки выдвигаются по нажатию стрелки
левая сторона
share - поделиться ссылкой
домашняя страница
фак страница с якорем по этой игре


        правая сторона
user - домашняя страница персонального кабинета

        lineChart - таблица рекордов по игре
      linode - ближайшый воркшоп по игре

    barChart - статистика по приложению-->
	<div class="absolute bottom-5 left-1/2 z-50 w-full  -translate-x-1/2 ">
		<div
			class=" grid h-20 w-full max-w-2xl grid-cols-5 gap-1 rounded-full bg-pink-800 px-4  lg:gap-4 lg:px-8 "
		>
			<!-- <div class="mx-auto  h-full w-20"> -->
			<div class="dropdown-end dropdown dropdown-top  py-6 md:dropdown-left lg:dropdown-left">
				<label tabindex="0" class="flex justify-start"><Icon data={arrowLeft} scale={2} /></label>

				<div
					tabindex="0"
					class="dropdown-content menu rounded-box relative z-[1] w-20 bg-black p-2 shadow"
				>
					<NavLinkAppFooter title="Go to homepage" text="home" link="/">
						<Icon data={home} scale={2} />
					</NavLinkAppFooter>
					<NavLinkAppFooter title="Go to personal cabinet" text="cabinet" link="/">
						<Icon data={user} scale={2} />
					</NavLinkAppFooter>
					<NavLinkAppFooter title="Go to F.A.Q page" text="F.A.Q." link="/faq">
						<Icon data={infoCircle} scale={2} />
					</NavLinkAppFooter>
					<button title="" class="flex flex-col items-center">
						<Icon data={share} scale={2} />
						<span class="text-xs font-semibold text-white">Share</span>
					</button>
				</div>
			</div>
			<NavBtnAppFooter
				on:click={() => (activeScreen = 'Rozpoczęcie')}
				{activeScreen}
				text={'Rozpoczęcie'}
			>
				<Icon data={playCircleO} scale={3} />
			</NavBtnAppFooter>

			<NavBtnAppFooter
				on:click={() => (activeScreen = 'Instrukcja')}
				{activeScreen}
				text={'Instrukcja'}
			>
				<Icon data={book} scale={3} />
			</NavBtnAppFooter>

			<NavBtnAppFooter
				on:click={() => (activeScreen = 'Rozgrywka')}
				{activeScreen}
				text={'Rozgrywka'}
			>
				<Icon data={gamepad} scale={3} />
			</NavBtnAppFooter>
			<div class="dropdown-end dropdown dropdown-top py-6 md:dropdown-right lg:dropdown-right">
				<label tabindex="0" class="flex justify-end"><Icon data={arrowRight} scale={2} /></label>

				<div
					tabindex="0"
					class="dropdown-content menu rounded-box relative z-[1] w-20 bg-black p-2 shadow "
				>
					<NavLinkAppFooter title="Go to " text="account" link="/">
						<Icon data={user} scale={2} />
					</NavLinkAppFooter>
					<NavLinkAppFooter title="Go to " text="workshop" link="/">
						<Icon data={linode} scale={2} />
					</NavLinkAppFooter>
					<NavLinkAppFooter title="Go to " text="records on game" link="/">
						<Icon data={lineChart} scale={2} />
					</NavLinkAppFooter>
					<NavLinkAppFooter title="Go to " text="stats" link="/">
						<Icon data={barChart} scale={2} />
					</NavLinkAppFooter>
				</div>
			</div>
		</div>
		<span class="text-md absolute bottom-1 h-4 font-bold text-white">version: 0.6.1.</span>
	</div>
</div>
