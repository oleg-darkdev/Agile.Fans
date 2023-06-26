<script>
	import { TextBlock } from '../lib/agile-fans/landing/entities';
	import { Slider, ProductsList } from '../lib/agile-fans/landing/widgets';
	import { WorkshopCard, FeaturesForProductType } from '../lib/core/layout/entities';
	import { ProductVariants, FAQ } from '../lib/core/layout/widgets';

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

	import { productsList } from '../lib/core/data';
	import { convertObjToArray } from '../lib/core/utils';

	const arrayOfProducts = convertObjToArray(productsList);
	const productData = productsList.agileKit;

	let showMenu = false;
</script>

<video
	class="video-hero"
	poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/fashion.jpg"
	playsinline
	autoplay
	muted
	loop
>
	<!-- <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/fashion.webm" type="video/webm" /> -->
	<source src="/agile-fans/landing/video.mp4" type="video/mp4" />
</video>

<!-- bg-gradient-to-r from-pink-500 to-pink-700  -->

<section class="min-h-screen">
	<div
		class="mix-blend-mode  mt-[4%]  flex w-full flex-col items-center justify-center text-center"
	>
		<nav class="mb-12 w-auto">
			<ul
				class="mt-4 flex flex-col rounded-lg p-4   md:mt-0 md:flex-row md:space-x-8 md:border-0  md:p-0 "
			>
				{#each productData.headerLinks as link}
					<li>
						<a
							href={link.link}
							class="block rounded  py-2 pl-3 pr-4 text-lg font-bold  text-white hover:text-pink-600 md:p-0"
							>{link.title}</a
						>
					</li>
				{/each}
			</ul>
		</nav>
		<h2
			class="max-w-5xl text-center text-4xl font-bold leading-none tracking-tighter text-neutral-50 md:text-5xl lg:max-w-7xl lg:text-6xl"
		>
			Witamy w <span class="font-black text-pink-500">#Agile.fans</span>
		</h2>

		<!-- <p class=" mx-auto mt-8 max-w-xl text-center text-2xl  leading-relaxed text-gray-200">
			Przyspieszanie globalnego procesu przechodzenia na zrównoważone źródła energii
		</p>

		<a
			class="text-1xl mx-auto mt-8 font-semibold text-pink-600 hover:text-neutral-50"
			title="read more"
		>
			Read more about the offer »
		</a> -->
	</div>

	<div class="mt-[24%] flex w-full justify-center ">
		<div class="stats shadow">
			<div style="" class="mix-blend-mode stat">
				<div class="stat-figure text-primary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-8 w-8 stroke-pink-600"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
						/></svg
					>
				</div>
				<div class="stat-title text-white">Lorem impsum</div>
				<div class="stat-value text-pink-600">25.6K</div>
				<div class="stat-desc text-neutral-100">Lorem impsum textarea</div>
			</div>

			<div style="" class="mix-blend-mode stat">
				<div class="stat-figure text-secondary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-8 w-8 stroke-pink-500"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 10V3L4 14h7v7l9-11h-7z"
						/></svg
					>
				</div>
				<div class="stat-title text-white">Lorem impsum</div>
				<div class="stat-value text-white">25.6K</div>
				<div class="stat-desc text-neutral-100">Lorem impsum textarea</div>
			</div>

			<div style="" class="mix-blend-mode stat">
				<div class="stat-figure text-primary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-8 w-8 stroke-pink-500"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
						/></svg
					>
				</div>
				<div class="stat-title text-white">Lorem impsum</div>
				<div class="stat-value text-pink-600">25.6K</div>
				<div class="stat-desc text-neutral-100">Lorem impsum textarea</div>
			</div>
		</div>
	</div>
</section>

<section class=" mx-auto mb-24 h-screen md:px-6">
	<a name="about" />
	<TextBlock
		mt="0"
		title={`Agile.fans: <br class="hidden lg:block"> One goal - more tools.`}
		desc={descAgileFans}
	/>
	<div
		class="z-1 -mt-[20%] h-[110%] w-full overflow-hidden rounded-xl bg-[url('/agile-fans/landing/more_tools.jpg')] bg-cover bg-fixed  bg-[50%] bg-no-repeat"
	/>
	<TextBlock
		mt="20%"
		title={`Zasilamy Ziemię.`}
		desc={[
			`Projektujemy ekologiczne systemy, które są masowo skalowalne — co daje największe możliwe
			korzyści dla środowiska. Nasze produkty do wytwarzania i magazynowania energii współpracują z
			naszymi pojazdami elektrycznymi, aby wzmocnić ich wpływ.`
		]}
	>
		<!-- <div slot="bottom">
			<div class="mx-auto mt-6 flex w-full max-w-2xl justify-center gap-2">
				<div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
					<a
						href="/"
						target="_blank"
						class="block transform items-center rounded-xl border-2 border-white px-5 py-3.5 text-center text-base font-medium text-white hover:bg-pink-600 shadow-md transition duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 lg:px-10"
						>Wszystkie warsztaty</a
					>
				</div>
			</div>
		</div> -->
	</TextBlock>
</section>
<!--
<section class="mt-64 flex flex-col items-center justify-center pt-24">
	<div class=" mb-12 flex flex-col text-center lg:max-w-7xl">
		<h2
			class="text-center text-4xl font-bold leading-none tracking-tighter text-gray-600 md:text-5xl   lg:text-6xl"
		>

		</h2>

		<p class=" mx-auto mt-8 max-w-5xl text-center text-2xl  leading-relaxed text-gray-400">

		</p>
	</div>
	<Slider />
</section> -->

<section>
	<video
		class="min-h-screen w-full"
		poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/fashion.jpg"
		playsinline
		autoplay
		muted
		loop
	>
		<source src="/agile-fans/landing/video.mp4" type="video/mp4" />
	</video>

	<TextBlock
		mt="20%"
		title={`Spraw, by było to (absurdalnie) zabawne`}
		desc={[
			`Nasze pojazdy należą do najbezpieczniejszych na świecie. Naszym celem jest nie tylko
				zapewnienie bezpieczeństwa, ale również zadbanie o to, by każda Tesla sprawiała największą
				frajdę, jaką można mieć w pojeździe. Tworzymy funkcje, dzięki którym podróżowanie pojazdem
				jest przyjemniejsze — od gier po filmy, ukryte odniesienia i nie tylko. `,
			`Dzięki
				bezprzewodowym aktualizacjom oprogramowania regularnie wprowadzamy funkcje za naciśnięciem
				jednego przycisku.`
		]}
	/>
</section>

<!-- <ProductVariants>
	<FeaturesForProductType />
</ProductVariants> -->

<ProductsList productsList={arrayOfProducts} />
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
							Platforma do tworzenia gier edukacyjnych.
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
						src="/agile-fans/landing/platform.jpg"
						class="w-full rounded-lg shadow-lg dark:shadow-black/20"
						alt=""
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="container mx-auto mt-4 h-screen md:px-6">
	<div
		class=" relative h-[60%] overflow-hidden rounded-xl bg-[url('/agile-fans/landing/community.jpg')] bg-cover bg-fixed  bg-[50%] bg-no-repeat"
	/>
	<a name="workshops" />
	<!-- bg-gradient-to-tr from-[hsla(330,81%,60%,0.3)] to-[hsla(347,77%,50%,0.3)] -->
	<TextBlock
		mt="20%"
		title={`Społeczność <span class='text-pink-500 font-black'>#Agile.fans</span>`}
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
						class="block transform items-center rounded-xl border-2 border-white px-5 py-3.5 text-center text-base font-medium text-white shadow-md transition duration-500 ease-in-out hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 lg:px-10"
						>Wszystkie warsztaty</a
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

// faq
<FAQ />

<style>
	@media (max-width: 640px) {
		.justify-content-sm {
			justify-content: space-between;
		}
	}

	.justify-content {
		justify-content: space-between;
	}

	.mix-blend-mode {
		mix-blend-mode: screen;
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
