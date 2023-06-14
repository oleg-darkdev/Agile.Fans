<script>
	export let card;
</script>

<div
	class="group  flex transform cursor-pointer flex-col rounded-lg p-2 transition delay-100 duration-300 ease-in-out hover:-translate-x-16 hover:-translate-y-8 hover:bg-blue-400 "
>
	<div class="flex flex-row flex-wrap items-center ">
		<div class=" flex max-w-lg flex-row-reverse lg:items-start">
			<div class="mb-4 flex-shrink-0 sm:mb-0 sm:ml-4">
				<img
					class="w-full rounded-md object-cover sm:h-32 sm:w-32"
					src={card.img}
					alt={card.title}
				/>
			</div>
			<div>
				<!-- <span class="text-sm text-gray-500">{card.title}</span> -->
				<p class="mt-2 text-right text-lg font-medium leading-6 ">
					<a href="/" class="text-xl text-gray-800 group-hover:text-white">{card.title} </a>
				</p>
				<p class="text mt-2 text-right leading-normal text-gray-500 group-hover:text-white">
					A wonderful serenity has taken possession of my entire soul, like these sweet mornings of
					spring which I enjoy with my whole heart.
				</p>
			</div>
		</div>

		<span
			class="mx-4 text-6xl font-bold leading-none tracking-tighter text-neutral-600 group-hover:text-white "
		>
			95%
		</span>

		<div class=" flex max-w-lg lg:items-start">
			<div class="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
				<img
					class="w-full rounded-md object-cover sm:h-32 sm:w-32"
					src={card.img}
					alt={card.title}
				/>
			</div>
			<div>
				<!-- <span class="text-sm text-gray-500">{card.title}</span> -->
				<p class="mt-2 text-lg font-medium leading-6 ">
					<a href="/" class="text-xl text-gray-800 group-hover:text-white">{card.title} </a>
				</p>
				<p class="text mt-2 leading-normal text-gray-500 group-hover:text-white">
					A wonderful serenity has taken possession of my entire soul, like these sweet mornings of
					spring which I enjoy with my whole heart.
				</p>
			</div>
		</div>
	</div>
	<hr class="mx-auto my-4 h-1 w-48 rounded border-0 bg-gray-600  group-hover:bg-gray-200" />
</div>
