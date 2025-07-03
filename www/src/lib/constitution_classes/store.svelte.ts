import { writable } from 'svelte/store';
import { type Classe, type Donnees, type Eleve } from '$lib/constitution_classes/donnees/types';

export let niveau = writable<6 | 5 | 4 | 3>(6);
export let nombre_de_classes = writable<5 | 6>(5);
export let mode_recherche = writable(false);

function persistStore<T>(key: string, initialValue: T) {
	let parsed = initialValue;

	// ✅ Vérifie si on est bien dans un navigateur
	if (typeof localStorage !== 'undefined') {
		const stored = localStorage.getItem(key);
		if (stored) {
			parsed = JSON.parse(stored) as T;
		}
	}

	const store = writable<T>(parsed);

	// ⚠️ Abonnement uniquement côté client
	if (typeof localStorage !== 'undefined') {
		store.subscribe((value) => {
			localStorage.setItem(key, JSON.stringify(value));
		});
	}

	return store;
}

// 🧠 Tes stores persistants
export const classes = persistStore<Classe[]>('classes', []);
export const eleves = persistStore<Eleve[]>('eleves', []);
