<script lang="ts">
	import type { Component } from 'svelte';

	import { page_state } from '$lib/cahier/store.svelte';
	import PageDeCahier from './PageDeCahier.svelte';
	import Scroll from './Scroll.svelte';
	import { importer_pages } from '$lib/cahier/importation_pages';

	let pages = $derived(importer_pages(page_state.niveau));
	let PageGauche: Component = $derived(pages[page_state.numero_de_la_page]);
	let PageDroite: Component = $derived(pages[page_state.numero_de_la_page + 1]);
</script>

<div id="zone">
	{#if page_state.plein_ecran}
		<input id="largeur" type="range" min="0" max="100" bind:value={page_state.largeur_plein_ecran} />
		<Scroll {pages} />
	{:else}
		<PageDeCahier numero_de_page={page_state.numero_de_la_page}>
			<PageGauche />
		</PageDeCahier>
		<PageDeCahier numero_de_page={page_state.numero_de_la_page + 1}>
			<PageDroite />
		</PageDeCahier>
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
</style>
