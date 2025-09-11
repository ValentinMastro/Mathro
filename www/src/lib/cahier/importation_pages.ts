import { type Component } from 'svelte';

export function importer_pages(niveau: 3 | 4 | 5 | 6) {
	let importation_pages: Record<string, { default: Component }>;

	switch (niveau) {
		case 4:
			importation_pages = import.meta.glob('$lib/cahier/{composants/{Page0,PageDeGarde,sommaire/Sommaire},contenu/4eme/*/*}.svelte', { eager: true });
			break;
		case 5:
			importation_pages = import.meta.glob('$lib/cahier/{composants/{Page0,PageDeGarde,sommaire/Sommaire},contenu/5eme/*/*}.svelte', { eager: true });
			break;
		case 6:
			importation_pages = import.meta.glob('$lib/cahier/{composants/{Page0,PageDeGarde,sommaire/Sommaire},contenu/6eme/*/*}.svelte', { eager: true });
			break;
		default:
			throw new Error('Niveau inconnu');
	}

	let pages: Component[] = Object.entries(importation_pages).map(([_, page]) => page.default);
	return pages;
}
