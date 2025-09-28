<!--
    @component

    ## Segment
    Trace un segment vertical
    ### Props
    - `y1`: number : abscisse du premier point
    - `y2`: number : abscisse du deuxième point
    - `x`: number : ordonnée du segment
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
	let x1 = $derived(x);
	let x2 = $derived(x);
</script>

<Segment
	points={[
		{ x: x1, y: y1 },
		{ x: x2, y: y2 }
	]}
	{...props}
/>
