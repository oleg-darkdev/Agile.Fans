<script>
	import { motivatorsList, fearsList } from '../../../lib/ten/shared';
	import {
		ModalGetStartedPlay,
		CardCategory,
		BoardgameCard,
		ResultCard
	} from '../../../lib/ten/entities';

	const referencesList = [
		{
			img: 'http://solankidefenceacademy.com/images/motivation.jpeg ',
			desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolorum aliquam ea. ',

			title: 'Motivators',
			data: motivatorsList,
			userChoice: []
		},
		{
			img: 'http://solankidefenceacademy.com/images/motivation.jpeg ',
			desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolorum aliquam ea. ',

			title: 'Fears',
			data: fearsList,
			userChoice: []
		},
		{
			img: 'http://solankidefenceacademy.com/images/motivation.jpeg ',
			title: 'Materials',
			desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolorum aliquam ea. ',

			data: [''],
			userChoice: []
		}
	];

	let selected = false;

	let isOpen = false,
		showHistory = false,
		showFullResult = false,
		startPlay = false;

	const history = [
		{
			date: '03.01.2023',
			firstPlayer: 'Oleg',
			secondPlayer: 'Anton',
			result: 68,
			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolorum aliquam ea. '
		},
		{
			date: '03.01.2023',
			firstPlayer: 'Oleg',
			secondPlayer: 'Anton',
			result: 68,

			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolorum aliquam ea.'
		},
		{
			date: '03.01.2023',
			firstPlayer: 'Oleg',
			secondPlayer: 'Anton',
			result: 68,

			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolorum aliquam ea.'
		},
		{
			date: '03.01.2023',
			firstPlayer: 'Oleg',
			secondPlayer: 'Anton',
			result: 68,

			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolorum aliquam ea.'
		},
		{
			date: '03.01.2023',
			firstPlayer: 'Oleg',
			secondPlayer: 'Anton',
			result: 68,

			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolorum aliquam ea.'
		}
	];
</script>

