<script>
	import { allScanariousForRetrogen } from '../../../lib/retrogen/app/shared';
	import { LargeBtn } from '../../../lib/core/layout/shared/';
	// '$coreShared'
	import { ComponentsTable, TextInstruction } from '../../../lib/retrogen/app/entities';

	$: selectedScenario = '';
	$: showFullInstruction = true;
</script>

<section class=" flex w-full justify-center py-20">
	<div
		class="mx-4  mx-4 h-auto max-w-sm rounded rounded-xl bg-primary py-5 md:max-w-2xl md:px-6 lg:max-w-4xl lg:px-8"
	>
		<!-- <div class="grid gap-6 lg:grid-cols-2"> -->

		<ul id="start" class="flex flex-row flex-wrap justify-center px-8 ">
			{#if !selectedScenario && showFullInstruction}
				{#each allScanariousForRetrogen as scenario, i}
					<li
						on:click={() => {
							scenario.showFull = !scenario.showFull;
							selectedScenario = scenario;
							showFullInstruction = !showFullInstruction;
							location.href = '#start';
						}}
						class="m-2 flex w-full flex-row flex-row-reverse  flex-wrap justify-between {scenario.showFull
							? ''
							: ' border-2 border-pink-700 hover:bg-pink-700 hover:text-white'} rounded-xl p-3 transition duration-300 ease-in-out  "
					>
						<!-- <a href="/apps/retrogen/allScanariousForRetrogen/{scenario.link}"> -->
						<a class="" href={scenario.author.link}>Author: <span>{scenario.author.bio}</span></a>

						<div class="mb-4 flex flex-col items-start md:mb-0 lg:mb-0">
							<div class="shrink-0">
								<div class="flex  flex-row  pr-3">
									<span class="mr-2 text-4xl  font-black text-white"> ID </span>
									<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-700">
										<span class="text-2xl font-black  text-white">
											{scenario.id}
										</span>
									</div>
								</div>
							</div>
							<div class="group grow ">
								<p class="mb-1 font-bold text-pink-700 group-hover:text-white">
									{scenario.title}
								</p>
								<p class="mb-0 text-pink-500 group-hover:text-neutral-50">
									{scenario.shortDesc}
								</p>
							</div>
						</div>
						<!-- {
			title: 'Complect for tool: `Start, Stop, Continue`',
			id: '',
			photo: ''
		}, -->
					</li>
				{/each}
			{:else}
				<button
					on:click={() => {
						showFullInstruction = !showFullInstruction;
						selectedScenario = '';
					}}
					class="btn-lg btn mx-6 mx-auto mt-6 mt-4 w-8/12 max-w-2xl bg-pink-600"
					>Show all scenarios</button
				>
				<div
					class="m-2 rounded-xl border-2 border-pink-700 p-3 text-pink-500 text-pink-500 hover:bg-pink-700 hover:text-white"
				>
					{#each selectedScenario.desc as desc}
						<p class="mb-0  ">
							{desc}
						</p>
					{/each}
				</div>

				<div class=" mx-auto flex flex-col items-center px-5 sm:px-6  lg:max-w-7xl lg:px-8">
					<div class=" lg: mx-auto flex w-full  max-w-3xl flex-col text-left">
						<div class="mx-auto w-full">
							<ComponentsTable components={selectedScenario.components} />
						</div>
					</div>
				</div>

				<TextInstruction
					title="Preparation"
					desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
				industries for previewing layouts and visual mockups."
					steps={selectedScenario.preparation}
				/>

				<TextInstruction
					title="Instruction"
					desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
				industries for previewing layouts and visual mockups."
					steps={selectedScenario.instruction}
				/>

				<!-- pomodoro timer -->
				<button
					on:click={() => {
						showFullInstruction = !showFullInstruction;
						selectedScenario = '';
					}}
					class="btn-lg btn mx-6 mx-auto mt-6 mt-4 w-8/12 max-w-2xl bg-pink-600"
					>Show all scenarios</button
				>
			{/if}
		</ul>
	</div>
</section>
