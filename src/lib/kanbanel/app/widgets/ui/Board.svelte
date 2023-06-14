<script>
	import { BoardCard, BoardColumn } from '../../entities';

	const cardLorem = {
		type: 'Design',
		date: 'Dec 12',
		members: [
			{
				fullName: '',
				email: '',
				avatar: 'https://randomuser.me/api/portraits/women/26.jpg'
			},
			{
				fullName: '',
				email: '',
				avatar: 'https://randomuser.me/api/portraits/women/25.jpg'
			}
		],
		title: 'Lorem ipsum dolor',
		desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	};
	const board = {
		title: '',
		backlog: [cardLorem, cardLorem, cardLorem, cardLorem, cardLorem],
		fisrtLevel: [cardLorem, cardLorem],
		secondLevel: [cardLorem, cardLorem, cardLorem, cardLorem],
		thirdLevel: [cardLorem],
		fourthLevel: [cardLorem, cardLorem, cardLorem],
		fifthLevel: [cardLorem, cardLorem, cardLorem, cardLorem, cardLorem],
		sixthLevel: [cardLorem, cardLorem],
		seventhLevel: [cardLorem, cardLorem, cardLorem]
	};
</script>

<div
	class="flex h-auto w-screen flex-col bg-gradient-to-t from-blue-200 via-blue-400 to-blue-500 text-gray-700"
>
	<!-- <div class="px-10">
		<h1 class="text-2xl font-bold text-neutral-200">Team Project Board</h1>
	</div> -->
	<div class="mt-4 flex flex-grow overflow-scroll px-4 ">
		<BoardColumn title="Backlog" cardsLength={board.backlog.length}>
			{#each board.backlog as card}
				<BoardCard {card} />
			{/each}
		</BoardColumn>
		<BoardColumn title="Level 1" cardsLength={board.fisrtLevel.length}>
			{#each board.fisrtLevel as card}
				<BoardCard {card} />
			{/each}
		</BoardColumn>
		<BoardColumn title="Level 2" cardsLength={board.secondLevel.length}>
			{#each board.secondLevel as card}
				<BoardCard {card} />
			{/each}
		</BoardColumn>
		<BoardColumn title="Level 3" cardsLength={board.thirdLevel.length}>
			{#each board.thirdLevel as card}
				<BoardCard {card} />
			{/each}
		</BoardColumn>
		<BoardColumn title="Level 4" cardsLength={board.fourthLevel.length}>
			{#each board.fourthLevel as card}
				<BoardCard {card} />
			{/each}
		</BoardColumn>
		<BoardColumn title="Level 5" cardsLength={board.fifthLevel.length}>
			{#each board.fifthLevel as card}
				<BoardCard {card} />
			{/each}
		</BoardColumn>
		<BoardColumn title="Level 6" cardsLength={board.sixthLevel.length}>
			{#each board.sixthLevel as card}
				<BoardCard {card} />
			{/each}
		</BoardColumn>
		<BoardColumn title="Level 7" cardsLength={board.seventhLevel.length}>
			{#each board.seventhLevel as card}
				<BoardCard {card} />
			{/each}
		</BoardColumn>

		<div class="w-6 flex-shrink-0" />
	</div>
</div>
<!-- Component End -->
