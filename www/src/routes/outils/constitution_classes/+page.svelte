<script lang="ts">
	import {
		// BarreDeRecherche,
		Configuration,
		GrilleClasses,
		PanneauElevesAPlacer,
		PanneauRelationsEleves
	} from '$lib/constitution_classes/composants/*';

	import { classes, eleves } from '$lib/constitution_classes/store.svelte';
	import { afficher_classe_eleves_trier_par_ordre_croissant } from '$lib/constitution_classes/donnees/sauvegarder_et_restaurer';

	function handleKeydown(event: KeyboardEvent) {
		if (event.ctrlKey && event.altKey && event.key.toLowerCase() === 'c') {
			console.log('Ctrl + Alt + C détecté !');
			classes.value = [];
			eleves.value = [];
		}
		if (event.ctrlKey && event.altKey && event.key.toLowerCase() === 'j') {
			afficher_classe_eleves_trier_par_ordre_croissant();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<PanneauElevesAPlacer />
<!-- <PanneauRelationsEleves /> -->
<Configuration />
<GrilleClasses />
