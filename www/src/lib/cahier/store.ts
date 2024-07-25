import { writable } from 'svelte/store';

export let numero_de_la_page = writable(-1);
export let niveau = writable<3 | 4 | 5 | 6>(6);
export let nombre_de_pages_a_afficher = writable<1 | 2>(2);

export function nombre_de_pages(niveau: 3 | 4 | 5 | 6): number {
    switch (niveau) {
        case 3:
            return 0;
        case 4:
            return 1;
        case 5:
            return 0;
        case 6:
            return 3;
    }
}