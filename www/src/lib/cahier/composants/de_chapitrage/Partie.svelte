<script lang="ts">
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

	interface Props {
		numero: number;
		titre: string;
		lignes_vides?: number;
	}

	let { numero, titre, lignes_vides = 1 }: Props = $props();

	function enChiffresRomains(n: number) {
		switch (n) {
			case 1:
				return 'I';
			case 2:
				return 'II';
			case 3:
				return 'III';
			case 4:
				return 'IV';
			case 5:
				return 'V';
			case 6:
				return 'VI';
			case 7:
				return 'VII';
			case 8:
				return 'VIII';
			case 9:
				return 'IX';
			case 10:
				return 'X';
			default:
				return n.toString();
		}
	}
</script>

<div class="partie">
	<span>
		{enChiffresRomains(numero)} - {titre}
	</span>
</div>
<LigneVide lignes={lignes_vides} />

<style>
	.partie {
		width: 100%;
		color: rgb(225, 0, 0);
		position: relative;
		height: var(--carreau);
	}
	span {
		position: absolute;
		bottom: 0;
		margin-left: var(--carreau);
		font-size: calc(var(--taille-page) / 50);
		line-height: calc(var(--taille-page) / 50 * 0.72);
	}
</style>
