<script>
	import Icon from 'svelte-awesome';
	import timesRectangleO from 'svelte-awesome/icons/timesRectangleO';
	import shareSquareO from 'svelte-awesome/icons/shareSquareO';
	import plusCircle from 'svelte-awesome/icons/plusCircle';
	import { selectedScenarious } from '@appRetrogenShared';
	import playCircleO from 'svelte-awesome/icons/playCircleO';

	let scenarioAdded = false;
	const addScenarioToApp = (retrogenScenarion) => {
		showGreenMsg = !showGreenMsg;
		textMsg = 'The scenario has been added';
		scenarioAdded = !scenarioAdded;
		selectedScenarious.set($selectedScenarious.concat(retrogenScenarion));
		setTimeout(hideGoodMsgWithTimer, 2000);
	};

	import { browser } from '$app/environment';

	let showGreenMsg = false,
		showRedMsg = false;
	let showSharedBlock = true;

	let textMsg = '',
		currentURL = '';

	if (browser) {
		currentURL = window.location.href;
	}

	const hideGoodMsgWithTimer = () => (showGreenMsg = !showGreenMsg);
	const hideBadMsgWithTimer = () => (showGreenMsg = !showGreenMsg);

	const getSharedLink = () =>
		navigator.clipboard
			.writeText(currentURL)
			.then(function () {
				showGreenMsg = !showGreenMsg;
				textMsg = 'Link copied';

				setTimeout(hideGoodMsgWithTimer, 2000);
			})
			.catch(function (error) {
				textMsg = error;
				showRedMsg = !showRedMsg;

				setTimeout(hideBadMsgWithTimer, 2000);
			});

	import { LargeBtn } from '@coreSharedLayout';
	import { ComponentsTable, TextInstruction } from '@appRetrogenEntities';
	import { MsgToasts } from '@coreEntities';

	export let data;
</script>

<section class=" flex w-full justify-center py-20">
	<div
		class="mx-4  flex h-auto max-w-sm flex-col items-center rounded rounded-xl bg-primary py-5 md:max-w-2xl md:px-6 lg:max-w-4xl lg:px-8"
	>
		<div
			class="m-2 flex flex-row rounded-xl  border-2 border-pink-700 p-3 text-pink-500 text-pink-500 hover:bg-pink-700 hover:text-white"
		>
			<div>
				{#each data.tool.desc as desc}
					<p class="mb-0  ">
						{desc}
					</p>
				{/each}
			</div>
			<div class="">
				{#if !scenarioAdded}
					<button
						on:click={() => {
							addScenarioToApp(data.tool);
							console.log($selectedScenarious.length);
						}}
						title="Add a scenario to the application"
						class="{showSharedBlock ? 'mr-2' : 'mb-1'} "
					>
						<Icon data={plusCircle} scale={3} />
					</button>
				{:else}
					<a
						href="../"
						class="{showSharedBlock ? 'mr-2' : 'mb-1'} "
						title="Go to to the application"
					>
						<Icon data={playCircleO} scale={3} />
					</a>
				{/if}

				<button
					title="Share the retrospective scenario"
					class={showSharedBlock ? 'mr-2' : 'mb-1'}
					on:click={() => (showSharedBlock = !showSharedBlock)}
				>
					<Icon data={shareSquareO} scale={3} />
				</button>
				<a href="../" title="Back to the list of scenarios">
					<Icon data={timesRectangleO} scale={3} />
				</a>

				{#if showSharedBlock}
					<input
						type="text"
						placeholder={currentURL}
						on:click={() => {
							getSharedLink();

							showSharedBlock = !showSharedBlock;
						}}
						class="input-ghost input mt-6 w-full max-w-xs"
					/>
				{/if}
			</div>
		</div>

		<ComponentsTable components={data.tool.components} />

		<TextInstruction
			title="Preparation"
			desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
				industries for previewing layouts and visual mockups."
			steps={data.tool.preparation}
		/>

		<TextInstruction
			title="Instruction"
			desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
				industries for previewing layouts and visual mockups."
			steps={data.tool.instruction}
		/>

		<a href="" class="btn-lg btn mx-6 mx-auto mt-6 mb-4 w-8/12 max-w-2xl bg-pink-600">Go to app</a>
	</div>

	<MsgToasts bind:showGreenMsg bind:showRedMsg bind:textMsg />
</section>
