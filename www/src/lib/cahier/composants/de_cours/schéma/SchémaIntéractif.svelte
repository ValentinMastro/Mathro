<!--
  @component
  ## SchémaIntéractif —
  Schéma SVG interactif avec points déplaçables à la souris ou au toucher.
  Wrapper autour de `Schema` qui gère automatiquement les événements pointer.

  ### Props
  - Mêmes props que `Schema`
  - `points_intéractifs` *(Coordonnées2D[])* : liste des points réactifs déplaçables
  - `seuil` *(number)* : distance max (en unités SVG) pour sélectionner un point *(par défaut : 40)*
-->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { SVGAttributes } from 'svelte/elements';
	import type { Coordonnées2D } from '$lib/cahier/composants/svg/*';
	import Schema from './Schéma.svelte';

	type Props = SVGAttributes<SVGSVGElement> & {
		lignes?: number;
		aspectRatioSVG?: number;
		svg?: Snippet;
		html?: Snippet;
		html_lignes_vides?: number;
		position_html?: 'gauche' | 'droite';
		centré?: boolean;
		height?: number;
		points_intéractifs: Coordonnées2D[];
		seuil?: number;
		style?: string;
	};

	let { points_intéractifs, seuil = 40, style = '', ...schemaProps }: Props = $props();
	let seuil_au_carre = $derived(seuil * seuil);

	let enDrag: Coordonnées2D | null = null;
	let pointerId: number | null = null;

	function getSVG(e: Event): SVGSVGElement | null {
		return (e.target as Element | null)?.closest('svg') as SVGSVGElement | null;
	}

	function toSVGPoint(e: PointerEvent, svg: SVGSVGElement): Coordonnées2D | null {
		const pt = svg.createSVGPoint();
		pt.x = e.clientX;
		pt.y = e.clientY;
		const ctm = svg.getScreenCTM();
		if (!ctm) return null;
		const p = pt.matrixTransform(ctm.inverse());
		return { x: p.x, y: p.y };
	}

	function pickPoint(p: Coordonnées2D): Coordonnées2D | null {
		let meilleur: Coordonnées2D | null = null;
		let dmin = Infinity;
		for (const pt of points_intéractifs) {
			const dx = p.x - pt.x,
				dy = p.y - pt.y;
			const d = dx * dx + dy * dy;
			if (d < dmin) {
				dmin = d;
				meilleur = pt;
			}
		}
		return dmin <= seuil_au_carre ? meilleur : null;
	}

	function onpointerdown(e: PointerEvent) {
		const svg = getSVG(e);
		if (!svg) return;
		const p = toSVGPoint(e, svg);
		if (!p) return;
		const pt = pickPoint(p);
		if (!pt) return;
		enDrag = pt;
		pointerId = e.pointerId;
		(e.currentTarget as HTMLElement).setPointerCapture?.(pointerId);
		pt.x = p.x;
		pt.y = p.y;
		e.preventDefault?.();
	}

	function onpointermove(e: PointerEvent) {
		if (!enDrag) return;
		const svg = getSVG(e);
		if (!svg) return;
		const p = toSVGPoint(e, svg);
		if (!p) return;
		enDrag.x = p.x;
		enDrag.y = p.y;
	}

	function endDrag(e: PointerEvent) {
		if (pointerId != null) {
			try {
				(e.currentTarget as HTMLElement).releasePointerCapture(pointerId);
			} catch {}
		}
		enDrag = null;
		pointerId = null;
	}
</script>

<Schema
	{onpointerdown}
	{onpointermove}
	onpointerup={endDrag}
	onpointercancel={endDrag}
	onpointerleave={endDrag}
	style="touch-action: none; {style}"
	{...schemaProps}
/>
