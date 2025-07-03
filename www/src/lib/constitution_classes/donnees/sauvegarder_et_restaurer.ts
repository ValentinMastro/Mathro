import { get } from 'svelte/store';
import { classes, eleves } from '$lib/constitution_classes/store.svelte';

export function sauvegarder() {
	const data = {
		classes: get(classes),
		eleves: get(eleves)
	};

	const blob = new Blob([JSON.stringify(data, null, 2)], {
		type: 'application/json'
	});

	const url = URL.createObjectURL(blob);
	const a = document.createElement('a');
	a.href = url;
	a.download = 'sauvegarde_donnees.json';
	a.click();
	URL.revokeObjectURL(url);
}

export function restaurerDepuisJSON(fichier: File) {
	console.log('restaurerDepuisJSON');
	const reader = new FileReader();
	reader.onload = (event) => {
		try {
			const contenu = JSON.parse(event.target?.result as string);
			if (contenu.classes && contenu.eleves) {
				classes.set(contenu.classes);
				eleves.set(contenu.eleves);
			} else {
				console.error('Fichier invalide : données manquantes');
			}
		} catch (e) {
			console.error('Erreur de lecture du fichier :', e);
		}
	};
	reader.readAsText(fichier);
}
