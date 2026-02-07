<!--
    @component

    ## SegmentVertical
    Trace un segment vertical
    ### Props
    - `y1`: number : ordonnée du premier point
    - `y2`: number : ordonnée du deuxième point
    - `x`: number : abscisse du segment
-->

<script lang="ts">
	import { type SVGAttributes } from 'svelte/elements';
	import { Segment } from './*';

	type Props = Omit<SVGAttributes<SVGLineElement>, 'x1' | 'x2' | 'y1' | 'y2' | 'points'> & {
		y1: number;
		y2: number;
		x: number;
	};

	let { y1, y2, x, ...props }: Props = $props();
</script>

<Segment
	points={[
		{ x, y: y1 },
		{ x, y: y2 }
	]}
	{...props}
/>
