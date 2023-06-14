<script>
	export let isOpen, selected, reference;
</script>

<div
	on:click={() => {
		isOpen = true;
		selected = reference;
	}}
	class="flex w-full "
>
	<div
		class="w-64 relative m-1 flex transform flex-col items-start rounded-xl bg-white shadow-xl transition delay-150 duration-300 ease-in-out md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8"
	>
		<img
			class="w-full rounded-t-xl object-cover object-center md:h-36 lg:h-48"
			src={reference.img}
			alt={reference.title}
		/>
		<div class="px-6 pt-2 pb-4">
			<h4 class="mt-1 text-2xl font-semibold text-neutral-600">
				<span class="">{reference.title}</span>
			</h4>
			<p class="leading-relax mt-1 text-base font-normal text-gray-500">
				{reference.desc}
			</p>
		</div>
	</div>
</div>
