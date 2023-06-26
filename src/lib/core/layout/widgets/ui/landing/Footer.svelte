<script>
	import { FooterLink } from '../../../shared';

	const legalLinks = [
		{
			title: 'About us',
			link: ''
		},

		{
			title: 'Contact',
			link: ''
		},
		{
			title: 'Careers',
			link: ''
		}
	];
	const socialLinks = [
		{
			title: 'LinkedIn',
			link: ''
		},
		{
			title: 'Github',
			link: ''
		},
		{
			title: 'Facebook',
			link: ''
		}
	];

	const resourcesLinks = [
		{
			title: 'Events',
			link: ''
		},
		{
			title: 'Tutorials',
			link: ''
		},
		{
			title: 'Help center',
			link: ''
		}
	];

	const useCasesLinks = [
		{
			title: 'Platforms',
			link: '/platforms'
		},
		{
			title: 'Products',
			link: '/products'
		},

		{
			title: 'Startups',
			link: ''
		},

		{
			title: 'Enterprise',
			link: ''
		},
		{
			title: 'Ngo',
			link: ''
		},
		{
			title: 'Community',
			link: ''
		},
		{
			title: 'Personal use',
			link: ''
		}
	];

	export let productData, arrayOfProducts;
</script>

<footer class="mt-4 bg-black">
	<div class="container mx-auto px-6 py-12">
		<div class="text-center">
			<h2
				class="mb-2 text-2xl font-medium leading-none tracking-tighter text-neutral-600 md:text-4xl lg:text-3xl"
			>
				Let’s get started on something great
			</h2>

			<p class="mx-auto mt-2 max-w-md text-gray-500 ">
				Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
				industries for previewing layouts and visual mockups.
			</p>

			<div class="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-center">
				<a
					href="/demo"
					class="w-full transform rounded-md bg-pink-600 px-5 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-pink-500 focus:outline-none focus:ring focus:ring-pink-300 focus:ring-opacity-80 sm:order-2 sm:mx-2 sm:w-auto lg:w-40"
					>Go demo</a
				>
			</div>
		</div>

		<div
			class="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
		>
			<div>
				<h3 class="text-sm font-medium text-pink-500 ">Agile.fans products</h3>

				<div class="mt-4 flex flex-col items-start space-y-4">
					{#each arrayOfProducts.slice(0, 6) as product}
						<a
							href={product.shortDesc.link}
							class="text-gray-700 transition-colors duration-200 hover:text-pink-600 hover:underline  "
							>{product.shortDesc.title}</a
						>
					{/each}
				</div>
			</div>

			<div>
				<h3 class="text-sm font-medium text-pink-500 " />

				<div class="mt-4 flex flex-col items-start space-y-4">
					{#each arrayOfProducts.slice(0, 6) as product}
						<a
							href={product.shortDesc.link}
							class="text-gray-700 transition-colors duration-200 hover:text-pink-600 hover:underline  "
							>{product.shortDesc.title}</a
						>
					{/each}
				</div>
			</div>

			<div>
				<h3 class="text-sm font-medium text-pink-500 ">Resources</h3>

				<div class="mt-4 flex flex-col items-start space-y-4">
					{#each resourcesLinks as link}
						<FooterLink {link} />
					{/each}
				</div>
			</div>

			<div>
				<h3 class="text-sm font-medium text-pink-500 ">Use cases</h3>

				<div class="mt-4 flex flex-col items-start space-y-4">
					{#each useCasesLinks as link}
						<FooterLink {link} />
					{/each}
				</div>
			</div>

			<div>
				<h3 class="text-sm font-medium text-pink-500 ">Social</h3>

				<div class="mt-4 flex flex-col items-start space-y-4">
					{#each socialLinks as link}
						<FooterLink {link} />
					{/each}
				</div>
			</div>

			<div>
				<h3 class="text-sm font-medium text-pink-500 ">Legal</h3>

				<div class="mt-4 flex flex-col items-start space-y-4">
					{#each legalLinks as link}
						<FooterLink {link} />
					{/each}
				</div>
			</div>
		</div>

		<hr class="my-2 border-pink-500  md:my-6" />

		<div class=" flex flex-col items-center justify-between sm:flex-row">
			<a href="#">
				<img
					class="h-20 w-auto"
					src={productData.shortDesc.logo}
					alt={productData.shortDesc.title}
				/>
			</a>

			<p class="mt-4 text-sm text-pink-700  sm:mt-0">© Copyright 2023. All Rights Reserved.</p>
		</div>
	</div>
</footer>

<!--
<footer class="bg-white" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-5 py-12 md:px-12 lg:py-16 lg:px-20">
		<h3 class="text-md font-semibold uppercase tracking-wider text-pink-600">Products</h3>

		<div class="md:grid md:grid-cols-5 md:gap-8">
			<div>
				<ul role="list" class="mt-4 space-y-4">
					{#each products.slice(0, 4) as product}
						<li>
							<a href={product.link} class="text-sm font-normal text-gray-500 hover:text-gray-900">
								{product.title}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<div class="mt-12 md:mt-0">
				<ul role="list" class="mt-4 space-y-4">
					{#each products.slice(5, 9) as product}
						<li>
							<a href={product.link} class="text-sm font-normal text-gray-500 hover:text-gray-900">
								{product.title}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<div class="mt-12 md:mt-0">
				<ul role="list" class="mt-4 space-y-4">
					{#each products.slice(9, 12) as product}
						<li>
							<a href={product.link} class="text-sm font-normal text-gray-500 hover:text-gray-900">
								{product.title}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<div class="mt-12 md:mt-0">
				<ul role="list" class="mt-4 space-y-4">
					{#each products.slice(0, 4) as product}
						<li>
							<a href={product.link} class="text-sm font-normal text-gray-500 hover:text-gray-900">
								{product.title}
							</a>
						</li>
					{/each}
				</ul>
			</div>
			<div class="mt-12 md:mt-0">
				<ul role="list" class="mt-4 space-y-4">
					{#each products.slice(0, 4) as product}
						<li>
							<a href={product.link} class="text-sm font-normal text-gray-500 hover:text-gray-900">
								{product.title}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
	<div
		class="mx-auto max-w-7xl bg-gray-50 px-5 py-12 sm:px-6 md:flex md:items-center md:justify-between lg:px-20"
	>
		<div class="mb-8 flex justify-center space-x-6 md:order-last md:mb-0">
			<a href="#" class="text-gray-400 hover:text-gray-500">
				<span class="sr-only">Facebook</span>
				<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path
						fill-rule="evenodd"
						d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
						clip-rule="evenodd"
					/>
				</svg>
			</a>
			<a href="#" class="text-gray-400 hover:text-gray-500">
				<span class="sr-only">GitHub</span>
				<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path
						fill-rule="evenodd"
						d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
						clip-rule="evenodd"
					/>
				</svg>
			</a>
		</div>
		<div class="mt-8 md:order-1 md:mt-0">
			<span class="mt-2 text-sm font-light text-gray-500">
				Copyright © 2022 - 2023
				<a
					href="https://wickedlabs.dev"
					class="text-wickedpink mx-2 hover:text-gray-500"
					rel="noopener noreferrer">@agileKIT</a
				>
			</span>
		</div>
	</div>
</footer> -->
