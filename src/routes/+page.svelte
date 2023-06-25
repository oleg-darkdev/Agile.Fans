<script>
	import { TextBlock } from '../lib/agile-fans/landing/entities';
	import { Slider } from '../lib/agile-fans/landing/widgets';
	import { WorkshopCard } from '../lib/core/layout/entities';

	const descAgileFans = [
		`A new era in hybrid board educational boardgames. An exceptional combination of the better of
			educational board games and technology. Connecting board games with electronics and related
			applications - making it much easier for players to learn and improve their performance.`,
		`We've created the best game practices in one product to solve every possible problem.`
	];

	const workshopsList = [
		{
			img: 'https://miro.medium.com/v2/resize:fit:3840/1*CoSZTa4Pa9ik2AfudhfSFg.jpeg',
			link: '',
			title: 'Lorem Ipsum',
			date: '04.02.2023',
			place: 'Sopot, 3 maja 12',
			tags: ['Lorem', 'Lorem', 'Lorem'],
			trainer: {
				fullName: 'Oleg Medvedev',
				link: '',
				subTitle: 'Lorem Ipsum',
				avatar:
					'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80'
			},
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
		},
		{
			img: 'https://miro.medium.com/v2/resize:fit:3840/1*CoSZTa4Pa9ik2AfudhfSFg.jpeg',
			link: '',
			title: 'Lorem Ipsum',
			date: '04.02.2023',
			place: 'Sopot, 3 maja 12',
			tags: ['Lorem', 'Lorem', 'Lorem'],
			trainer: {
				fullName: 'Oleg Medvedev',
				link: '',
				subTitle: 'Lorem Ipsum',
				avatar:
					'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80'
			},
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
		},
		{
			img: 'https://miro.medium.com/v2/resize:fit:3840/1*CoSZTa4Pa9ik2AfudhfSFg.jpeg',
			link: '',
			title: 'Lorem Ipsum',
			date: '04.02.2023',
			place: 'Sopot, 3 maja 12',
			tags: ['Lorem', 'Lorem', 'Lorem'],
			trainer: {
				fullName: 'Oleg Medvedev',
				link: '',
				subTitle: 'Lorem Ipsum',
				avatar:
					'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80'
			},
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
		}
	];
</script>

<video
	class="video-hero"
	poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/fashion.jpg"
	playsinline
	autoplay
	muted
	loop
>
	<source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/fashion.webm" type="video/webm" />
	<source src="http://thenewcode.com/assets/videos/fashion.mp4" type="video/mp4" />
</video>
<!--
<header>
	<h1>ZIGGY</h1>
	<nav>
		<a href="#">Men</a>
		<a href="#">Women</a>
		<a href="#">Stores</a>
		<a href="#">Contact</a>
	</nav>
</header> -->

<header>
	<!-- спиздить стандартный хеадер и сделать его прозрачным -->
</header>

<!-- bg-gradient-to-r from-blue-500 to-blue-700  -->

<section class="min-h-screen">
	<div class="mix-blend-mode  mt-[4%] mb-12 flex w-full flex-col text-center">
		<div
			class="mx-auto mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-gray-50 text-blue-600"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-aperture h-10 w-10"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<circle cx="12" cy="12" r="9" />
				<line x1="3.6" y1="15" x2="14.15" y2="15" />
				<line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)" />
				<line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)" />
				<line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)" />
				<line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)" />
			</svg>
		</div>
		<h2
			class="max-w-5xl text-center text-4xl font-bold leading-none tracking-tighter text-neutral-50 md:text-5xl lg:max-w-7xl lg:text-6xl"
		>
			Informacje o nas
		</h2>

		<p class=" mx-auto mt-8 max-w-xl text-center text-2xl  leading-relaxed text-gray-200">
			Przyspieszanie globalnego procesu przechodzenia na zrównoważone źródła energii
		</p>

		<a
			class="text-1xl mx-auto mt-8 font-semibold text-blue-600 hover:text-neutral-600"
			title="read more"
		>
			Read more about the offer »
		</a>
	</div>

	<div class="mt-[14%] flex w-full justify-center ">
		<div class="stats shadow">
			<div style="mix-blend-mode: overlay;" class="stat">
				<div class="stat-figure text-primary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-8 w-8 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
						/></svg
					>
				</div>
				<div class="stat-title">Total Likes</div>
				<div class="stat-value text-primary">25.6K</div>
				<div class="stat-desc">21% more than last month</div>
			</div>

			<div class="stat">
				<div class="stat-figure text-secondary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-8 w-8 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 10V3L4 14h7v7l9-11h-7z"
						/></svg
					>
				</div>
				<div class="stat-title">Page Views</div>
				<div class="stat-value text-secondary">2.6M</div>
				<div class="stat-desc">21% more than last month</div>
			</div>

			<div class="stat">
				<div class="stat-figure text-secondary">
					<div class="online avatar">
						<div class="w-16 rounded-full">
							<img src="  " />
						</div>
					</div>
				</div>
				<div class="stat-value">86%</div>
				<div class="stat-title">Tasks done</div>
				<div class="stat-desc text-secondary">31 tasks remaining</div>
			</div>
		</div>
	</div>
