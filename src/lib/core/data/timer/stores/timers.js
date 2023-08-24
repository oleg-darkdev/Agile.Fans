import { writable } from 'svelte/store';
import { browser } from '$app/environment';

import { timingState } from './timingsState';

timingState.set([
	{
		id: 2,
		name: 'Work Review',
		time: 15,
		completed: false
	}
]);

const { subscribe, set, update } = timingState;

function timerStore() {
	// let state = defaultPomodoros;
	//  :
	// state = browser ? JSON.parse(localStorage.getItem('timers')) : defaultPomodoros;

	// state = browser ? defaultPomodoros  : JSON.parse(localStorage.getItem('timers'));

	const timers = {
		sort(dragId, dropId) {
			update((state) => {
				let oldIndex = dragId;

				let newIndex = dropId;

				state.splice(newIndex, 0, state.splice(oldIndex, 1)[0]);
				browser ? localStorage.setItem('timers', JSON.stringify(state)) : '';

				return state;
			});
		},
		modify(data) {
			update((state) => {
				let index = state.findIndex((state) => state.id == data.id);

				if (state[index] == null) {
					state = [data].concat(state);
				} else {
					state[index] = data;
				}
				browser ? localStorage.setItem('timers', JSON.stringify(state)) : '';
				return state;
			});
		},
		delete(id) {
			update((state) => {
				state = state.filter((state) => state.id != id);
				browser ? localStorage.setItem('timers', JSON.stringify(state)) : '';

				return state;
			});
		},
		reset() {
			update((state) => {
				state = defaultPomodoros;
				browser ? localStorage.setItem('timers', JSON.stringify(state)) : '';

				return state;
			});
		}
	};

	return {
		subscribe,
		set,
		update,
		...timers
	};
}

// const timers = timerStore();

export default timerStore();
