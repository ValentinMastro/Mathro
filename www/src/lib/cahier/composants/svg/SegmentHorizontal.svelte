<!--
    @component

    ## Segment
    Trace un segment horizontal
    ### Props
    - `x1`: number : abscisse du premier point
    - `x2`: number : abscisse du deuxième point
    - `y`: number : ordonnée du segment
-->

<script lang="ts">
	import { type SVGAttributes } from 'svelte/elements';
	import { Segment } from './*';

	type Props = Omit<SVGAttributes<SVGLineElement>, 'x1' | 'x2' | 'y1' | 'y2' | 'points'> & {
		x1: number;
		x2: number;
		y: number;
	};

	let { x1, x2, y, ...props }: Props = $props();
	let y1 = $derived(y);
	let y2 = $derived(y);
</script>

<Segment
	points={[
		{ x: x1, y: y1 },
		{ x: x2, y: y2 }
	]}
	{...props}
/>
