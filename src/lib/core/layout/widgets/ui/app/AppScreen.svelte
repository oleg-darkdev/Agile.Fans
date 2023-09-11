<script>
	import Icon from 'svelte-awesome';
	import eye from 'svelte-awesome/icons/eye';
	import user from 'svelte-awesome/icons/user';

	import { FooterApp } from '../../../entities';

	let selectedTab = 'user';

	export let activeScreen;
</script>

<section
	class="content flex min-h-screen flex-1 flex-col items-center justify-center overflow-y-scroll  bg-black pt-10 pb-40"
>
	<!-- <div class="tabs tabs-boxed">
		<button
			class="tab tab-lg rounded-lg  {selectedTab == 'user' ? 'bg-pink-600 text-black' : 'text-neutral-200'}"
			on:click={() => (selectedTab = 'user')}
			>User
		</button>
		<button
			class="tab tab-lg rounded-lg {selectedTab == 'facilitator'
				? 'bg-pink-600 text-black'
				: 'text-neutral-200'}"
			on:click={() => (selectedTab = 'facilitator')}>Facilitator</button
		>
	</div> -->

	<div
		class="mb-12 flex overflow-x-auto overflow-y-hidden whitespace-nowrap border-b border-gray-700"
	>
		<button
			on:click={() => (selectedTab = 'user')}
			class=" {selectedTab == 'user'
				? 'border-pink-500 text-pink-500'
				: 'border-neutral-500 border-transparent text-neutral-300'} cursor-base -px-1 -mb-px inline-flex h-10 items-center whitespace-nowrap border-b-2 bg-transparent px-2 py-2  text-center hover:border-pink-500  hover:text-pink-500  focus:outline-none sm:px-4"
		>
			<Icon class="mr-2" data={user} scale={1.5} />

			<span class="mx-1 text-sm sm:text-base"> User </span>
		</button>
		<button
			on:click={() => (selectedTab = 'facilitator')}
			class=" {selectedTab == 'facilitator'
				? 'border-pink-500 text-pink-500'
				: 'border-neutral-500 border-transparent text-neutral-300'} cursor-base -px-1 -mb-px inline-flex h-10 items-center whitespace-nowrap border-b-2 bg-transparent px-2 py-2  text-center hover:border-pink-500  hover:text-pink-500  focus:outline-none sm:px-4"
		>
			<Icon class="mr-2" data={eye} scale={1.5} />

			<span class="mx-1 text-sm sm:text-base"> Facilitator </span>
		</button>
	</div>

	<div class:hidden={activeScreen == 'Instrukcja' || activeScreen == 'Rozgrywka'}>
		<slot name="start-screen" />
	</div>
	<div
		class="flex h-auto flex-col items-center justify-center pb-36 md:min-h-screen md:pb-14 lg:min-h-screen lg:pb-10 xl:min-h-screen xl:pb-10"
		class:hidden={activeScreen == 'Rozpoczęcie' || activeScreen == 'Rozgrywka'}
	>
		<slot name="manual-screen" />
	</div>
	<div
		class="flex h-full flex-col justify-center"
		class:hidden={activeScreen == 'Instrukcja' || activeScreen == 'Rozpoczęcie'}
	>
		<slot name="game-screen" />
	</div>
</section>

<FooterApp bind:activeScreen />

<style>
	.selected-tab {
	}
</style>
