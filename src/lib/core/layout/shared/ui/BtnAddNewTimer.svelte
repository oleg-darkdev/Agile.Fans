<script>
	import { Button } from '@coreSharedLayout';
	import { timers } from '@coreSharedData';

	let stopped = true,
		done = false;

	export let newTiming = () => {
		return {
			id: Date.now(),
			name: 'New task',
			time: 10,
			completed: false
		};
	};

	const newEntry = () => {
		timers.modify(newTiming());
	};

	// export let data = {
	// 	id: Date.now(),
	// 	name: 'New task',
	// 	time: 10,
	// 	completed: false
	// };

	// let addNewTiming = () => {
	// 	return data;
	// };

	// const newEntry = () => {
	// 	timers.modify(addNewTiming());
	// };
</script>

<Button buttonTitle="Add a new timer" withIcon disable={!stopped || done} buttonFunction={newEntry}>
	<span slot="icon">
		<svg
			width="22"
			height="22"
			viewBox="0 0 22 22"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect x="10" y="4" width="3" height="15" rx="1" />
			<rect x="19" y="10" width="3" height="15" rx="1" transform="rotate(90 19 10)" />
		</svg>
	</span>
	<span slot="label">Add timer</span>
</Button>
