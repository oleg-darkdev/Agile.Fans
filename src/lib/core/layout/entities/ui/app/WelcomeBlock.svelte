<script>
	import { AppBlocksWrapper } from '@coreSharedLayout';

	export let title, desc, video, step;
</script>

<AppBlocksWrapper>
	<div class="py-6">
		<div class="mx-auto max-w-screen-xl px-4 md:px-8 md:text-center ">
			<div class="mb-4 max-w-xl md:mx-auto">
				<h3 class="text-3xl font-bold text-gray-100 sm:text-4xl">{title}</h3>
				<p class="mt-3 text-gray-100">
					{desc}
				</p>
			</div>

			<video
				class="w-full rounded-2xl"
				poster={video.poster}
				controls="true"
				playsinline
				muted
				loop
			>
				<source src={video.link} type="video/mp4" />
			</video>

			<div class="mt-4 flex items-center justify-center">
				<button class="btn-lg  btn mx-6 mt-4 max-w-2xl bg-pink-600" on:click={() => step++}
					>Dalej
				</button>
			</div>
		</div>
	</div>
</AppBlocksWrapper>
