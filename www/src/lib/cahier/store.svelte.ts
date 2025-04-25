import { writable, derived, type Readable } from 'svelte/store';

/* Options */
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

export let taille_page = writable(0);
export let taille_sommaire = derived([taille_page], ([$taille_page]) => {
	return $taille_page / 25;
});
export let taille_numero_de_page = derived([taille_page], ([$taille_page]) => {
	return $taille_page / 60;
});
export let taille_titre = derived([taille_page], ([$taille_page]) => {
	return $taille_page / 20;
});
export let taille_chapitre = derived([taille_page], ([$taille_page]) => {
	return $taille_page / 45;
});
export let taille_titre_de_sections = derived([taille_page], ([$taille_page]) => {
	return $taille_page / 50;
});
export let taille_texte = derived([taille_page], ([$taille_page]) => {
	return $taille_page / 60;
});

export let separateur_chapitre = derived([taille_chapitre], ([$taille_chapitre]) => {
	return $taille_chapitre * 1.22;
});
export let separateur_texte = derived([taille_texte], ([$taille_texte]) => {
	return $taille_texte * 1.6;
});

export let hauteur_ligne_cahier = derived([taille_page], ([$taille_page]) => {
	return $taille_page / 37.1;
});
