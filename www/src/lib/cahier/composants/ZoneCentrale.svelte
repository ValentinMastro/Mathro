<script lang="ts">
	import type { Component } from 'svelte';

	import { page_state, PAGES } from '$lib/cahier/store.svelte';
	import PageDeCahier from './PageDeCahier.svelte';
	import Scroll from './Scroll.svelte';

	let page_gauche = $derived(PAGES.liste[page_state.numero_de_la_page]);
	let page_droite = $derived(PAGES.liste[page_state.numero_de_la_page + 1]);
	let PageGauche: Component | undefined = $derived(page_gauche?.composant);
	let PageDroite: Component | undefined = $derived(page_droite?.composant);
</script>

<div id="zone">
	{#if page_state.plein_ecran}
		<input id="largeur" type="range" min="0" max="100" bind:value={page_state.largeur_plein_ecran} />
		<Scroll />
	{:else}
		{#if PageGauche && page_gauche}
			<div class="page-wrapper" class:zoom={page_state.zoom_page}>
				<PageDeCahier numero_de_page={page_state.numero_de_la_page} nom_fichier={page_gauche.nom_fichier}>
					<PageGauche />
				</PageDeCahier>
			</div>
		{/if}
		{#if PageDroite && page_droite}
			<div class="page-wrapper" class:zoom={page_state.zoom_page}>
				<PageDeCahier numero_de_page={page_state.numero_de_la_page + 1} nom_fichier={page_droite.nom_fichier}>
					<PageDroite />
				</PageDeCahier>
			</div>
		{/if}
	{/if}
</div>

<style>
	#zone {
		width: 100vw;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;

		display: flex;
		justify-content: space-evenly;
	}
	#largeur {
		position: fixed;
		bottom: 1vh;
		right: 1vw;
		width: 5vw;
		z-index: 2;
	}
	@media print {
		#largeur {
			display: none;
		}
	}
	.page-wrapper {
		height: 100%;
		display: contents;
	}
	.page-wrapper.zoom {
		display: block;
		overflow: hidden;
		aspect-ratio: 168 / 248;
	}
</style>
