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

<div class="partie">
	<span>
		{enChiffresRomains(numero)}) {titre}
	</span>
</div>
<LigneVide lignes={lignes_vides} />

<style>
	.partie {
		width: 100%;
		position: relative;
		color: var(--bleu);
		height: var(--carreau);
	}
	span {
		position: absolute;
		bottom: 0;
		font-size: calc(var(--taille-page) / 60);
		line-height: calc(var(--taille-page) / 60);
	}
</style>
