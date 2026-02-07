<!--
@component
    ## TexteSVG
    Affiche du texte dans un SVG (extends SVGTextElement)
    ### Props
    - `point` *Coordonnées2D* : point d'ancrage du texte
 -->

<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import type { Coordonnées2D } from './*';
	type Props = Omit<SVGAttributes<SVGTextElement>, 'x' | 'y'> & {
		point: Coordonnées2D;
	};

	let { point, children, ...props }: Props = $props();
	let valeursParDefaut = {
		'font-size': 60,
		'dominant-baseline': 'middle',
		'text-anchor': 'middle'
	};
</script>

<text x={point.x} y={point.y} {...valeursParDefaut} {...props}>{@render children?.()}</text>
