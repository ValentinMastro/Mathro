import { writable } from 'svelte/store';

type Etape = 'squelette' | 'matieres' | 'classes' | 'enseignants';
export let etape = writable<Etape>('squelette');

export type { Etape };
