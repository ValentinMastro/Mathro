<script lang="ts">
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

	interface Props {
		lignes_vides?: number;
		numéro: number;
		position?: number;
	}

	let { numéro, lignes_vides = 1, position = 1 }: Props = $props();
</script>

<div class="exercice-marge" style="--position: {position};">
	<span>
		Exercice {numéro}
	</span>
</div>
<LigneVide lignes={lignes_vides} />

<style>
	.exercice-marge {
		position: absolute;
		top: calc(8.72% + (var(--position) - 1) * var(--carreau));

		width: 20%;
		height: var(--carreau);
		color: var(--noir);

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;

		span {
			margin-bottom: -0.1em;
			font-size: calc(var(--taille-page) / 50);
			line-height: calc(var(--taille-page) / 50);
		}
	}
</style>
