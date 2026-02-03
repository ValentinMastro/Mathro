import type { Classe, Eleve } from '$lib/constitution_classes/donnees/types';

class State<T> {
	value = $state<T>() as T;

	constructor(initialValue: T) {
		this.value = initialValue;
	}
}

export const niveau = new State<6 | 5 | 4 | 3>(6);
export const nombre_de_classes = new State<5 | 6>(5);
export const mode_recherche = new State(false);

class PersistedState<T> {
	value = $state<T>() as T;
	#key: string;

	constructor(key: string, initialValue: T) {
		this.#key = key;
		this.value = initialValue;

		if (typeof localStorage !== 'undefined') {
			const stored = localStorage.getItem(key);
			if (stored) this.value = JSON.parse(stored);
		}

		$effect(() => {
			if (typeof localStorage !== 'undefined') {
				localStorage.setItem(this.#key, JSON.stringify(this.value));
			}
		});
	}
}

export const classes = new PersistedState<Classe[]>('classes', []);
export const eleves = new PersistedState<Eleve[]>('eleves', []);
