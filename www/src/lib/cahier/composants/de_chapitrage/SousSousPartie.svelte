<script lang="ts">
	interface Props {
		numero: number;
		titre: string;
		lignes_vides?: number;
	}

	let { numero, titre, lignes_vides = 1 }: Props = $props();

	import { get_tailles } from '$lib/cahier/store.svelte';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

	function enChiffresRomains(n: number) {
		switch (n) {
			case 1:
				return 'i';
			case 2:
				return 'ii';
			case 3:
				return 'iii';
			case 4:
				return 'iv';
			case 5:
				return 'v';
			case 6:
				return 'vi';
			case 7:
				return 'vii';
			case 8:
				return 'viii';
			case 9:
				return 'ix';
			case 10:
				return 'x';
			default:
				return n.toString();
		}
	}
</script>

<div class="partie" style="height: {get_tailles().hauteur_ligne_cahier}px;">
	<span style="font-size: {get_tailles().titre_de_sections * 0.85}px;">
		{enChiffresRomains(numero)}) {titre}
	</span>
</div>
<LigneVide lignes={lignes_vides} />

<style>
	.partie {
		width: 100%;
		color: rgb(0, 0, 138);
		position: relative;
	}
	span {
		position: absolute;
		bottom: 0;
		margin-bottom: -0.25em;
	}
</style>
