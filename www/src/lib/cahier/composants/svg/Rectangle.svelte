<!--
  @component
  ## Rectangle — (extends SVGRectElement)
  Tracer un rectangle

  ### Props
  - `points` *ExtrémitésSegment* : deux sommets opposés du rectangle
  - `stroke?` *string* : couleur du trait *(par défaut : 'black')*
  - `stroke-width?` *number* : épaisseur du trait *(par défaut : 5)*
  - `fill?` *string* : couleur de remplissage *(par défaut : 'none')*
-->

<script lang="ts">
	import { type SVGAttributes } from 'svelte/elements';
	import type { ExtrémitésSegment } from './*';

	type Props = Omit<SVGAttributes<SVGRectElement>, 'points'> & {
		points: ExtrémitésSegment;
	};

	let { points, ...props }: Props = $props();

	let valeursParDefaut = {
		stroke: 'black',
		'stroke-width': 5,
		fill: 'none'
	};

	let A = { x: Math.min(points[0].x, points[1].x), y: Math.min(points[0].y, points[1].y) };
	let B = { x: Math.max(points[0].x, points[1].x), y: Math.max(points[0].y, points[1].y) };
</script>

<rect x={A.x} y={A.y} width={B.x - A.x} height={B.y - A.y} {...valeursParDefaut} {...props} />
