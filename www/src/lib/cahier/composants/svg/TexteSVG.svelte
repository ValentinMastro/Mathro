<!--
@component
    ## TexteSVG
    Affiche du texte dans un SVG (extends SVGTextElement)
    ### Props
    - `point` *{ x: number; y: number }* : point d'ancrage du texte
 -->

<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	type Props = Omit<SVGAttributes<SVGTextElement>, 'x' | 'y'> & {
		point: { x: number; y: number };
	};

	let { point, children, ...props }: Props = $props();
	let valeursParDefaut = {
		'font-size': props['font-size'] || 60,
		'dominant-baseline': 'middle',
		'text-anchor': 'middle'
	};
</script>

<text x={point.x} y={point.y} {...props} {...valeursParDefaut}>{@render children?.()}</text>
