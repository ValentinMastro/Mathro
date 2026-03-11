<script lang="ts">
	import { résoudre_page } from './resolution_chapitres';

	type Props = {
		niveau: 3 | 4 | 5 | 6;
		chapitre: number;
		page: number;
		extrait?: [number, number];
		afficher_seyes?: boolean;
	};

	let { niveau, chapitre, page, extrait = [0, 100], afficher_seyes = false }: Props = $props();

	const Composant = $derived(résoudre_page(niveau, chapitre, page));

	let conteneur = $state<HTMLDivElement | undefined>(undefined);
	let taille_page = $state(0);

	$effect(() => {
		if (!conteneur) return;
		const el = conteneur;
		const observer = new ResizeObserver(() => {
			taille_page = el.clientHeight;
		});
		observer.observe(el);
		return () => observer.disconnect();
	});

	let hauteur_extrait = $derived(`${extrait[1] - extrait[0]}%`);
	let translation = $derived(`translateY(-${extrait[0]}%)`);
	let est_extrait = $derived(extrait[0] !== 0 || extrait[1] !== 100);
</script>

{#if Composant}
	<div class="extrait" style:height={est_extrait ? hauteur_extrait : 'auto'} style:overflow={est_extrait ? 'hidden' : 'visible'}>
		<div
			bind:this={conteneur}
			class="page-de-cours"
			class:seyes={afficher_seyes}
			style="
				--taille-page: {taille_page}px;
				--carreau: {taille_page / 37.1}px;
				--font-size: {taille_page / 60}px;
				--line-height: {(taille_page / 60) * 1.6}px;
				transform: {est_extrait ? translation : 'none'};
			"
		>
			<Composant />
		</div>
	</div>
{/if}

<style>
	.extrait {
		position: relative;
	}

	.page-de-cours {
		color: black;
		aspect-ratio: 210 / 297;
		position: relative;
		display: flex;
		flex-direction: column;
		background-color: white;
		font-family: 'Noto Serif';
		width: 100%;
		border-radius: 4px;
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);

		--bleu: rgb(0, 0, 138);
		--rouge: rgb(225, 0, 0);
		--vert: rgb(0, 138, 0);
		--noir: black;
	}

	.seyes {
		background-image: url('data:image/svg+xml,<%3Fxml version="1.0" encoding="UTF-8" standalone="no"%3F><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="21cm" height="29.7cm" version="1.1" viewBox="0 0 210 297" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title> Page réglure Séyès </title><desc> Page blanche A4 avec réglure Séyès </desc><g id="fond"><rect x="0" y="0" width="210" height="297" rx="0" ry="0" fill="white"/></g><g id="grandeLigne31"><g id="grandeLigne8"><g id="grandeLigne4"><g id="grandeLigne2"><g id="grandeLigne1"><g id="ligne3"><g id="ligne1"><line x1="0" y1="28" x2="210" y2="28" stroke-width="0.199" stroke="%23c8c8de"/></g><use xlink:href="%23ligne1" transform="translate(0 2)"/><use xlink:href="%23ligne1" transform="translate(0 4)"/></g><line x1="0" y1="34" x2="210" y2="34" stroke-width="0.398" stroke="%23c8c8de"/></g><use xlink:href="%23grandeLigne1" transform="translate(0 8)"/></g><use xlink:href="%23grandeLigne2" transform="translate(0 16)"/></g><use xlink:href="%23grandeLigne4" transform="translate(0 32)"/></g><use xlink:href="%23grandeLigne8" transform="translate(0 64)"/><!-- 16 --><use xlink:href="%23grandeLigne8" transform="translate(0 128)"/><!-- 24 --><use xlink:href="%23grandeLigne4" transform="translate(0 192)"/><!-- 28 --><use xlink:href="%23grandeLigne2" transform="translate(0 224)"/><!-- 30 --><use xlink:href="%23grandeLigne1" transform="translate(0 240)"/><!-- 31 --><use xlink:href="%23ligne1" transform="translate(0 248)"/><use xlink:href="%23ligne1" transform="translate(0 250)"/></g><g id="marge"><line x1="42" y1="0" x2="42" y2="297" stroke-width="0.398" stroke="%23f6bbcf"/></g><g id="colonne20"><g id="colonne8"><g id="colonne4"><g id="colonne2"><g id="colonne1"><line x1="50" y1="0" x2="50" y2="297" stroke-width="0.199" stroke="%23c8c8de"/></g><use xlink:href="%23colonne1" transform="translate(8)"/></g><use xlink:href="%23colonne2" transform="translate(16)"/></g><use xlink:href="%23colonne4" transform="translate(32)"/></g><use xlink:href="%23colonne8" transform="translate(64)"/><!-- 16 --><use xlink:href="%23colonne4" transform="translate(128)"/></g></svg>');
		background-size: contain;
	}
</style>
