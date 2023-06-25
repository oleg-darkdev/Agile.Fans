<script>
	import { TechnologyCard } from '../../lib/agile-fans/landing/entities';
	import { Header, StickyBanner, Cookie } from '../../lib/core/layout/widgets';

	import { productsList } from '../../lib/core/data';
	import { convertObjToArray } from '../../lib/core/utils';

	const arrayOfProducts = convertObjToArray(productsList),
		productData = productsList.agileKit;

	const browsers = [
		{
			title: 'Chrome',
			img: '/platforms/chrome.png',
			desc: 'latest',
			link: 'https://www.google.com/chrome/'
		},
		{
			title: 'Firefox',
			img: '/platforms/firefox.png',
			desc: 'latest',
			link: 'https://www.mozilla.org/en-US/firefox/new/?redirect_source=firefox-com'
		},
		{
			title: 'Edge',
			img: '/platforms/edge.png',
			desc: 'latest',
			link: 'https://www.microsoft.com/en-us/edge?form=MA13FJ&exp=e00'
		},
		{
			title: 'Safari',
			img: '/platforms/safari.png',
			desc: 'latest',
			link: 'https://www.apple.com/safari/'
		}
	];

	const technologies = [
		{
			title: 'Svelte',
			img: '/platforms/svelte.svg',

			desc: 'latest',
			link: 'https://kit.svelte.dev/'
		},
		{
			title: '.Net',
			img: '/platforms/.net.svg',

			desc: 'latest',
			link: 'https://dotnet.microsoft.com/en-us/'
		},
		{
			title: 'AWS',
			img: '/platforms/aws.svg',

			desc: 'Cloud',
			link: 'https://aws.amazon.com/'
		},
		{
			title: 'NFC',
			img: '/platforms/nfc.svg',

			desc: 'Near-field communication',
			link: 'https://nfc-forum.org/learn/nfc-technology/'
		}
	];
</script>

<StickyBanner {productData} />

<Header {productData} />

<Cookie />

<section class="md:my-12 lg:my-12">
	<div
		class="relative w-full max-w-5xl items-center rounded-xl py-12 md:mx-auto md:bg-gray-200 md:px-12 lg:mx-auto lg:bg-gray-200 lg:px-16"
	>
		<h2
			class="mb-8 text-center text-4xl font-bold leading-none tracking-tighter text-neutral-600  "
		>
			<!-- Our apps is supported in these modern browsers. -->
			Nasze aplikacje są obsługiwane w tych przeglądarkach.
		</h2>
		<div class="grid gap-6 lg:grid-cols-4 xl:gap-x-12">
			{#each browsers as technology}
				<TechnologyCard {technology} />
			{/each}
		</div>
	</div>
</section>

<section class="md:my-12 lg:my-12">
	<div
		class="relative w-full max-w-5xl items-center rounded-xl py-12 md:mx-auto md:bg-gray-200 md:px-12 lg:mx-auto lg:bg-gray-200 lg:px-16"
	>
		<h2
			class="mb-8 text-center text-4xl font-bold leading-none tracking-tighter text-neutral-600  "
		>
			Nasza platforma jest zbudowana przy użyciu następujących technologii.
		</h2>
		<div class="grid gap-6 lg:grid-cols-4 xl:gap-x-12">
			{#each technologies as technology}
				<TechnologyCard {technology} />
			{/each}
		</div>
	</div>
</section>
