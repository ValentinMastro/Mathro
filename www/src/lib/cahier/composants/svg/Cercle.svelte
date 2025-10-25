<!--
@component
    ## Cercle
    Trace un cercle (extends SVGCircleElement)
    ### Props
    - `centre` *{ x: number; y: number }* : centre du cercle
    - `rayon` *number* : rayon du cercle
 -->

<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';

	type Props = SVGAttributes<SVGCircleElement> & {
		centre: { x: number; y: number };
		rayon: number;
	};

	let { centre, rayon, ...props }: Props = $props();

	let valeursParDefaut = {
		stroke: 'black',
		'stroke-width': '5',
		fill: 'none'
	};
</script>

<circle cx={centre.x} cy={centre.y} r={rayon} {...valeursParDefaut} {...props} />
