export enum Categories {
	Numérique = 'Nombres, calcul et résolution de problèmes',
	Géométrie = 'Espace et géométrie',
	Grandeurs = 'Grandeurs et mesures',
	GestionDeDonnées = 'Organisation et gestion de données et probabilités',
	Informatique = 'Initiation à la pensée informatique',
	Proportionnalité = 'La proportionnalité'
}

export function couleur_de_la_categorie(categorie: Categories): string {
	switch (categorie) {
		case Categories.Numérique:
			return 'blue';
		case Categories.Géométrie:
			return 'green';
		case Categories.Grandeurs:
			return 'orange';
		case Categories.GestionDeDonnées:
			return 'purple';
		case Categories.Informatique:
			return 'red';
		case Categories.Proportionnalité:
			return 'skyblue';
	}
}

export const categories_visibles = Object.values(Categories);

export type Période = 1 | 2 | 3 | 4 | 5 | "tout au long de l'année";

export type Chapitre = {
	période: Période;
	numéro: number;
	titre: string;
	objectifs: string[];
	catégories: Categories[];
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
