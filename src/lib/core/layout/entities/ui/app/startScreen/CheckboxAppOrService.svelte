<script>
	import { AppBlocksWrapper } from '@coreSharedLayout';
	import { Progress } from '@coreEntities';

	const modes = [
		{
			title: 'Boardgame + App',
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			video: 'https://www.youtube.com/watch?v=uTC5XUGXgDQ',
			value: 0
		},
		{
			title: 'Service',
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			video: 'https://www.youtube.com/watch?v=uTC5XUGXgDQ',
			value: 1,
			link: './'
		}
	];

	const videosAboutModes = [
		{
			title: 'About mode: App + Boardgame',
			link: '/agile-fans/landing/video.mp4',
			poster: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/fashion.jpg'
		},
		{
			title: 'About mode: Service',
			link: '/agile-fans/landing/video.mp4',
			poster: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/fashion.jpg'
		}
	];
	export let gameSteps, step, selectedMode;
</script>

<AppBlocksWrapper>
	<Progress {gameSteps} bind:step />

	<div class="flex max-w-md flex-col items-center justify-center">
		{#each modes as mode, i}
			<div
				class="max-w-smdivide-gray-200 my-4 rounded-lg border border-gray-200 bg-white text-gray-500 shadow-md dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
			>
				<!-- <img class="rounded-t-lg" src="/images/image-1.webp" alt="" /> -->

				<video
					class="w-full rounded-2xl"
					poster={videosAboutModes[i].poster}
					controls="true"
					playsinline
					muted
					loop
				>
					<source src={videosAboutModes[i].link} type="video/mp4" />
				</video>
				<p
					class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400"
					data-svelte-h="svelte-1v6x62e"
				>
					Video about mode
				</p>
				<div class="p-4 sm:p-6">
					<!--
           <h5
					class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
					data-svelte-h="svelte-nw3hm"
				>
					Noteworthy technology acquisitions 2021
				</h5>

			-->

					<div class="form-control">
						<label class="label cursor-pointer">
							<span class="label-text text-2xl font-bold text-pink-600">{mode.title}</span>
							<input
								type="radio"
								name="radio-mode"
								on:click={() => (selectedMode = mode)}
								class="radio-secondary radio"
							/>
						</label>
					</div>
				</div>
			</div>
		{/each}
		{#if selectedMode.title.length > 0}
			<slot name="btn" />
		{/if}
	</div>
</AppBlocksWrapper>
