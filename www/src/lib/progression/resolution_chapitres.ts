import { type Component } from 'svelte';

type IndexDePages = Record<string, Component>;

function indexer(importation: Record<string, { default: Component }>): IndexDePages {
	const index: IndexDePages = {};
	for (const [chemin, module] of Object.entries(importation)) {
		const parties = chemin.split('/');
		const nom_fichier = parties.at(-1) ?? '';
		const dossier = parties.at(-2) ?? '';
		const numero_chapitre = Number.parseInt(dossier.split(' - ')[0] ?? '0', 10);
		const numero_page = Number.parseInt(nom_fichier.replace('Page', '').replace('.svelte', ''), 10);
		if (!Number.isNaN(numero_chapitre) && !Number.isNaN(numero_page)) {
			index[`${numero_chapitre}-${numero_page}`] = module.default;
		}
	}
	return index;
}

function importer_cours_par_niveau(niveau: 3 | 4 | 5 | 6): IndexDePages {
	switch (niveau) {
		case 4:
			return indexer(import.meta.glob('$lib/cahier/cours/4eme/*/**.svelte', { eager: true }));
		case 5:
			return indexer(import.meta.glob('$lib/cahier/cours/5eme/*/**.svelte', { eager: true }));
		case 6:
			return indexer(import.meta.glob('$lib/cahier/cours/6eme/*/**.svelte', { eager: true }));
		default:
			return indexer(import.meta.glob('$lib/cahier/cours/3eme/*/**.svelte', { eager: true }));
	}
}

const cache = new Map<number, IndexDePages>();

export function résoudre_page(niveau: 3 | 4 | 5 | 6, chapitre: number, page: number): Component | undefined {
	if (!cache.has(niveau)) {
		cache.set(niveau, importer_cours_par_niveau(niveau));
	}
	return cache.get(niveau)![`${chapitre}-${page}`];
}
