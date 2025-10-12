import { type Component } from 'svelte';

export function importer_cours(niveau: 3 | 4 | 5 | 6) {
	let importation_pages: Record<string, { default: Component }>;

	switch (niveau) {
		case 4:
			importation_pages = import.meta.glob('$lib/cahier/{composants/{Page0,PageDeGarde,sommaire/Sommaire},cours/4eme/*/*}.svelte', { eager: true });
			break;
		case 5:
			importation_pages = import.meta.glob('$lib/cahier/{composants/{Page0,PageDeGarde,sommaire/Sommaire},cours/5eme/*/*}.svelte', { eager: true });
			break;
		case 6:
			importation_pages = import.meta.glob('$lib/cahier/{composants/{Page0,PageDeGarde,sommaire/Sommaire},cours/6eme/*/*}.svelte', { eager: true });
			break;
		default:
			throw new Error('Niveau inconnu');
	}

	let pages: { composant: Component; nom_fichier: string }[] = Object.entries(importation_pages).map(([nom_fichier, page]) => {
		return {
			composant: page.default,
			nom_fichier
		};
	});
	return pages;
}

export function importer_exercices(niveau: 3 | 4 | 5 | 6) {
	let importation_pages: Record<string, { default: Component }>;

	switch (niveau) {
		case 4:
			importation_pages = import.meta.glob('$lib/cahier/{composants/{Page0,PageDeGarde,sommaire/Sommaire},exercices/4eme/*/*}.svelte', {
				eager: true
			});
			break;
		case 5:
			importation_pages = import.meta.glob('$lib/cahier/{composants/{Page0,PageDeGarde,sommaire/Sommaire},exercices/5eme/*/*}.svelte', {
				eager: true
			});
			break;
		case 6:
			importation_pages = import.meta.glob('$lib/cahier/{composants/{Page0,PageDeGarde,sommaire/Sommaire},exercices/6eme/*/*}.svelte', {
				eager: true
			});
			break;
		default:
			throw new Error('Niveau inconnu');
	}

	let pages: { composant: Component; nom_fichier: string }[] = Object.entries(importation_pages).map(([nom_fichier, page]) => {
		return {
			composant: page.default,
			nom_fichier
		};
	});
	return pages;
}
