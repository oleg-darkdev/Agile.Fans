<script>
	import { CountUp } from 'countup.js';
	import { onMount } from 'svelte';

	onMount(() => {
		const workersCountUp = new CountUp('workers', 50, { enableScrollSpy: true, duration: 6 }),
			partnersCountUp = new CountUp('partners', 12, { enableScrollSpy: true, duration: 6 }),
			progectsCountUp = new CountUp('progects', 9, { enableScrollSpy: true, duration: 8 }),
			experienceCountUp = new CountUp('experience', 10, { enableScrollSpy: true, duration: 13 }),
			metresCountUp = new CountUp('metres', 400, { enableScrollSpy: true, duration: 6 }),
			hoursCountUp = new CountUp('hours', 900000, { enableScrollSpy: true, duration: 14 });
	});

	export let stats;
</script>

<section
	class="container mx-auto my-12 text-center  md:rounded-xl md:bg-gray-200 md:py-12 lg:my-12 lg:my-24 lg:rounded-xl lg:bg-gray-200    lg:text-left "
>
	<div class="mx-8 grid items-start lg:grid-cols-2">
		<div class="lg:mt-40 lg:mb-0">
			<div
				class="relative z-[1] block rounded-lg bg-gradient-to-r from-pink-500  to-pink-700 px-6 py-12 shadow-black/20 md:px-12 lg:-mr-14"
			>
				<h2 class="mb-2 text-3xl font-bold text-white md:text-5xl lg:mb-6 lg:text-6xl">
					Lorem ipsum is placeholder text
				</h2>
				<p class="mb-4 text-gray-50 md:mb-12 lg:mb-12">
					Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
					industries for previewing layouts and visual mockups.
				</p>

				<div class="grid gap-x-6 md:grid-cols-3">
					{#each stats as stat}
						<div class="mb-6 md:mb-0">
							<h2 class="text-4xl font-black text-white">{stat.value}</h2>
							<h5 class="mb-0 text-lg font-medium text-white">
								{stat.title}
							</h5>
						</div>
					{/each}
				</div>
			</div>

			<slot />
		</div>

		<div>
			<img
				src="https://tecdn.b-cdn.net/img/new/ecommerce/vertical/088.jpg"
				class="fancy-border-radius rotate-lg-6 hidden-img w-full rounded-2xl shadow-lg shadow-black/20 "
				alt="Features banner"
			/>
		</div>
	</div>
</section>

<style>
	@media (min-width: 992px) {
		.rotate-lg-6 {
			transform: rotate(6deg);
		}
	}
	@media (max-width: 640px) {
		.hidden-img {
			display: none;
		}
	}

	/* These are the KEY styles - you can add them directly to any object you want in your project */
	.fancy-border-radius {
		border-radius: 53% 47% 52% 48% / 36% 41% 59% 64%;
	}
</style>