</section>

<section class="container my-4 mx-auto h-screen md:px-6">
	<div
		class="relative h-[90%] overflow-hidden rounded-xl bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/284.jpg')] bg-cover bg-[50%] bg-no-repeat"
	/>
	<TextBlock
		mt="50%"
		title={`Agile.fans: <br class="hidden lg:block"> One goal - more tools.`}
		desc={descAgileFans}
	>
		<div slot="bottom">
			<div class="mx-auto mt-6 flex w-full max-w-2xl justify-center gap-2">
				<div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
					<a
						href="/"
						target="_blank"
						class="block transform items-center rounded-xl border-2 border-white px-5 py-3.5 text-center text-base font-medium text-blue-600 shadow-md transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 lg:px-10"
						>See features</a
					>
				</div>
			</div>
		</div>
	</TextBlock>
</section>

<section class="mb-24 flex flex-col items-center justify-center">
	<div class=" mb-12 flex flex-col text-center lg:max-w-7xl">
		<h2
			class="text-center text-4xl font-bold leading-none tracking-tighter text-neutral-50 md:text-5xl   lg:text-6xl"
		>
			Zasilamy Ziemię
		</h2>

		<p class=" mx-auto mt-8 max-w-5xl text-center text-2xl  leading-relaxed text-gray-200">
			Projektujemy ekologiczne systemy, które są masowo skalowalne — co daje największe możliwe
			korzyści dla środowiska. Nasze produkty do wytwarzania i magazynowania energii współpracują z
			naszymi pojazdami elektrycznymi, aby wzmocnić ich wpływ.
		</p>
	</div>
	<Slider />
</section>

<section>
	<video
		class="min-h-screen w-full"
		poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/fashion.jpg"
		playsinline
		autoplay
		muted
		loop
	>
		<source
			src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/fashion.webm"
			type="video/webm"
		/>
		<source src="http://thenewcode.com/assets/videos/fashion.mp4" type="video/mp4" />
	</video>
	<div class="container -mt-[20%] flex items-center justify-center px-6 md:px-12">
		<div
			class="block max-w-5xl  rounded-lg  bg-[hsla(0,0%,5%,0.7)] px-6  py-12  backdrop-blur-[30px] md:py-16 md:px-12"
		>
			<h2 class="mt-2 mb-12 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
				Spraw, by było to (absurdalnie) zabawne
			</h2>

			<p class="mb-2 max-w-2xl text-left leading-relaxed text-neutral-100 ">
				Nasze pojazdy należą do najbezpieczniejszych na świecie. Naszym celem jest nie tylko
				zapewnienie bezpieczeństwa, ale również zadbanie o to, by każda Tesla sprawiała największą
				frajdę, jaką można mieć w pojeździe. Tworzymy funkcje, dzięki którym podróżowanie pojazdem
				jest przyjemniejsze — od gier po filmy, ukryte odniesienia i nie tylko. Dzięki
				bezprzewodowym aktualizacjom oprogramowania regularnie wprowadzamy funkcje za naciśnięciem
				jednego przycisku.
			</p>
		</div>
	</div>
</section>

