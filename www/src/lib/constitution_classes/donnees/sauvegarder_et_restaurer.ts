import { classes, eleves } from '$lib/constitution_classes/store.svelte';

export function sauvegarder() {
	const data = {
		classes: classes.value,
		eleves: eleves.value
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
				classes.value = contenu.classes;
				eleves.value = contenu.eleves;
			} else {
				console.error('Fichier invalide : données manquantes');
			}
		} catch (e) {
			console.error('Erreur de lecture du fichier :', e);
		}
	};
	reader.readAsText(fichier);
}

export function afficher_classe_eleves_trier_par_ordre_croissant() {
	let mes_classes = classes.value;
	let mes_eleves = mes_classes.flatMap((classe) => classe.eleves);
	mes_eleves.sort((e1, e2) => e1.nom.localeCompare(e2.nom));
	let affichage_des_classes = mes_eleves.map((eleve) => mes_classes.find((c) => c.eleves.includes(eleve))?.index);
	console.log(affichage_des_classes.join('\n'));
}
