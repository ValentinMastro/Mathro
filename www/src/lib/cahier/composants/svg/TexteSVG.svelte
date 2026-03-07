<!--
  @component
  ## TexteSVG — (extends SVGTextElement)
  Affiche du texte dans un SVG

  ### Props
  - `point` *Coordonnées2D* : point d'ancrage du texte
  - `font-size?` *number* : taille de police *(par défaut : 60)*
  - `dominant-baseline?` *string* : alignement vertical *(par défaut : 'middle')*
  - `text-anchor?` *string* : alignement horizontal *(par défaut : 'middle')*
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
