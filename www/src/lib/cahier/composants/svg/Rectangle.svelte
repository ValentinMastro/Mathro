<!--
  @component
  ## Rectangle -- (extends SVGRectElement)
  Tracer un rectangle

  ### Props
  - `points`: *[{x: number, y: number}, {x: number, y: number}]* deux sommets opposés du rectangle
-->

<script lang="ts">
	import { type SVGAttributes } from 'svelte/elements';
	import type { ExtrémitésSegment } from './*';

	type Props = Omit<SVGAttributes<SVGRectElement>, 'points'> & {
		points: ExtrémitésSegment;
	};

	let { points, ...props }: Props = $props();

	let valeursParDefaut = {
		stroke: props['stroke'] || 'black',
		'stroke-width': props['stroke-width'] || '5',
		fill: props['fill'] || 'none'
	};

	let A = { x: Math.min(points[0].x, points[1].x), y: Math.min(points[0].y, points[1].y) };
	let B = { x: Math.max(points[0].x, points[1].x), y: Math.max(points[0].y, points[1].y) };
</script>

<rect x={A.x} y={A.y} width={B.x - A.x} height={B.y - A.y} {...props} {...valeursParDefaut} />
