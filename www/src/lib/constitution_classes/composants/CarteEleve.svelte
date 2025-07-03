<script lang="ts">
	import { couleur, eleve_et_classe_incompatibles, texte, type Donnees, type Eleve } from '$lib/constitution_classes/donnees/types';
	import { classes } from '$lib/constitution_classes/store.svelte';
	import { draggable } from '$lib/constitution_classes/drag_and_drop';

	let { eleve }: { eleve: Eleve } = $props();

	let erreur_option = $state(false);

	function detecter_erreur_option(): boolean {
		let classe = $classes.find((c) => c.eleves.includes(eleve));
		if (!classe) return false;

		return eleve_et_classe_incompatibles(eleve, classe);
	}

	$effect(() => {
		erreur_option = detecter_erreur_option();
	});
</script>

<div class="carte" style="background-color: {eleve.genre === 'F' ? 'pink' : 'lightblue'};" use:draggable={eleve.id}>
	<div class="niveau">
		{#if eleve.niveau === 'A'}
			<div class="lettre A">A</div>
		{/if}
		{#if eleve.niveau === 'B'}
			<div class="lettre B">B</div>
		{/if}
		{#if eleve.niveau === 'C'}
			<div class="lettre C">C</div>
		{/if}
		{#if eleve.niveau === 'D'}
			<div class="lettre D">D</div>
		{/if}
	</div>
	<div style="width: 2%;"></div>
	<div class="options">
		{#if eleve.LV2 != undefined}
			<div class="lv2" style="background-color: {couleur(eleve.LV2)}">{texte(eleve.LV2)}</div>
		{/if}
		{#each ['chaap', 'latin', 'grec'] as option_string}
			{@const option = option_string as 'chaap' | 'latin' | 'grec'}
			{#if eleve.options[option] != undefined && eleve.options[option]}
				<div class="lv2" style="background-color: {couleur(option.toUpperCase())}">{texte(option.toUpperCase())}</div>
			{/if}
		{/each}
	</div>
	<div class="nom">
		<span style="font-weight: bold; {erreur_option ? 'color: red' : ''}">{eleve.nom}</span>
	</div>
	<div class="info_attitude">
		{#if eleve.moteur != undefined}
			<div class="lettre M">{eleve.moteur}</div>
		{/if}
		{#if eleve.zozo != undefined}
			<div class="lettre Z">{eleve.zozo}</div>
		{/if}
	</div>
</div>

<style>
	.carte {
		width: 97%;
		height: 2vh;
		display: flex;
		flex-direction: row;
		font-size: small;
		color: white;
		border: 1px solid black;
	}
	.nom {
		height: 100%;
		margin-top: auto;
		margin-bottom: auto;
		margin-left: auto;
		margin-right: auto;
		color: black;
	}
	.info_attitude {
		display: flex;
		justify-content: flex-end;
	}
	.options {
		height: 100%;
		width: fit-content;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.lv2 {
		height: 100%;
		width: fit-content;
	}
	.A {
		background-color: darkgreen;
	}
	.B {
		background-color: green;
	}
	.C {
		background-color: rgb(214, 120, 6);
	}
	.D {
		background-color: darkred;
	}
	.M {
		background-color: darkblue;
	}
	.Z {
		background-color: darkred;
	}
	.lettre {
		aspect-ratio: 4/5;
		height: 100%;
		font-weight: bold;
		display: flex;
		justify-content: center;
	}
</style>
