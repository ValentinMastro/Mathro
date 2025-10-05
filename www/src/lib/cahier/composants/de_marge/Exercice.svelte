<script lang="ts">
	import AffichageExercice from './exercices/AffichageExercice.svelte';
	import { type ExerciceProps } from './exercices/utils';

	let { niveau, id_exercice, position }: ExerciceProps = $props();
	let afficher_exercice = $state(false);
</script>

<div class="exercice" style="--position: {position};">
	<button onclick={() => (afficher_exercice = !afficher_exercice)} title="Afficher l'exercice">
		<img src="/haltere.png" alt="Haltère" />
	</button>
</div>
{#if afficher_exercice}
	<AffichageExercice {niveau} {id_exercice} />
{/if}

<style>
	.exercice {
		position: absolute;
		width: calc(2 * var(--carreau));
		height: calc(2 * var(--carreau));
		top: calc(var(--position) * var(--carreau));
		left: calc(50% - var(--carreau));
	}
	button {
		width: 100%;
		height: 100%;
		background-color: #cccccc;
		border: 0px;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
</style>
