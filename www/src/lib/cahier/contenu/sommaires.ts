export enum Categories {
	'Nombres, calcul et résolution de problèmes',
	'Espace et géométrie',
	'Grandeurs et mesures',
	'Organisation et gestion de données et probabilités',
	'Initiation à la pensée informatique',
	'La proportionnalité'
}

export function couleur_de_la_categorie(categorie: Categories) {
	switch (categorie) {
		case Categories['Nombres, calcul et résolution de problèmes']:
			return 'blue';
		case Categories['Espace et géométrie']:
			return 'green';
		case Categories['Grandeurs et mesures']:
			return 'orange';
		case Categories['Initiation à la pensée informatique']:
			return 'purple';
		case Categories['Organisation et gestion de données et probabilités']:
			return 'red';
		case Categories['La proportionnalité']:
			return 'yellow';
	}
}

export const categories_visibles = Object.keys(Categories);

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
