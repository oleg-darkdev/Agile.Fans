import { writable } from 'svelte/store';

export const timingState = writable([
	{
		id: 0,
		name: '',
		time: 0,
		completed: false
	}
]);
