<script>
	export let degree;
</script>

<div
	class="group hover:bg-blue-400  flex transform cursor-pointer flex-col rounded-lg p-2 transition delay-100 duration-300 ease-in-out hover:-translate-x-16 hover:-translate-y-8  "
>
	<div class="mt-2 ">
		<h4 class="text-center text-2xl font-bold text-gray-700 group-hover:text-white ">
			{degree.lead.title}: {degree.title}
		</h4>
		<p class="mt-2 max-w-md mx-auto text-center text-gray-600 group-hover:text-white">
			{degree.shortDescription}
		</p>
	</div>

	<div class="flex flex-row flex-wrap items-center ">
		<div class=" flex max-w-sm flex-row-reverse lg:items-start">
			<div>
        <p class=" text-right text-lg font-medium leading-6 ">
					<a href="/" class="text-xl text-gray-800 group-hover:text-white">{degree.lead.title} </a>
				</p>
				<h3 class="w-full text-right text-sm font-bold text-gray-500 group-hover:text-white">
					Leader - <span class="text-right text-xs font-medium text-blue-700">authority: {degree.lead.procent}%</span>
				</h3>
				<p class="text mt-2 text-right leading-normal text-gray-500 group-hover:text-white">
					{degree.lead.description}
				</p>
			</div>
		</div>

		<div class="mx-4 mb-4  flex-shrink-0">
			<img class="w-full rounded-md object-cover sm:h-32 sm:w-32" src={degree.img} alt="" />
		</div>

		<div class=" flex max-w-sm lg:items-start">
			<div>
				<p class=" text-lg font-medium leading-6 ">
					<a href="/" class="text-xl text-gray-800 group-hover:text-white">{degree.team.title} </a>
				</p>
				<h3 class="w-full  text-sm font-bold text-gray-500 group-hover:text-white">
					Team - <span class=" text-xs font-medium text-blue-700">authority: {degree.team.procent}%</span>
				</h3>
				<p class="text mt-2 leading-normal text-gray-500 group-hover:text-white">
					{degree.team.description}
				</p>
			</div>
		</div>
	</div>
	<hr class="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-600  group-hover:bg-gray-200" />
</div>
