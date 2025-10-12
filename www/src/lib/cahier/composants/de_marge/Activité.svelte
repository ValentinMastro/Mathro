<script lang="ts">
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

	interface Props {
		lignes_vides?: number;
		numéro: number;
	}

	let { numéro, lignes_vides = 1 }: Props = $props();
</script>

<div class="activité">
	<center>
		<span>
			Activité {numéro}
		</span>
	</center>
</div>
<LigneVide lignes={lignes_vides} />

<style>
	.activité {
		width: 100%;
		margin-left: auto;
		margin-right: auto;
		color: var(--noir);
		position: relative;
		height: var(--carreau);
	}
	span {
		width: fit-content;
		font-size: calc(var(--taille-page) / 50);
		line-height: calc(var(--taille-page) / 50 * 1.9);
	}
</style>
