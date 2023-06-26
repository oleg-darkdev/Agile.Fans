<script>
	import { tweened } from 'svelte/motion';
	$: timer = tweened(time);

	$: minutes = Math.floor($timer / 60);
	$: minname = minutes > 1 ? 'mins' : 'min';
	$: seconds = Math.floor($timer - minutes * 60);

	const interval = setInterval(() => {
		if ($timer > 0) $timer--;
		if ($timer == 0) {
			clearInterval(interval);
			// showMsg = true;
		}
	}, 1000);
	//  showMsg,
	export let time;

	// let time = 120;
</script>

<div
	class="flex max-w-2xl items-end justify-center  bg-opacity-60 px-4 pt-4 pb-20 text-center sm:block sm:p-0"
>
	<div class="flex max-w-2xl flex-row flex-wrap items-center justify-center ">
		<span
			style="font-size: 280px;"
			class="font-mono align-center countdown font-black text-pink-500 "
		>
			<span style="--value:{minutes};" />:<span style="--value:{seconds};" />
		</span>
	</div>
</div>
