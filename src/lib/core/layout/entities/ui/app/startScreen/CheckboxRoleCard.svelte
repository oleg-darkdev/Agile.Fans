<script>
	import { AppBlocksWrapper } from '@coreSharedLayout';
	import { Progress } from '@coreEntities';

	export let gameSteps, step, selectedRole, roles;
</script>

<AppBlocksWrapper>
	<Progress {gameSteps} bind:step />

	<div class="flex flex-col w-full items-center justify-center">
		{#each roles as role, i}
			<div
				class="my-4 max-w-sm rounded-lg border border-gray-200 text-gray-400  shadow-md hover:border-pink-600 hover:bg-neutral-800 divide-gray-700 "
			>

				<div class="m-1 rounded-2xl p-4">
					<p
						class="mb-3 font-normal leading-tight text-gray-400"
					>
						{role.desc}
					</p>


				</div>

				<div class="p-4 sm:p-6">
					<div class="form-control">
						<label class="label cursor-pointer">
							<span class="label-text text-2xl font-bold text-neutral-100">{role.title}</span>
							<input
								type="radio"
								name="radio-role"
								on:click={() => (selectedRole = role)}
								class="radio-secondary radio"
							/>
						</label>
					</div>
				</div>
			</div>
		{/each}
		{#if selectedRole.title.length > 0}
			<slot name="btn" />
		{/if}
	</div>
</AppBlocksWrapper>
