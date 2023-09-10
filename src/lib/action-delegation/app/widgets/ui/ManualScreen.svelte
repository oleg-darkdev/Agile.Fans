<script>
	import { TableOfContent, VideoCard, FaqLine, StepsList } from '@coreEntities';
	import { LargeBtn, ListTextcard } from '@coreSharedLayout';
	import { AppBlocksWrapper } from '@coreSharedLayout';
	import { actionDelegation } from '@coreSharedData';
	// import { dayInstruction, blockersInstruction, taskInstruction } from '../../shared';

	// const instructionArr = Object.values([dayInstruction, blockersInstruction, taskInstruction]);

	let toc = [
		{
			link: '',
			anchor: '',
			title: 'Lorem ipsum is placeholder',
			shortDesc:
				'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
		}
	];
	// import { TextBlock } from '../../../lib/core/layout/entities';

	$: selected = '';
	$: showFullInstruction = '';

	const videoData = [
		{
			title: 'Przykład rozgrywki',
			link: '/agile-fans/landing/video.mp4',
			poster: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/fashion.jpg'
		},
		{
			title: 'Przygotowanie do gry',
			link: '/agile-fans/landing/video.mp4',
			poster: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/fashion.jpg'
		}
	];

</script>

<div
	class="container mx-auto flex max-w-6xl flex-col items-center space-y-6 p-2 md:p-4 lg:p-6 xl:p-6 "
>
	<h3 class="max-w-4xl text-center text-3xl font-bold text-gray-100 sm:text-4xl">
		Kiedy masz pytanie o zasady,

		<br />
		zadaj sobie pytanie:
		<br />

		<span class="text-pink-600">„Co byś zrobił w prawdziwym życiu?”</span>
	</h3>
	<button
		on:click={() => (showFullInstruction = 'facilitator')}
		class="btn-outline btn-lg btn mx-6 mx-auto mt-6 mt-4 w-full max-w-lg "
		>Instrukcja dla facylitatora</button
	>

	<!-- <div class=" grid grid-cols-1 justify-center gap-1 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 ">
			{#each instructionArr as card, index}
				<TableOfContent {card} {index} bind:selected bind:showFullInstruction />
			{/each}
		</div> -->
</div>

<div
	class="bg-neutal-600 mb-6 flex h-full flex-row flex-wrap justify-around rounded-lg border-2 border border-neutral-600 p-1 text-gray-500 shadow-md  shadow-neutral-700 hover:bg-neutral-900 "
>
	{#each videoData as video}
		<VideoCard {video} />
	{/each}
</div>

<section
	class="bg-neutal-600 mx-2 h-full rounded-lg border-2  border border-neutral-600 p-4 text-gray-500 shadow-md  shadow-neutral-700 hover:bg-neutral-900 "
>
	<div class="container mx-auto px-6 py-10">
		<h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">FAQ's</h1>

		{#each actionDelegation.faq.content as faqLine}
			<FaqLine {faqLine} />
		{/each}
	</div>
</section>
