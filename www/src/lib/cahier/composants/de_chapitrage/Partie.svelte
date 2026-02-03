<script lang="ts">
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { chiffres_romains } from '$lib/cahier/composants/math/*';

	interface Props {
		numero: number;
		titre: string;
		lignes_vides?: number;
	}

	let { numero, titre, lignes_vides = 1 }: Props = $props();
</script>

<div class="partie">
	<span>
		{chiffres_romains(numero)} - {titre}
	</span>
</div>
<LigneVide lignes={lignes_vides} />

<style>
	.partie {
		width: 100%;
		position: relative;
		color: var(--rouge);
		height: var(--carreau);
	}
	span {
		position: absolute;
		bottom: 0;
		font-size: calc(var(--taille-page) / 50);
		line-height: calc(var(--taille-page) / 50);
		margin-left: var(--carreau);
	}
</style>
