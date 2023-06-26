<script>
	import { LinkBtnStyle } from '../../../../core/layout/shared';

	export let technology;
</script>

<div class="mb-6 lg:mb-0">
	<div
		class="relative block rounded-lg bg-neutral-700 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
	>
		<div class="flex justify-center">
			<div
				class="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat "
				data-te-ripple-init
				data-te-ripple-color="light"
			>
				<img src={technology.img} alt={technology.title} class="w-full" />
				<a href="/">
					<div
						class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
					/>
				</a>
			</div>
		</div>
		<div class="flex flex-col justify-center p-6">
			<h5 class="mb-4 text-center text-2xl font-bold">{technology.title}</h5>
			<p class="mb-6 text-center">
				{technology.desc}
			</p>

			<LinkBtnStyle text="Download" link={technology.link} />
		</div>
	</div>
</div>
