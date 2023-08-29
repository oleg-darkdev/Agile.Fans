<script>
	import { BoardCard } from '../../entities';

	const getCardsMembers = () => {
		return [
			{
				fullName: 'Anton ',
				id: '2',
				email: 'sa.bygaga.ne@gmail.com',
				avatar: '/action-delegation/anton_test_photo.jpg',
				nickname: 'Savichau Anton',
				status: 'Online'
			},
			{
				fullName: 'Oleg Medvedev',
				id: '1',
				email: 'oleg@darkdev.games',
				avatar: '/action-delegation/test_photo_oleg.png  ',
				nickname: 'Jesus.hobo',
				status: 'Online'
			}
		];
	};
	export let column;
</script>

<div
	class=" {column.showCards
		? 'w-full'
		: ''}  m-1  flex flex-col rounded rounded-xl bg-pink-600 bg-pink-500 "
>
	<div class="flex h-20 max-w-md  items-center px-2">
		<button
			on:click={() => {
				column.showCards = !column.showCards;
			}}
			class="transform rounded-xl bg-pink-800 px-5 py-4 text-center text-base font-medium text-white transition duration-500 ease-in-out hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 lg:px-10"
		>
			<span class="block text-3xl font-semibold text-white">{column.title}</span>
		</button>
		<span
			class="text-md ml-2 mr-6 flex h-10 w-10 items-center justify-center rounded bg-white bg-opacity-30 font-medium text-white"
			>{column.data.length}
		</span>

		<div
			class="avatar-group  -space-x-4 rounded-full  "
		>
			{#each getCardsMembers() as member}
				<div class="avatar ">
					<div class="w-10">
						<img src={member.avatar} alt={member.fullName} />
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div
		class="{column.showCards
			? 'w-full'
			: 'hidden'} flex flex-row flex-wrap overflow-visible pb-2 pl-20 "
	>
		{#each column.data as card}
			<BoardCard {card} />
		{/each}
	</div>
</div>
