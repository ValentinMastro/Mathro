<script lang="ts">
	import type { Snippet } from 'svelte';
	import { page_state, get_tailles, set_taille_page } from '$lib/cahier/store.svelte';

	interface Props {
		numero_de_page: number;
		children: Snippet;
	}

	let { numero_de_page, children }: Props = $props();

	// Le 'composant' permet de récupérer les dimensions de la fenêtre
	let composant: HTMLDivElement;

	let is_seyes: string = $derived(numero_de_page >= 3 ? 'seyes' : '');
	let visibility: string = $derived(numero_de_page == 0 || numero_de_page == 97 ? 'hidden' : 'visible');
	let is_full_screen: string = $derived(page_state.plein_ecran ? `width: ${page_state.largeur_plein_ecran}%` : `height: 100%`);
	let is_zoom_page: string = $derived(page_state.zoom_page ? 'zoom_page' : '');

	$effect(() => {
		const resizeObserver = new ResizeObserver(() => {
			if (composant) {
				set_taille_page(Number(composant.clientHeight));
			}
		});
		resizeObserver.observe(composant);
	});
</script>

<div bind:this={composant} class="page {is_seyes} {is_zoom_page}" style="visibility: {visibility}; {is_full_screen};">
	{@render children()}
	<span class="numero" style="font-size: {get_tailles().numero_de_page}px">Page {numero_de_page}</span>
</div>

<style>
	.page {
		color: black;
		aspect-ratio: 210/297;
		position: relative;
		display: flex;
		flex-direction: column;
		background-color: white;
		font-family: 'Noto Serif', serif;
	}
	@media print {
		.page {
			width: 210mm;
			height: 297mm;
			page-break-after: always;
		}
	}
	.seyes {
		background-image: url('data:image/svg+xml,<%3Fxml version="1.0" encoding="UTF-8" standalone="no"%3F><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="21cm" height="29.7cm" version="1.1" viewBox="0 0 210 297" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title> Page réglure Séyès </title><desc> Page blanche A4 avec réglure Séyès </desc><g id="fond"><rect x="0" y="0" width="210" height="297" rx="0" ry="0" fill="white"/></g><g id="grandeLigne31"><g id="grandeLigne8"><g id="grandeLigne4"><g id="grandeLigne2"><g id="grandeLigne1"><g id="ligne3"><g id="ligne1"><line x1="0" y1="28" x2="210" y2="28" stroke-width="0.199" stroke="%23c8c8de"/></g><use xlink:href="%23ligne1" transform="translate(0 2)"/><use xlink:href="%23ligne1" transform="translate(0 4)"/></g><line x1="0" y1="34" x2="210" y2="34" stroke-width="0.398" stroke="%23c8c8de"/></g><use xlink:href="%23grandeLigne1" transform="translate(0 8)"/></g><use xlink:href="%23grandeLigne2" transform="translate(0 16)"/></g><use xlink:href="%23grandeLigne4" transform="translate(0 32)"/></g><use xlink:href="%23grandeLigne8" transform="translate(0 64)"/><!-- 16 --><use xlink:href="%23grandeLigne8" transform="translate(0 128)"/><!-- 24 --><use xlink:href="%23grandeLigne4" transform="translate(0 192)"/><!-- 28 --><use xlink:href="%23grandeLigne2" transform="translate(0 224)"/><!-- 30 --><use xlink:href="%23grandeLigne1" transform="translate(0 240)"/><!-- 31 --><use xlink:href="%23ligne1" transform="translate(0 248)"/><use xlink:href="%23ligne1" transform="translate(0 250)"/></g><g id="marge"><line x1="42" y1="0" x2="42" y2="297" stroke-width="0.398" stroke="%23f6bbcf"/></g><g id="colonne20"><g id="colonne8"><g id="colonne4"><g id="colonne2"><g id="colonne1"><line x1="50" y1="0" x2="50" y2="297" stroke-width="0.199" stroke="%23c8c8de"/></g><use xlink:href="%23colonne1" transform="translate(8)"/></g><use xlink:href="%23colonne2" transform="translate(16)"/></g><use xlink:href="%23colonne4" transform="translate(32)"/></g><use xlink:href="%23colonne8" transform="translate(64)"/><!-- 16 --><use xlink:href="%23colonne4" transform="translate(128)"/></g></svg>');
		background-size: contain;
	}
	.zoom_page {
		margin-left: -20%;
	}
	.numero {
		position: absolute;
		bottom: 1%;
		left: 1%;
	}
</style>
