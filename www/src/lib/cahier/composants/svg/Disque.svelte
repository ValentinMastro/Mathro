<!--
@component
    ## Disque
    Trace un disque (extends SVGCircleElement)
    ### Props
    - `centre` *{ x: number; y: number }* : centre du disque
    - `rayon` *number* : rayon du disque
 -->

<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';

	type Props = SVGAttributes<SVGCircleElement> & {
		centre: { x: number; y: number };
		rayon: number;
	};

	let { centre, rayon, ...props }: Props = $props();

	let valeursParDefaut = {
		stroke: 'none',
		'stroke-width': '5',
		fill: 'black'
	};
</script>

<circle cx={centre.x} cy={centre.y} r={rayon} {...valeursParDefaut} {...props} />
