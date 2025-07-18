import { writable, derived, type Readable } from 'svelte/store';

/* État de la page */
export let page_state: {
	numero_de_la_page: number;
	niveau: 3 | 4 | 5 | 6;
	deux_pages: boolean;
	plein_ecran: boolean;
	largeur_plein_ecran: number;
	sur_mobile: boolean;
	zoom_page: boolean;
} = $state({
	numero_de_la_page: 0,
	niveau: 6,
	deux_pages: true,
	plein_ecran: false,
	largeur_plein_ecran: 100,
	sur_mobile: false,
	zoom_page: false
});

export function liste_des_pages() {
	switch (page_state.niveau) {
		case 4:
			return import.meta.glob('$lib/cahier/{composants/{Page0,PageDeGarde,sommaire/Sommaire},contenu/4eme/*/*}.svelte');
		case 5:
			return import.meta.glob('$lib/cahier/{composants/{Page0,PageDeGarde,sommaire/Sommaire},contenu/5eme/*/*}.svelte');
		case 6:
			return import.meta.glob('$lib/cahier/{composants/{Page0,PageDeGarde,sommaire/Sommaire},contenu/6eme/*/*}.svelte');
	}
}

export let nombre_de_pages = 97;

let taille_page: number = $state(0);

export function get_taille_page(): number {
	return taille_page;
}

export function set_taille_page(value: number) {
	taille_page = value;
}

let tailles = $derived({
	hauteur_ligne_cahier: taille_page / 37.1,
	titre: taille_page / 20,
	chapitre: taille_page / 45,
	titre_de_sections: taille_page / 50,
	separateur_chapitre: (taille_page / 45) * 1.22
});

export function get_tailles() {
	return tailles;
}
