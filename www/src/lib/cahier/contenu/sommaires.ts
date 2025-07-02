export type Categories =
	| 'Nombres et calculs'
	| 'Espace et géométrie'
	| 'Grandeurs et mesures'
	| 'Algorithmique et programmation'
	| 'Organisation et gestion de données';

export function couleur_de_la_categorie(categorie: Categories) {
	switch (categorie) {
		case 'Nombres et calculs':
			return 'blue';
		case 'Espace et géométrie':
			return 'green';
		case 'Grandeurs et mesures':
			return 'orange';
		case 'Algorithmique et programmation':
			return 'purple';
		case 'Organisation et gestion de données':
			return 'red';
		default:
			return 'black';
	}
}

export const categories_visibles = [
	'Nombres et calculs',
	'Espace et géométrie',
	'Grandeurs et mesures',
	'Algorithmique et programmation',
	'Organisation et gestion de données'
];

export type Chapitre = {
	titre: string;
	categories: Categories[];
	attendus?: string[];
	premiere_page?: number;
	annexe?: boolean;
};

import json_6eme from '$lib/cahier/contenu/sommaires/6eme.json';
import json_5eme from '$lib/cahier/contenu/sommaires/5eme.json';
import json_4eme from '$lib/cahier/contenu/sommaires/4eme.json';

export function sommaire(niveau: 3 | 4 | 5 | 6): Chapitre[] {
	switch (niveau) {
		case 3:
			return [];
		case 4:
			return JSON.parse(JSON.stringify(json_4eme.chapitres));
		case 5:
			return JSON.parse(JSON.stringify(json_5eme.chapitres));
		case 6:
			return JSON.parse(JSON.stringify(json_6eme.chapitres));
	}
}
