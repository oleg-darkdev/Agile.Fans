<script>
	import { startStopContinue } from '../../../lib/retrogen/app/shared';
	// '$coreShared'
	import { ComponentsTable, TextInstruction } from '../../../lib/retrogen/app/entities';

	const tools = [startStopContinue];

	let showFull = true;
</script>

<!-- <section> -->
<!-- <div class=" mx-auto flex max-w-7xl flex-col items-center px-5 py-8 sm:px-6 lg:px-8">
	<div class="prose-blue prose mx-auto flex w-full max-w-3xl flex-col text-left">
		<div class="mx-auto w-full">
			<h1>A small headline to switch your visitors into users.</h1>
			<h2>A small headline to switch your visitors into users.</h2>
			<p>
				Right. Say that again. No, no, George, look, it's just an act, right? Okay, so 9:00 you're
				strolling through the parking lot, you see us struggling.
			</p>
		</div>
	</div>

	<div
		class="mx-auto my-10 flex max-w-7xl flex-col items-center border-b border-gray-200 pb-10 sm:flex-row"
	>
		<div
			class="inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-gray-50 text-neutral-600 sm:mr-10"
		>
			<svg
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				class="h-10 w-10"
				viewBox="0 0 24 24"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<circle cx="12" cy="12" r="9" />
				<line x1="3.6" y1="15" x2="14.15" y2="15" />
				<line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)" />
				<line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)" />
				<line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)" />
				<line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)" />
			</svg>
		</div>
		<div class="prose-md prose mt-6 flex-grow text-center sm:mt-0 sm:text-left">
			<h2>Short length headline.</h2>
			<p>
				Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML
				&amp; Next.js.
			</p>
		</div>
	</div>
	<div
		class="mx-auto my-10 flex max-w-7xl flex-col items-center border-b border-gray-200 pb-10 sm:flex-row"
	>
		<div
			class="inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-gray-50 text-neutral-600 sm:mr-10"
		>
			<svg
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				class="h-10 w-10"
				viewBox="0 0 24 24"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<circle cx="12" cy="12" r="9" />
				<line x1="3.6" y1="15" x2="14.15" y2="15" />
				<line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)" />
				<line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)" />
				<line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)" />
				<line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)" />
			</svg>
		</div>
		<div class="prose-md prose mt-6 flex-grow text-center sm:mt-0 sm:text-left">
			<h2>Short length headline.</h2>
			<p>
				Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML
				&amp; Next.js.
			</p>
		</div>
	</div>
</div> -->

<section
	class="mx-4 h-auto max-w-4xl justify-center rounded rounded-xl bg-primary py-5 md:px-6 lg:px-8"
>
	<!-- <div class="grid gap-6 lg:grid-cols-2"> -->
	<ul class="flex flex-row flex-wrap justify-center ">
		{#each tools as tool, i}
			<li
				on:click={() => (showFull = !showFull)}
				class="group m-2  rounded-xl border-2 border-pink-700 p-3 transition duration-300 ease-in-out hover:bg-pink-700 hover:text-white"
			>
				<!-- <a href="/apps/retrogen/tools/{tool.link}"> -->
				<div class="flex items-start">
					<div class="shrink-0">
						<div class="flex  flex-row  pr-3">
							<span class="mr-2 text-4xl  font-black text-white"> ID </span>
							<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-700">
								<span class="text-2xl font-black  text-white">
									{tool.id}
								</span>
							</div>
						</div>
					</div>
					<div class="group grow">
						<p class="mb-1 font-bold text-pink-700 group-hover:text-white">
							{tool.title}
						</p>
						<p class="mb-0 text-pink-500 group-hover:text-neutral-50">
							{tool.shortDesc}
						</p>
					</div>
				</div>
				<a href={tool.author.link}>Author: <span>{tool.author.bio}</span></a>

				<!-- </a> -->
				{#if showFull}
					{#each tool.desc as desc}
						<p class="mb-0 text-pink-500 group-hover:text-neutral-50">
							{desc}
						</p>
					{/each}

					<div class=" mx-auto flex max-w-7xl flex-col items-center px-5  sm:px-6 lg:px-8">
						<div class=" mx-auto flex w-full max-w-3xl flex-col text-left">
							<div class="mx-auto w-full">
								<h2 class='text-2xl font-bold mb-4'>Components</h2>
								<ComponentsTable components={tool.components} />
							</div>
						</div>
					</div>

					<TextInstruction
						title="Preparation"
						desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
				industries for previewing layouts and visual mockups."
						steps={tool.preparation}
					/>

					<TextInstruction
						title="Instruction"
						desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
				industries for previewing layouts and visual mockups."
						steps={tool.instruction}
					/>

					<!-- export let
</script>

<!--    -->
					<!-- preparation: [
		`1. Создайте из 3 секций 3 колонки`,
		`2. Найдите набор компонентов с идентификатором # в пакете с логотипом retrogen.`,
		`3. Озаглавьте колонки: 'Начать', 'Прекратить' и 'Продолжать`,
		`4. Ознакомьтесь с инструкцией`,
		`5. Запускайте приложение`,
		`6. `
	],
	instruction: [
		`1. Установите таймер на 5 минут и попросите соблюдать тишину.`,
		`2. Попросите участников написать свои предложения в каждую из колонок - отдельное предложение на отдельном стикере.`,
		`3. Попросите участников зачитать свои предложения и разместить их на соотвествующих секциях.`,
		`4. Организуйте короткую дискуссию: какие 20% предложений наиболее ценные. `,
		`5. Затем попросите участников проголосовать точками (по 3 точки на человека).`,
		`6. 3 предложения, набравшие наибольшее количество голосов, превращаются в план действий.`
	], -->
					<!-- photos: ['', ''],
	video: '', -->
					<!-- pomodoro timer -->
				{/if}
			</li>
		{/each}
	</ul>

	<!-- </div> -->
</section>
