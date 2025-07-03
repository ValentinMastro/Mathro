<script lang="ts">
	import {
		// BarreDeRecherche,
		Configuration,
		GrilleClasses,
		PanneauElevesAPlacer,
		PanneauRelationsEleves
	} from '$lib/constitution_classes/composants/*';

	import { classes, eleves } from '$lib/constitution_classes/store.svelte';

	function handleKeydown(event: KeyboardEvent) {
		if (event.ctrlKey && event.altKey && event.key.toLowerCase() === 'c') {
			console.log('Ctrl + Alt + C détecté !');
			classes.set([]);
			eleves.set([]);
		}
	}

	$inspect($classes);
</script>

<svelte:window on:keydown={handleKeydown} />

<PanneauElevesAPlacer />
<!-- <PanneauRelationsEleves /> -->
<Configuration />
<GrilleClasses />
