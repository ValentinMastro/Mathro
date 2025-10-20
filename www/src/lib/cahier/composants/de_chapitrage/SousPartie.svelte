<script lang="ts">
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';

	interface Props {
		numero: number;
		titre: string;
		lignes_vides?: number;
	}

	let { numero, titre, lignes_vides = 1 }: Props = $props();

	function enLettresMinuscules(n: number) {
		return String.fromCharCode(96 + n);
	}
</script>

<div class="partie">
	<span>
		{enLettresMinuscules(numero)}) {titre}
	</span>
</div>
<LigneVide lignes={lignes_vides} />

<style>
	.partie {
		width: 100%;
		position: relative;
		color: var(--vert);
		height: var(--carreau);
	}
	span {
		position: absolute;
		bottom: 0;
		font-size: calc(var(--taille-page) / 56);
		line-height: calc(var(--taille-page) / 56);
		margin-left: calc(var(--carreau) / 2);
	}
</style>
