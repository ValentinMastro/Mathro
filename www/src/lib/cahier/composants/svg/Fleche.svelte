<!--
  @component
  ## Flèche
  Trace une flèche entre deux points.

  ### Props
  - `points` *[{ x: number; y: number }, { x: number; y: number }]* : extrémités de la flèche
  - `taille` *(number)* : longueur de la pointe
  - `largeur` *(number)* : demi-largeur de la pointe
-->
<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';

	type Props = Omit<SVGAttributes<SVGPathElement>, 'x1' | 'y1' | 'x2' | 'y2' | 'points'> & {
		points: [{ x: number; y: number }, { x: number; y: number }];
		taille?: number;
		largeur?: number;
	};

	let { points, taille = 30, largeur, ...props }: Props = $props();
	let valeursParDefault = {
		stroke: props['stroke'] || 'black',
		fill: props['fill'] || 'black',
		'stroke-width': props['stroke-width'] || 5
	};

	let x1 = points[0].x;
	let y1 = points[0].y;
	let x2 = points[1].x;
	let y2 = points[1].y;

	let dx = Number(x2) - Number(x1);
	let dy = Number(y2) - Number(y1);
	let L = Math.hypot(dx, dy) || 1;

	let tailleEff = Math.min(Number(taille), L * 0.9);

	let ux = dx / L;
	let uy = dy / L;
	let nx = -uy;
	let ny = ux;

	let bx = Number(x2) - ux * tailleEff;
	let by = Number(y2) - uy * tailleEff;

	let demi = largeur ?? tailleEff / Math.sqrt(3);

	let p1x = bx + nx * demi;
	let p1y = by + ny * demi;
	let p2x = bx - nx * demi;
	let p2y = by - ny * demi;

	let d = `M ${x1} ${y1} L ${bx} ${by} M ${x2} ${y2} L ${p1x} ${p1y} L ${p2x} ${p2y} Z`;
</script>

<path {d} {...props} {...valeursParDefault} />
