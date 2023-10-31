<script>
	import Icon from 'svelte-awesome';
	import save from 'svelte-awesome/icons/save';
	import camera from 'svelte-awesome/icons/camera';
	import edit from 'svelte-awesome/icons/edit';

	import { AppBlocksWrapper, CircleBtn, EditTopicData } from '@coreSharedLayout';
	import { Progress } from '@coreEntities';

	$: videoSource = null;
	$: canvas = null;
	$: photo = null;
	let useCamera = false;
	let editData = false;

	const obtenerVideoCamara = async () => {
		try {
			useCamera = true;
			const stream = await navigator.mediaDevices.getUserMedia({
				video: true
			});
			videoSource.srcObject = stream;
			videoSource.play();
			// useCamera = false;
		} catch (error) {
			console.log(error);
		}
	};

	const tomarFoto = () => {
		if (!videoSource) return;

		// Создаем canvas для отрисовки текущего кадра видео
		const context = canvas.getContext('2d');
		canvas.width = videoSource.videoWidth;
		canvas.height = videoSource.videoHeight;
		context.drawImage(videoSource, 0, 0, canvas.width, canvas.height);

		// Получаем Data URL текущего кадра и отображаем его в элементе img
		const dataURL = canvas.toDataURL('image/jpeg');
		photo.src = dataURL;
		useCamera = false;
	};

	const editItem = () => {
		editData = !editData;
	};

	const topics = [
		{
			title: 'Lorem ipsum is placeholder text commonly used in the graphic',
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			img: null,
			id: ''
		}
	];

	export let gameSteps, step;
</script>

<AppBlocksWrapper>
	<Progress {gameSteps} bind:step />

	<div class="flex max-w-lg flex-col rounded-lg  p-4  text-gray-400 shadow-md sm:p-8">
		<ul
			class="divide-y divide-gray-200 rounded-lg border-0 border-gray-200 bg-white text-gray-500 dark:divide-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:!bg-transparent dark:text-gray-400"
		>
			{#each topics as topic}
				<li
					class="w-full list-none py-2 px-4 text-sm font-medium first:rounded-t-lg last:rounded-b-lg"
				>
					<div class="flex h-auto items-center space-x-2">
						{#if topic.img == null && !useCamera}
							<CircleBtn
								text="Use camera"
								buttonFunction={obtenerVideoCamara}
							>
								<Icon data={camera} scale={2} />
							</CircleBtn>
						{:else}
							<div class="avatar">
								<canvas bind:this={canvas} style="display: none;" />
								<div class="w-40 rounded-full">
									<img bind:this={photo} alt="photo" />
								</div>
							</div>
						{/if}

						<div class="flex w-full">
							{#if useCamera}
								<CircleBtn
									text="Save photo"
									buttonFunction={tomarFoto}
								>
									<Icon data={save} scale={2} />
								</CircleBtn>
								<video class="h-[150px]" bind:this={videoSource} />
							{:else if !editData}
								<CircleBtn
									text="Edit text"
									buttonFunction={editItem}
								>
									<Icon data={edit} scale={2} />
								</CircleBtn>

								<div class="min-w-0 flex-1">
									<p class="truncate text-sm font-medium text-gray-900 dark:text-white">
										Neil Sims
									</p>
									<p class="truncate text-sm text-gray-500 dark:text-gray-400">
										email@windster.com
									</p>
								</div>
							{:else}
								<CircleBtn
									text="Edit text"
									buttonFunction={editItem}
								>
									<Icon data={save} scale={2} />
								</CircleBtn>

                <EditTopicData bind:topic/>
							{/if}
						</div>
						<!-- <div
						class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
					>
						$320
					</div> -->
					</div>
				</li>
			{/each}
		</ul>
	</div>

	<slot name="btn" />
</AppBlocksWrapper>
