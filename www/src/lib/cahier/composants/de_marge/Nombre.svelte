<script lang="ts">
	interface Props {
		valeur: number;
		label?: string;
		min: number;
		max: number;
		step?: number;
	}

	import { hauteur_ligne_cahier, taille_texte } from '$lib/cahier/store.svelte';

	let { valeur = $bindable(), label = '', min, max, step = 1 }: Props = $props();
</script>

<div class="marge" style="--hauteur: {$hauteur_ligne_cahier}px; --taille-texte: {$taille_texte * 0.75}px;">
	<label for="id">{label}</label>
	<input id="id" type="number" bind:value={valeur} {min} {max} {step} />
</div>

<style>
	.marge {
		height: var(--hauteur);
		width: 100%;
		background-color: black;
		color: white;
		font-weight: bold;
		font-size: var(--taille-texte);

		display: flex;
		align-items: center;
		justify-content: space-around;

		input {
			width: fit-content;
			height: fit-content;
			font-size: calc(var(--taille-texte) * 0.8);
		}
	}
</style>
