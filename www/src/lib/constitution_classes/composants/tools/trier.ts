import { classes } from '$lib/constitution_classes/store.svelte';

export function trier_par_nom_croissant() {
	classes.update((cls) => {
		cls.forEach((c) => {
			c.eleves.sort((a, b) => a.nom.localeCompare(b.nom));
		});
		return cls;
	});
}

export function trier_par_nom_decroissant() {
	classes.update((cls) => {
		cls.forEach((c) => {
			c.eleves.sort((a, b) => b.nom.localeCompare(a.nom));
		});
		return cls;
	});
}

export function trier_par_note_croissante() {
	classes.update((classes) => {
		classes.forEach((classe) => {
			classe.eleves.sort((eleve1, eleve2) => {
				if (eleve1.niveau !== undefined && eleve2.niveau === undefined) {
					return -2;
				} else if (eleve1.niveau === undefined && eleve2.niveau !== undefined) {
					return 2;
				} else if (eleve1.niveau === undefined && eleve2.niveau === undefined) {
					return 0;
				} else {
					return (eleve1.niveau as string).localeCompare(eleve2.niveau as string);
				}
			});
		});
		return classes;
	});
}
