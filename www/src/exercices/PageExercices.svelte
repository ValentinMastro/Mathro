<script lang="ts">
	/**
	 * @component PageExercices — page plein écran pour afficher des exercices sur un tableau interactif.
	 * Les children doivent être agencés via une grille CSS définie par le parent.
	 */
	import Écran from '$activité/Écran.svelte';

	let { children }: { children: import('svelte').Snippet } = $props();
</script>

<Écran>
	<div class="grille-exercices">
		{@render children()}
	</div>
</Écran>

<style>
	.grille-exercices {
		width: calc(100vw - 4rem);
		height: calc(100vh - 4rem);
		display: grid;
		gap: 0.5rem;
		font-family: 'Segoe UI', system-ui, sans-serif;
	}
</style>
