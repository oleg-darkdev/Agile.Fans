<script>
	import { TextBlock } from '../lib/agile-fans/landing/entities';
	import { Slider, ImageAndTextSection, SectionAfterVideo } from '../lib/agile-fans/landing/widgets';
	import { WorkshopCard, FeaturesForProductType } from '../lib/core/layout/entities';
	import { Footer, FAQ, Product, FullScreenVideo } from '../lib/core/layout/widgets';

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

	import { agileFans, allKit, productsList, productsCategories } from '../lib/core/data';
	import { extractFaqValues } from '../lib/core/utils';
	const productData = agileFans;
	const allProductsArr = [].concat(
		productsList.kanbanKit,
		productsList.scrumKit,
		productsList.agileKit,
		allKit.products
	);

	const allFaq = extractFaqValues(allProductsArr);
</script>

<FullScreenVideo video={'/agile-fans/landing/video.mp4'}/>

<!-- bg-gradient-to-r from-pink-500 to-pink-700  -->
<SectionAfterVideo {productData}/>

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

<Product />

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

<ImageAndTextSection
	title="Platforma do tworzenia gier edukacyjnych."
	desc="Aby odejść od paliw kopalnych, potrzebujemy ekstremalnej skali. Mając siedzibę główną
							w Teksasie, prowadzimy sześć ogromnych, zintegrowanych pionowo fabryk na trzech
							kontynentach. Zatrudniamy ponad 100 000 pracowników, a nasze zespoły samodzielnie
							projektują, budują, sprzedają i serwisują nasze produkty."
	img="/agile-fans/landing/platform.jpg"
/>

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

<FAQ productsFaq={allFaq} />

<Footer />

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
