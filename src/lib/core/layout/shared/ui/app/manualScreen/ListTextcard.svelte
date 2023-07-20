<script>
	export let data;
</script>

<dl
	class=" m-2 w-full max-w-2xl rounded-lg border-2 border-pink-700 bg-black p-4 text-white shadow-md shadow-pink-700 "
>
	<div class="flex py-6 px-2 flex-col pb-3">
		<dt class="mb-4 text-pink-500 text-2xl font-bold  ">{data.title}</dt>
		{#each data.desc as desc}
			<dd class="text-lg  mb-2 font-semibold">{desc}</dd>
		{/each}

			<slot />
	</div>
</dl>