<section class="py-4 sm:px-6 md:px-4 md:px-12 lg:px-4 lg:px-24 lg:py-12">
	<!-- Jumbotron -->
	<div class="px-6 py-12 text-center md:px-12 lg:text-left">
		<div class="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
			<div class="grid items-center lg:grid-cols-2">
				<div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
					<div
						class="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14"
					>
						<h2 class="mt-2 mb-16 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
							Maszyna, która buduje maszynę
						</h2>
						<p class="mb-2 max-w-2xl text-left leading-relaxed text-neutral-100 ">
							Aby odejść od paliw kopalnych, potrzebujemy ekstremalnej skali. Mając siedzibę główną
							w Teksasie, prowadzimy sześć ogromnych, zintegrowanych pionowo fabryk na trzech
							kontynentach. Zatrudniamy ponad 100 000 pracowników, a nasze zespoły samodzielnie
							projektują, budują, sprzedają i serwisują nasze produkty.
						</p>
					</div>
				</div>
				<div class="md:mb-12 lg:mb-0">
					<img
						src="https://tecdn.b-cdn.net/img/new/ecommerce/vertical/004.jpg"
						class="w-full rounded-lg shadow-lg dark:shadow-black/20"
						alt=""
					/>
				</div>
			</div>
		</div>
	</div>
	<!--
	<div class="grid items-center md:mx-8 lg:mx-8 lg:grid-cols-2">
		<div class="hidden-sm">
			<img
				alt="Agile.fans - banner"
				src="https://www.giftedguru.com/wp-content/uploads/2020/10/kanban-board-nearly-done-888x1024.jpg"
				class="fancy-border-radius rotate-lg-6 w-full  rounded-2xl shadow-lg shadow-black/20"
			/>
		</div>
		<div
			class="relative z-[1] block bg-gradient-to-r from-blue-500 to-blue-700 px-6  py-12 shadow-black/20 md:rounded-lg md:px-12 lg:-ml-14 lg:rounded-lg"
		>
			<span class="text-xs font-bold uppercase tracking-widest text-neutral-100"> about </span>
			<h1
				class="mb-4 text-4xl font-bold leading-none tracking-tighter text-white md:text-7xl lg:text-5xl"
			/>
		</div> -->
	<!-- </div> -->
	<!-- </div> -->
</section>

<section class="container mx-auto mt-4 h-screen md:px-6">
	<div
		class="relative h-[60%] overflow-hidden rounded-xl bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/284.jpg')] bg-cover bg-[50%] bg-no-repeat"
	/>
	<TextBlock
		mt="20%"
		title={`Zespół Tesli`}
		desc={[
			`Stosując podejście oparte na pierwszych zasadach, rozwiązujemy jedne z największych problemów świata. Jeśli masz na koncie wybitne osiągnięcia, dołącz do nas, aby sprostać wyzwaniom inżynieryjnym, produkcyjnym i operacyjnym nowej generacji. `
		]}
	>
		<div slot="bottom">
			<div class="mx-auto mt-6 flex w-full max-w-2xl justify-center gap-2">
				<div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
					<a
						href="/"
						target="_blank"
						class="block transform items-center rounded-xl border-2 border-white px-5 py-3.5 text-center text-base font-medium text-blue-600 shadow-md transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 lg:px-10"
						>See features</a
					>
				</div>
			</div>
		</div>
	</TextBlock>
</section>

<section class="mb-24 -mt-36 flex items-center justify-center">
	<div class="grid max-w-6xl gap-4 lg:grid-cols-3 xl:gap-x-12">
		{#each workshopsList.slice(0, 3) as workshop}
			<WorkshopCard {workshop} />
		{/each}
	</div>
</section>

<style>
	.mix-blend-mode {
		mix-blend-mode: overlay;
	}
	.video-hero {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
	/* div#fashion {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	} */
	header {
		position: fixed;
		width: 100%;
		text-align: center;
		color: white;
		transition: 0.4s;
	}
	header:hover {
		background: rgba(255, 255, 255, 0.8);
		color: #000;
	}
	/* h1 {
		font-family: Moderne Sans, sans-serif;
		text-align: center;
		font-size: 2rem;
		width: 100%;
		letter-spacing: 0.5rem;
	}
	nav a {
		text-decoration: none;
		color: inherit;
		padding: 1rem;
	} */
	/* h2 {
		font-size: 8vmin;
		text-align: center;
		margin: 2rem 4rem 0;
		mix-blend-mode: overlay;
		color: #fff;
		font-weight: 100;
	} */
</style>
