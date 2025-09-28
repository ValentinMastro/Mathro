<!--
  @component
  ## Schema —
  Permet de dessiner un schéma en SVG

  ### Props
  - `lignes` *(number)* : hauteur (en nombre de lignes de cahier) *(par défaut : 1)*
  - `aspectRatioSVG` *(number)* : aspect ratio de la partie SVG *(par défaut : 1/1)*
  - `svg` *(Snippet)* : Snippet contenant le code svg
  - `html` *(Snippet)* : Snippet contenant le code html
  - `html_lignes_vides` *(number)* : nombre de lignes vides à ajouter avant le html *(par défaut : 0)*
  - `position_html` *('gauche' | 'droite')* : position du html par rapport au svg *(par défaut : 'droite')*
  - `height` *(number)* : hauteur INTERNE du SVG dans le viewport *(par défaut : 1000)*
-->
<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import type { Snippet } from 'svelte';

	type Props = SVGAttributes<SVGSVGElement> & {
		lignes?: number;
		aspectRatioSVG?: number;
		svg?: Snippet;
		html?: Snippet;
		html_lignes_vides?: number;
		position_html?: 'gauche' | 'droite';
		height?: number;
	};
	let { lignes = 1, aspectRatioSVG = 1 / 1, svg, html, html_lignes_vides = 0, position_html = 'droite', height = 1000, ...props }: Props = $props();
</script>

{#snippet afficher_svg()}
	{#if svg}
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {1000 * aspectRatioSVG} {height}" {...props}>
			{@render svg()}
		</svg>
	{/if}
{/snippet}

{#snippet afficher_html()}
	{#if html}
		<div class="html">
			{#if html_lignes_vides !== undefined}
				<LigneVide lignes={html_lignes_vides} />
			{/if}
			{@render html()}
		</div>
	{/if}
{/snippet}

<div class="schema" style="--lignes: {lignes}; --aspectRatioSVG: {aspectRatioSVG}">
	{#if position_html === 'gauche'}
		{@render afficher_html()}
		{@render afficher_svg()}
	{:else}
		{@render afficher_svg()}
		{@render afficher_html()}
	{/if}
</div>

<style>
	.schema {
		display: flex;
		align-items: center;
		width: calc(100% * 80 / 79);
		height: calc(var(--carreau) * var(--lignes));

		--largeur-svg: calc(var(--carreau) * var(--lignes) * var(--aspectRatioSVG));
		--largeur-html: calc(100% - var(--largeur-svg));
	}
	svg {
		height: 100%;
		width: var(--largeur-svg);
	}
	.html {
		height: 100%;
		width: var(--largeur-html);
		font-size: var(--font-size);
		line-height: var(--line-height);
	}
</style>
