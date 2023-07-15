<script>
  export let title, desc, img
</script>

<section class="py-4 sm:px-6 md:px-4 md:px-12 lg:px-4 lg:px-24 lg:py-12">
	<div class="px-6 py-12 text-center md:px-12 lg:text-left">
		<div class="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
			<div class="grid items-center lg:grid-cols-2">
				<div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
					<div
						class="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14"
					>
						<h2 class="mt-2 mb-16 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
							{title}
						</h2>
						<p class="mb-2 max-w-2xl text-left leading-relaxed text-neutral-100 ">
							{desc}
						</p>
					</div>
				</div>
				<div class="md:mb-12 lg:mb-0">
					<img
						src="{img}"
						class="w-full rounded-lg shadow-lg dark:shadow-black/20"
						alt=""
					/>
				</div>
			</div>
		</div>
	</div>
</section>
