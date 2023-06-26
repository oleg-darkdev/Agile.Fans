<script>
	export let link;

	import { WorkshopCard } from '../../../entities';

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
		}
	];
</script>

<section class="flex justify-center  md:my-24 md:mx-auto  md:px-6 lg:my-24 lg:mx-auto ">
	<div
		class="flex max-w-7xl flex-wrap justify-center rounded-lg py-14 px-4 md:bg-gray-200 md:px-12 lg:bg-gray-200 lg:px-12"
	>
		<div class="mb-12 w-full shrink-0 grow-0 basis-auto  lg:mb-0 lg:-mr-[70px] lg:w-5/12">
			<div class="flex lg:py-12">
				<iframe
					class="embed-responsive-item z-10 h-[160px] w-full rounded-lg shadow-lg md:h-[250px] lg:h-[280px]"
					src={link}
					allowfullscreen=""
					data-gtm-yt-inspected-2340190_699="true"
					id="240632615"
				/>
			</div>
		</div>
		<a name="workshops" />

		<div
			class=" -mt-[70px] w-full shrink-0 grow-0 basis-auto px-4 md:-mt-0 lg:-mt-0 lg:w-7/12 lg:px-4 lg:px-0"
		>
			<div
				class="start-start flex h-full flex-col rounded-lg bg-pink-700 py-8 px-4 text-center text-white md:p-6 lg:p-6 lg:pl-12 lg:text-left"
			>
				<div class="lg:pl-12">
					<h2 class="mb-6 text-3xl font-bold">Pozostały pytania ?</h2>
					<p class="mb-2 pb-2 lg:pb-0">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, sint, repellat vel quo
						quisquam accusamus in qui at ipsa enim quibusdam illo laboriosam omnis. Labore itaque
						illum distinctio eum neque!
					</p>
					<p class="mb-6 pb-2 lg:pb-0">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, sint, repellat vel quo
						quisquam.
					</p>
				</div>
				<!-- <a
					href="/workshops"
					class="group  flex w-full flex-row justify-center rounded-lg border-2 border-neutral-50 bg-white px-7 py-4 text-sm font-semibold uppercase leading-normal text-pink-600 transition duration-150 ease-in-out hover:border-neutral-100  hover:bg-neutral-100 hover:bg-opacity-10 hover:text-white focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 md:font-medium lg:w-7/12 lg:text-2xl lg:text-sm lg:font-medium"
				>
					Rejestracja na warsztaty <svg
						xmlns="http://www.w3.org/2000/svg"
						class="hidden-sm mx-4 h-16 w-16 fill-pink-600 group-hover:fill-white"
						fill="none"
						viewBox="0 0 24 24"
						><path
							d="M18.75,36,16.6,33.85,26.5,24l-9.9-9.9,2.15-2.15L30.8,24Z"
							transform="translate(-16.6 -11.9)"
						/></svg
					>
				</a> -->
			</div>
		</div>

		<div class="grid gap-6 lg:w-8/12 lg:grid-cols-2 xl:gap-x-12">
			{#each workshopsList.slice(0, 2) as workshop}
				<WorkshopCard {workshop} />
			{/each}
		</div>
	</div>
</section>
<!--
	<div class="px-6 py-12 text-center md:px-12 lg:text-left">
		<div class="container mx-auto">
			<div class="grid items-center gap-12 lg:grid-cols-2">
				<div class="mt-12 lg:mt-0">
					<h2
						class="mb-12 text-5xl font-bold tracking-tight text-[hsl(218,81%,95%)] md:text-6xl xl:text-7xl"
					>
						Pozostały pytania ?
					</h2>
					<p class="text-lg text-[hsl(218,81%,95%)]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia consequatur
						adipisci tenetur repudiandae rerum quos.
					</p>
				</div>
				<div class="mb-12 lg:mb-0">
					<div
						class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
						style="padding-top: 56.25%"
					>
						<iframe
							class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full"
							src={link}
							allowfullscreen=""
							data-gtm-yt-inspected-2340190_699="true"
							id="240632615"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section> -->

<!-- <section class="background-radial-gradient container my-24 mx-auto mb-32 md:px-6"> -->
<style>
	.background-radial-gradient {
		background-color: hsl(218, 41%, 15%);
		background-image: radial-gradient(
				650px circle at 0% 0%,
				hsl(218, 41%, 35%) 15%,
				hsl(218, 41%, 30%) 35%,
				hsl(218, 41%, 20%) 75%,
				hsl(218, 41%, 19%) 80%,
				transparent 100%
			),
			radial-gradient(
				1250px circle at 100% 100%,
				hsl(218, 41%, 45%) 15%,
				hsl(218, 41%, 30%) 35%,
				hsl(218, 41%, 20%) 75%,
				hsl(218, 41%, 19%) 80%,
				transparent 100%
			);
	}
</style>