<section class="flex min-h-screen  justify-center">
	<div
		class="{startPlay == false && showHistory == false
			? ''
			: 'hidden'} mx-auto flex w-full flex-col items-center justify-center pt-6"
	>
		<h3
			class="mb-2 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl"
		>
			Select the type
		</h3>

		<div class="relative mx-auto flex w-8/12 flex-row flex-wrap  items-center justify-center">
			<div class="">
				<h3 class="mb-6 text-3xl font-bold leading-none tracking-tighter text-neutral-600 ">
					Boardgame + NFC
				</h3>
				<div
					on:click={() => {
						console.log('nfc');
					}}
					class="relative flex w-64 flex-col items-start rounded-xl bg-white shadow-xl"
				>
					<img
						class="w-full rounded-t-xl object-cover object-center md:h-36 lg:h-48"
						src="https://www.logolynx.com/images/logolynx/aa/aaaf1581f19cd4e43d56fbb2b364d329.jpeg"
						alt="nfc"
					/>
				</div>
			</div>

			<div class="mx-auto h-80 w-0.5 bg-gray-600" />

			<div>
				<h3 class=" text-3xl font-bold leading-none tracking-tighter text-neutral-600 ">Web app</h3>
				<div class="mb-6 flex flex-wrap p-2 md:flex-nowrap ">
					{#each referencesList as reference}
						<CardCategory bind:isOpen bind:selected {reference} />
					{/each}
				</div>
			</div>
		</div>
		<div
			class="{isOpen && startPlay == false && showHistory == false
				? ''
				: 'hidden'} relative flex  justify-center "
		>
			<ModalGetStartedPlay bind:isOpen bind:startPlay />
		</div>

		<h3
			class="mb-2 text-center text-4xl font-bold leading-none tracking-tighter
        text-neutral-600 md:text-7xl lg:text-5xl"
		>
			Your history
		</h3>

		<div class="mx-auto flex flex-wrap justify-center ">
			{#each history as game}
				<div on:click={() => (showHistory = true)} class="stats m-2 max-w-2xl bg-blue-500">
					<div class="stat">
						<div class="stat-title text-white">{game.date}</div>
						<div class="stat-value text-white">
							{game.firstPlayer} / {game.secondPlayer}
							<span
								class="text-right text-4xl font-black leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl"
								>{game.result}%</span
							>
						</div>
						<div class="stat-desc text-white">{game.description}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	{#if showHistory}
		<div
			class="max-w-8xl relative mx-auto flex w-full flex-col items-center justify-center px-5 py-12 md:px-12 lg:px-16 "
		>
			<div class="mx-auto flex w-full text-left">
				<div class="relative mx-auto inline-flex flex-col items-center justify-center align-middle">
					<div
						class="mx-auto flex w-full flex-col items-center justify-center bg-white bg-gradient-to-r p-2  sm:p-6"
					>
						<div
							class="flex max-w-lg flex-col rounded-lg border border-gray-200 bg-white p-4 text-gray-500 shadow-md sm:p-8"
						>
							<span class="text-xs font-bold uppercase tracking-widest text-blue-500">
								23.06.2023
							</span>
							<h1
								class="max-w-md  text-4xl font-bold leading-none tracking-tighter text-neutral-600 "
							>
								Lorem ipsum is placeholder
							</h1>
							<p class="mx-auto mb-6 mt-2 max-w-xl text-base leading-relaxed text-gray-500">
								Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
								industries for previewing layouts and visual mockups.
							</p>

							<div class="flex flex-col  ">
								<div class="stats mb-2 max-w-xs justify-center bg-blue-500 shadow">
									<div class="stat ">
										<div class="stat-figure text-primary">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												class="inline-block h-8 w-8 stroke-white"
												><path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
												/></svg
											>
										</div>
										<div class="stat-title   text-white">Total Page Views</div>
										<div class="stat-value  text-white">89,400</div>
										<div class="stat-desc  text-white">21% more than last month</div>
									</div>
								</div>

								<div class="stats stats-vertical mb-6 shadow lg:stats-horizontal">
									<div class="stat bg-neutral-50  ">
										<div class="stat-title text-blue-500 ">Downloads</div>
										<div class="stat-value text-blue-500">31K</div>
										<div class="stat-desc text-blue-500">Jan 1st - Feb 1st</div>
									</div>
									<div class="stat bg-neutral-50 ">
										<div class="stat-title text-blue-500 ">Downloads</div>
										<div class="stat-value text-blue-500">31K</div>
										<div class="stat-desc text-blue-500">Jan 1st - Feb 1st</div>
									</div>
									<div class="stat bg-neutral-50 ">
										<div class="stat-title text-blue-500 ">Downloads</div>
										<div class="stat-value text-blue-500">31K</div>
										<div class="stat-desc text-blue-500">Jan 1st - Feb 1st</div>
									</div>
								</div>
							</div>
							<div class="mb-2 flex items-center justify-between">
								<h5 class="text-xl font-bold leading-none text-gray-900 ">Players</h5>
							</div>
							<ul
								class="divide-y divide-gray-200 rounded-lg border border-0 border-gray-200 bg-white text-gray-500 "
							>
								<li
									class="w-full list-none  py-2 px-4 text-sm font-medium first:rounded-t-lg last:rounded-b-lg hover:bg-neutral-100"
								>
									<div class="flex items-center space-x-4">
										<img
											alt="Neil Sims"
											src=""
											class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-100 text-gray-600 "
										/>
										<div class="min-w-0 flex-1">
											<p class="truncate text-sm font-medium text-gray-900">Neil Sims</p>
											<p class="truncate text-sm text-gray-500 ">email@windster.com</p>
										</div>
										<!-- <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
												$320
											</div> -->
									</div>
								</li>
							</ul>

							<a
								href="#cards"
								on:click={() => (showFullResult = true)}
								class="mt-6 block w-full transform items-center rounded-xl border-2 border-white px-5 py-3.5 text-center text-base font-medium text-blue-500 shadow-md transition duration-500 ease-in-out hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 lg:px-10"
								>Show card statistics</a
							>
						</div>
					</div>
				</div>
			</div>
			{#if showFullResult}
				<!-- <div class="flex flex-col"> -->
				<a name="cards" />

				{#each referencesList[0].data as card}
					<ResultCard {card} />
				{/each}
				<!-- </div> -->
			{/if}
		</div>
	{/if}

	{#if startPlay && isOpen == false && showHistory == false}
		<div class="mx-auto mt-12 grid max-w-lg gap-2 lg:max-w-none lg:grid-cols-3">
			{#each selected.data as card, id}
				<BoardgameCard {card} />
			{/each}
		</div>
	{/if}
</section>
