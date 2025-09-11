<!--
  @component
  ## Rectangle -- (extends SVGRectElement)
  Tracer un rectangle

  ### Props
  - `points`: *[{x: number, y: number}, {x: number, y: number}]* deux sommets opposés du rectangle
-->

<script lang="ts">
	import { type SVGAttributes } from 'svelte/elements';

	type Props = Omit<SVGAttributes<SVGRectElement>, 'points'> & {
		points: [{ x: number; y: number }, { x: number; y: number }];
	};

	let { points, ...props }: Props = $props();

	let A = { x: Math.min(points[0].x, points[1].x), y: Math.min(points[0].y, points[1].y) };
	let B = { x: Math.max(points[0].x, points[1].x), y: Math.max(points[0].y, points[1].y) };
</script>

<rect {...props} x={A.x} y={A.y} width={B.x - A.x} height={B.y - A.y} />
