<script>
	import { motivatorsList } from '../../../shared/';
</script>

<section>
	<div class=" mx-auto flex max-w-7xl flex-col items-center px-5 py-8 sm:px-6 lg:px-8">
		<div class="prose-blue prose mx-auto flex w-full max-w-3xl flex-col text-left">
			<div class="mx-auto w-full">
				<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
				<div class="mt-8 flex flex-grow flex-wrap justify-start text-left md:mt-0">
					<div class="w-full space-y-4 md:w-1/2">
						<!-- <p>Product</p> -->
						<nav class="mb-10 list-none">
							{#each motivatorsList.slice(0, 4) as motivation}
								<li>
									<a href={motivation.link}>{motivation.title}</a>
								</li>
							{/each}
						</nav>
					</div>
					<div class="w-full space-y-4 md:w-1/2">
						<!-- <p>Company</p> -->
						<nav class="mb-10 list-none">
							{#each motivatorsList.slice(5, 10) as motivation}
								<li>
									<a href={motivation.link}>{motivation.title}</a>
								</li>
							{/each}
						</nav>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
