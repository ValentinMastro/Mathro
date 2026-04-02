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
  - `centré` *(boolean)* : centrage horizontal du SVG *(par défaut : false)*
  - `height` *(number)* : hauteur INTERNE du SVG dans le viewport *(par défaut : 1000)*
-->
<script lang="ts">
	import * as htmlToImage from 'html-to-image';
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
		centré?: boolean;
		height?: number;
	};
	let {
		lignes = 1,
		aspectRatioSVG = 1 / 1,
		svg,
		html,
		html_lignes_vides = 0,
		position_html = 'droite',
		centré = false,
		height = 1000,
		...props
	}: Props = $props();

	let margin = $derived(centré ? 'margin-left: auto; margin-right: auto;' : '');

	let schema_el = $state<HTMLDivElement | null>(null);
	let menu = $state<{ visible: boolean; x: number; y: number }>({ visible: false, x: 0, y: 0 });

	function afficher_menu(event: MouseEvent) {
		event.preventDefault();
		menu = { visible: true, x: event.clientX, y: event.clientY };
	}

	function fermer_menu() {
		menu.visible = false;
	}

	function on_keydown(event: KeyboardEvent) {
		if (event.key === 'Escape') fermer_menu();
	}

	async function ouvrir_dans_nouvel_onglet() {
		fermer_menu();
		if (!schema_el) return;

		const rect = schema_el.getBoundingClientRect();
		const ratio = rect.width / rect.height;

		// Zone utile A4 avec marges 10mm : 190mm × 277mm
		const zone_w = 190;
		const zone_h = 277;

		// Trouver le plus petit nombre de colonnes qui donne au moins 2 copies
		// (= schémas les plus grands possibles tout en ayant plusieurs copies)
		let meilleur_cols = 1;
		let meilleur_rows = 1;
		for (let n_cols = 1; n_cols <= 10; n_cols++) {
			const largeur_schema = zone_w / n_cols;
			const hauteur_schema = largeur_schema / ratio;
			const n_rows = Math.floor(zone_h / hauteur_schema);
			if (n_rows === 0) continue;
			meilleur_cols = n_cols;
			meilleur_rows = n_rows;
			if (n_cols * n_rows >= 2) break;
		}
		const meilleur_total = meilleur_cols * meilleur_rows;

		const dataUrl = await htmlToImage.toPng(schema_el, { pixelRatio: 2, cacheBust: true, skipFonts: true });

		const images = Array.from({ length: meilleur_total }, () => `<img src="${dataUrl}" />`).join('');
		const page_html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>Schéma</title>
<style>
  @page { size: A4; margin: 10mm; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { width: 190mm; }
  .grille {
    display: grid;
    grid-template-columns: repeat(${meilleur_cols}, 1fr);
    grid-template-rows: repeat(${meilleur_rows}, auto);
    gap: 0;
    width: 190mm;
  }
  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
  }
</style>
</head>
<body>
<div class="grille">${images}</div>
</body>
</html>`;

		const nouvel_onglet = window.open('', '_blank');
		if (nouvel_onglet) {
			nouvel_onglet.document.write(page_html);
			nouvel_onglet.document.close();
		}
	}
</script>

<svelte:window onclick={fermer_menu} onkeydown={on_keydown} />

{#snippet afficher_svg()}
	{#if svg}
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {1000 * aspectRatioSVG} {height}" style={margin} {...props}>
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

<div class="schema" role="img" style="--lignes: {lignes}; --aspectRatioSVG: {aspectRatioSVG};" bind:this={schema_el} oncontextmenu={afficher_menu}>
	{#if position_html === 'gauche'}
		{@render afficher_html()}
		{@render afficher_svg()}
	{:else}
		{@render afficher_svg()}
		{@render afficher_html()}
	{/if}
</div>

{#if menu.visible}
	<div class="menu-contextuel" style="left: {menu.x}px; top: {menu.y}px;">
		<button onclick={ouvrir_dans_nouvel_onglet}>Ouvrir cette image dans un nouvel onglet</button>
	</div>
{/if}

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
	.menu-contextuel {
		position: fixed;
		z-index: 9999;
		background: white;
		border: 1px solid #ccc;
		border-radius: 4px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
		padding: 4px 0;
	}
	.menu-contextuel button {
		display: block;
		width: 100%;
		padding: 6px 16px;
		background: none;
		border: none;
		cursor: pointer;
		font-size: 13px;
		text-align: left;
		white-space: nowrap;
	}
	.menu-contextuel button:hover {
		background: #f0f0f0;
	}
</style>
