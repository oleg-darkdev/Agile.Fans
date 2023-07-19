<script>
	export let title, desc;
</script>

<div class="mx-2 h-full  rounded-lg border-2 border-pink-700 bg-black shadow-md shadow-pink-700">
	<slot name="img" />
	<div class="py-6">
		<div class="mx-auto max-w-screen-xl px-4 md:px-8 md:text-center">
			<div class="max-w-xl md:mx-auto">
				<h3 class="text-3xl font-bold text-gray-100 sm:text-4xl">{title}</h3>
				<p class="mt-3 text-gray-100">
					{desc}
				</p>
			</div>
			<div class="mt-4 flex items-center justify-center">
				<slot name="btn" />
			</div>
		</div>
	</div>
</div>
