<script>
	import { ProductCard } from '../../entities';

	export let productsList;

	const icons = [
		{
			icon: '/cynefin/icon.svg',
			link: '/apps/cynefin'
		},
		{
			icon: '/action-delegation/icon.svg',
			link: '/apps/action-delegation'
		},
		{
			icon: 'health-check/icon.svg',
			link: '/apps/health-check'
		},
		{
			icon: '/kanbanel/icon.svg',
			link: '/apps/kanbanel'
		},
		{
			icon: '/lean-coffee/icon.svg',
			link: '/apps/lean-coffee'
		},
		{
			icon: '/pomodoro-plan/icon.svg',
			link: '/apps/pomodoro-plan'
		},
		// {
		//   icon: '',
		//   link: '/apps/retromat'
		// },
		{
			icon: '/spiral-dynamics/icon.svg',
			link: '/apps/spiral-dynamics'
		},
		{
			icon: '/ten/icon.svg',
			link: '/apps/ten'
		},
		// {
		//   icon: '',
		//   link: '/apps/ten'
		// },
		// {
		//   icon: '',
		//   link: '/apps/ten'
		// },
		{
			icon: '/scrum-puzle/icon.svg',
			link: '/apps/scrum-puzle'
		}
	];
</script>

<div class="mx-4 py-5 md:px-6 lg:px-8">
	<!-- <div class="grid gap-6 lg:grid-cols-2"> -->
	<ul class="flex flex-row flex-wrap justify-center ">
		{#each productsList as product, i}
			<ProductCard {product} icon={icons[i]} />
		{/each}
	</ul>

	<!-- </div> -->
</div>
