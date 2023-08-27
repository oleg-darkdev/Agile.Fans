<script>
	import { WorkshopCard } from '../../lib/agile-fans/app/entities';

	const workshopsList = ['', '', '', ''];
</script>

<section class="flex  items-center content-center py-20  justify-center">
<div class="flex max-w-6xl flex-col border-2 rounded-lg border-black">
		<ul
			class=" divide-gray-600 rounded-lg  grid grid-cols-2 grid-flow-row gap-2 border-0 border-gray-700 bg-gray-800 !bg-transparent text-gray-400"
		>
			{#each workshopsList as workshopData}
				<WorkshopCard {workshopData} />
			{/each}
		</ul>

		<div
			classinner="grid-cols-3 pt-2 pb-4"
			class="sticky bottom-0 left-0 z-50 h-16 w-full border-t border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-700"
		>
			<div class="mx-auto grid h-full max-w-lg grid-cols-3 pt-2 pb-4">
				<button
					aria-label="Latest"
					href=""
					role="button"
					id="card-latest"
					class="group group inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-5 w-5 shrink-0 text-gray-500 dark:text-gray-400"
						role="img"
						aria-label="clock-solid"
						viewBox="0 0 20 20"
					>
						<path
							fill="currentColor"
							d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"
						/>
					</svg>
					<span
						class="group-hover:text-primary-600 dark:group-hover:text-primary-500 text-sm text-gray-500 dark:text-gray-400"
						>Latest</span
					></button
				>
				<button
					aria-label="Following"
					href=""
					role="button"
					id="card-following"
					class="group group inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-5 w-5 shrink-0 text-gray-500 dark:text-gray-400"
						role="img"
						aria-label="user-group-solid"
						viewBox="0 0 20 19"
					>
						<g fill="currentColor">
							<path
								d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"
							/>
							<path
								d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z"
							/>
						</g>
					</svg>
					<span
						class="group-hover:text-primary-600 dark:group-hover:text-primary-500 text-sm text-gray-500 dark:text-gray-400"
						>Following</span
					></button
				>
				<button
					aria-label="Favorites"
					href=""
					role="button"
					id="card-favorites"
					class="group group inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-5 w-5 shrink-0 text-gray-500 dark:text-gray-400"
						role="img"
						aria-label="star-solid"
						viewBox="0 0 22 20"
					>
						<path
							fill="currentColor"
							d="M20.924 7.625a1.524 1.524 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
						/>
					</svg>
					<span
						class="group-hover:text-primary-600 dark:group-hover:text-primary-500 text-sm text-gray-500 dark:text-gray-400"
						>Favorites</span
					></button
				>
			</div>
		</div>
	</div>
</section>
