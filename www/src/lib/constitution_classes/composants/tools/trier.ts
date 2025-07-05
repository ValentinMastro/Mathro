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
