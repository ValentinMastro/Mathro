<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';

	type Props = Omit<SVGAttributes<SVGLineElement>, 'x1' | 'y1' | 'x2' | 'y2' | 'points'> & {
		points: [{ x: number; y: number }, { x: number; y: number }];
	};

	let { points, ...props }: Props = $props();
	let valeursParDefaut = {
		stroke: props['stroke'] || 'black',
		'stroke-width': props['stroke-width'] || 5,
		fill: props['fill'] || 'none'
	};

	let x1 = $derived(points[0].x);
	let y1 = $derived(points[0].y);
	let x2 = $derived(points[1].x);
	let y2 = $derived(points[1].y);
</script>

<line {x1} {x2} {y1} {y2} {...props} {...valeursParDefaut} />
