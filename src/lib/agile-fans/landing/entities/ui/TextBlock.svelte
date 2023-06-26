<script>
	export let title, desc, mt;
</script>

<div class="container z-20 flex items-center justify-center px-6 md:px-12">
	<div
		class="-mt-[{mt}] block  flex max-w-6xl flex-col items-center justify-center  rounded-lg  bg-[hsla(0,0%,5%,0.7)] px-6  py-12 shadow-black/20 backdrop-blur-[30px] md:py-16 md:px-12"
	>
		<h2
			class="mt-2 mb-12   text-center text-4xl font-bold tracking-tight text-white md:text-5xl xl:text-6xl"
		>
			{@html title}
		</h2>
		{#each desc as text}
			<p class="mb-2  max-w-3xl text-center  leading-relaxed text-neutral-100 ">
				{text}
			</p>
		{/each}

		<slot name="bottom" />
	</div>
</div>
