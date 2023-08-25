<script>
  	import { allScanariousForRetrogen } from '@appRetrogenShared';

</script>

<section class=" flex w-full justify-center py-20">
	<div
		class="mx-4  mx-4 h-auto max-w-sm rounded rounded-xl bg-primary py-5 md:max-w-2xl md:px-6 lg:max-w-4xl lg:px-8"
	>
		<!-- <div class="grid gap-6 lg:grid-cols-2"> -->

		<ul id="start" class="flex flex-row flex-wrap justify-center px-8 ">
			{#each allScanariousForRetrogen as scenario, i}
				<li
					class="m-2 flex w-full flex-row flex-row-reverse  flex-wrap justify-between {scenario.showFull
						? ''
						: ' border-2 border-pink-700 hover:bg-pink-700 hover:text-white'} rounded-xl p-3 transition duration-300 ease-in-out  "
				>
					<a class="" href={scenario.author.link}>Author: <span>{scenario.author.bio}</span></a>
					<a class="w-full" href="./retrogen/tools/{scenario.link}">
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
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

