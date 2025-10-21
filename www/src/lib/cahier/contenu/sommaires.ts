export const CATÉGORIES = [
	'Nombres, calcul et résolution de problèmes',
	'Espace et géométrie',
	'Grandeurs et mesures',
	'Organisation et gestion de données et probabilités',
	'Initiation à la pensée informatique',
	'La proportionnalité'
] as const;
export type Catégorie = (typeof CATÉGORIES)[number];

export const COULEURS_PAR_CATEGORIE: Record<Catégorie, string> = {
	'Nombres, calcul et résolution de problèmes': 'blue',
	'Espace et géométrie': 'green',
	'Grandeurs et mesures': 'orange',
	'Organisation et gestion de données et probabilités': 'purple',
	'Initiation à la pensée informatique': 'red',
	'La proportionnalité': 'skyblue'
};

export const PÉRIODES = [1, 2, 3, 4, 5, "tout au long de l'année"] as const;
export type Période = (typeof PÉRIODES)[number];

export class Chapitre {
	constructor(
		public période: Période,
		public numéro: number,
		public titre: string,
		public objectifs: string[],
		public catégories: Catégorie[],
		public première_page?: number,
		public annexe?: boolean
	) {}

	afficher_le_titre(): string {
		return this.annexe ? `Annexe – ${this.titre}` : `Chapitre ${String(this.numéro).padStart(2, '0')} – ${this.titre}`;
	}
}

import json_4eme from '$lib/cahier/contenu/sommaires/4eme.json';
import json_5eme from '$lib/cahier/contenu/sommaires/5eme.json';
import json_6eme from '$lib/cahier/contenu/sommaires/6eme.json';

function construire_chapitres(json: typeof json_6eme.chapitres | typeof json_5eme.chapitres | typeof json_4eme.chapitres): Chapitre[] {
	return json.map(
		(c) => new Chapitre(c.période as Période, c.numéro, c.titre, c.objectifs, c.catégories as Catégorie[], c.première_page ?? 0, c.annexe ?? false)
	);
}

export function sommaire(niveau: 3 | 4 | 5 | 6): Chapitre[] {
	switch (niveau) {
		case 3:
			return [];
		case 4:
			return construire_chapitres(json_4eme.chapitres);
		case 5:
			return construire_chapitres(json_5eme.chapitres);
		case 6:
			return construire_chapitres(json_6eme.chapitres);
	}
}
