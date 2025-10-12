/* État de la page */
export let page_state: {
	numero_de_la_page: number;
	niveau: 3 | 4 | 5 | 6;
	deux_pages: boolean;
	plein_ecran: boolean;
	largeur_plein_ecran: number;
	sur_mobile: boolean;
	zoom_page: boolean;
	en_cours_impression: boolean;
	afficher_fond_seyes: boolean;
	type: 'de cours' | "d'exercices";
} = $state({
	numero_de_la_page: 0,
	niveau: 6,
	deux_pages: true,
	plein_ecran: false,
	largeur_plein_ecran: 100,
	sur_mobile: false,
	zoom_page: false,
	en_cours_impression: false,
	afficher_fond_seyes: true,
	type: 'de cours'
});

export const PAGES: { liste: any[] } = $state({
	liste: []
});

export function NOMBRE_DE_PAGES(): number {
	return PAGES.liste.length;
}

let taille_page: number = $state(0);

export function get_taille_page(): number {
	return taille_page;
}

export function set_taille_page(value: number) {
	taille_page = value;
}
