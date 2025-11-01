<!--
    @component

    ## Segment
    Trace un segment
    ### Props
    - `points` *ExtrémitésSegment* : extrémités du segment
-->

<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import type { ExtrémitésSegment } from './*';

	type Props = Omit<SVGAttributes<SVGLineElement>, 'x1' | 'y1' | 'x2' | 'y2' | 'points'> & {
		points: ExtrémitésSegment;
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
