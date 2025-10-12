<script lang="ts">
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	interface Props {
		valeur: number;
		label?: string;
		min: number;
		max: number;
		pas?: number;
		lignes_vides?: number;
	}

	let { valeur = $bindable(), label = '', min, max, pas = 1, lignes_vides = 0 }: Props = $props();
</script>

<div>
	{#if label}
		<label for="slider">{@html label}</label>
	{/if}
	<input id="slider" type="range" bind:value={valeur} {min} {max} step={pas} />
</div>
{#if lignes_vides > 0}
	<LigneVide lignes={lignes_vides} />
{/if}

<style>
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		height: var(--carreau);
		font-size: var(--font-size);
		line-height: var(--line-height);
	}
	label {
		margin-left: 3%;
		margin-right: 3%;
		width: fit-content;
	}
	input {
		width: 95%;
	}
</style>
