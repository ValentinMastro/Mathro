/* État de la page */
export let page_state: {
	afficher_fond_seyes: boolean;
	afficher_numero_page: boolean;
	deux_pages: boolean;
	en_cours_impression: boolean;
	largeur_plein_ecran: number;
	niveau: 3 | 4 | 5 | 6;
	numero_de_la_page: number;
	plein_ecran: boolean;
	sur_mobile: boolean;
	type: 'de cours' | "d'exercices";
	zoom_page: boolean;
} = $state({
	afficher_fond_seyes: true,
	afficher_numero_page: true,
	deux_pages: true,
	en_cours_impression: false,
	largeur_plein_ecran: 100,
	niveau: 6,
	numero_de_la_page: 0,
	plein_ecran: false,
	sur_mobile: false,
	type: 'de cours',
	zoom_page: false
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
