<script lang="ts">
	import { sommaire } from '$lib/cahier/contenu/sommaires';
	import { page_state, get_tailles } from '$lib/cahier/store.svelte';
	import Bulle from '../sommaire/Bulle.svelte';

	interface Props {
		titre: string;
		numero_chapitre?: number;
		annexe?: boolean;
	}

	let { titre, numero_chapitre = sommaire(page_state.niveau).findIndex((chapitre) => chapitre.titre == titre) + 1, annexe = false }: Props = $props();
	let afficher_bulle = $state(false);
	let position_bulle = $state({ x: 0, y: 0 });
	let objectifs = sommaire(page_state.niveau).find((chapitre) => chapitre.titre == titre)?.objectifs;
</script>

<div class="chapitre">
	<div
		id="numero"
		role="none"
		onmouseenter={() => (afficher_bulle = true)}
		onmouseleave={() => (afficher_bulle = false)}
		onmousemove={(e) => (position_bulle = { x: e.clientX, y: e.clientY })}
	>
		{#if !annexe}
			Chapitre {String(numero_chapitre).padStart(2, '0')}
		{:else}
			Annexe {String.fromCharCode(numero_chapitre + 64)}
		{/if}
		{#if objectifs != undefined}
			<Bulle {afficher_bulle} {position_bulle} {objectifs} titre />
		{/if}
	</div>
	<div id="titre">{titre}</div>
</div>

<style>
	.chapitre {
		color: rgb(225, 0, 0);
		font-size: calc(var(--taille-page) / 42);
		line-height: calc(var(--taille-page) / 42 * 1.22);
	}
	#numero {
		position: absolute;
		top: 9.15%;
		left: 1%;
	}
	#titre {
		position: absolute;
		top: 9.15%;
		left: 22%;
		text-wrap: wrap;
	}
</style>
