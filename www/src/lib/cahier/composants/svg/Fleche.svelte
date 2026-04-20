<!--
  @component
  ## Flèche — (extends SVGPathElement)
  Trace une flèche entre deux points.

  ### Props
  - `points` *ExtrémitésSegment* : extrémités de la flèche
  - `taille?` *number* : longueur de la pointe *(par défaut : 30)*
  - `largeur?` *number* : demi-largeur de la pointe *(par défaut : taille / √3)*
  - `stroke?` *string* : couleur du trait *(par défaut : 'black')*
  - `stroke-width?` *number* : épaisseur du trait *(par défaut : 5)*
  - `fill?` *string* : couleur de remplissage *(par défaut : 'black')*
-->
<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import type { ExtrémitésSegment } from './*';

	export type FlècheProps = Omit<SVGAttributes<SVGPathElement>, 'x1' | 'y1' | 'x2' | 'y2' | 'points'> & {
		points: ExtrémitésSegment;
		taille?: number;
		largeur?: number;
	};

	let { points, taille = 30, largeur, ...props }: FlècheProps = $props();
	let valeursParDefaut = {
		stroke: 'black',
		fill: 'black',
		'stroke-width': 5
	};

	let x1 = $derived(points[0].x);
	let y1 = $derived(points[0].y);
	let x2 = $derived(points[1].x);
	let y2 = $derived(points[1].y);

	let dx = $derived(Number(x2) - Number(x1));
	let dy = $derived(Number(y2) - Number(y1));
	let L = $derived(Math.hypot(dx, dy) || 1);

	let tailleEff = $derived(Math.min(Number(taille), L * 0.9));

	let ux = $derived(dx / L);
	let uy = $derived(dy / L);
	let nx = $derived(-uy);
	let ny = $derived(ux);

	let bx = $derived(Number(x2) - ux * tailleEff);
	let by = $derived(Number(y2) - uy * tailleEff);

	let demi = $derived(largeur ?? tailleEff / Math.sqrt(3));

	let p1x = $derived(bx + nx * demi);
	let p1y = $derived(by + ny * demi);
	let p2x = $derived(bx - nx * demi);
	let p2y = $derived(by - ny * demi);

	let d = $derived(`M ${x1} ${y1} L ${bx} ${by} M ${x2} ${y2} L ${p1x} ${p1y} L ${p2x} ${p2y} Z`);
</script>

<path {d} {...valeursParDefaut} {...props} />
