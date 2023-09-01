<script>
	import { FooterApp } from '../../../entities';

	let activeScreen = 'Instrukcja';
</script>

<section
	class="content flex min-h-screen bg-black flex-1 flex-col items-center justify-center  overflow-y-scroll pt-10 pb-40"
>
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
