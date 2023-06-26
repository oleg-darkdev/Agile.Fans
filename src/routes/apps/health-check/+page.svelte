<script>
	import cards from '../../../lib/health-check/cards';

	$: step = 0;
</script>

<div class="relative flex w-full justify-center">
	<div class="flex w-6/12 items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
		<div
			class=" transition-allsm:my-8 relative inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl sm:w-full sm:max-w-md sm:p-6 sm:align-middle"
		>
			<div>
				<img
					class="h-48 w-full rounded-md object-cover"
					src="/health-check/icons/{cards[step].icon}"
					alt={cards[step].title}
				/>

				<div class="mt-4 text-start">
					<h3
						class=" text-3xl font-bold capitalize leading-none leading-6 tracking-tighter text-gray-800 "
						id="modal-title"
					>
						{cards[step].title}
					</h3>

					<div class="mt-6 flex flex-col items-start">
						<div class="badge badge-error badge-outline">negative</div>
						<div class="form-control w-full">
							<label
								on:click={() => (cards[step].status = 'negative')}
								class="label cursor-pointer"
							>
								<span class="label-text">{cards[step].negative} </span>
								<input
									type="radio"
									name="radio-{step}"
									class="radio checked:bg-error"
									checked={cards[step].status == 'negative' ? 'true' : ''}
								/>
							</label>
						</div>
					</div>
					<div class="mt-2 flex flex-col items-start">
						<div class="badge  badge-success badge-outline">positive</div>
						<div class="form-control w-full">
							<label
								on:click={() => (cards[step].status = 'positive')}
								class="label cursor-pointer"
							>
								<span class="label-text">{cards[step].positive}</span>
								<input
									type="radio"
									name="radio-{step}"
									class="radio checked:bg-success"
									checked={cards[step].status == 'positive' ? 'true' : ''}
								/>
							</label>
						</div>
					</div>
				</div>
			</div>

			<div class="mt-4 flex items-center justify-center">
				{#each cards as card, i}
					<button
						class="mx-1.5 h-2 w-2 rounded-full {i == step
							? 'bg-pink-500'
							: 'bg-pink-100'} focus:outline-none "
					/>
				{/each}
			</div>

			<div class="mt-5 flex items-center justify-center  sm:-mx-2">
				<button
					on:click={() => {
						step--;
						console.log(cards[step]);
					}}
					class="{step != 0 ? '' : 'hidden'} btn-outline btn-primary btn  m-1 w-5/12 ">Skip</button
				>
				<button on:click={() => step++} class=" btn-primary btn m-1 w-5/12 ">Skip</button>
			</div>
		</div>
	</div>
</div>
