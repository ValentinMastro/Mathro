<!--
  @component
  ## Cercle — (extends SVGCircleElement)
  Trace un cercle

  ### Props
  - `centre` *Coordonnées2D* : centre du cercle
  - `rayon` *number* : rayon du cercle
  - `stroke?` *string* : couleur du trait *(par défaut : 'black')*
  - `stroke-width?` *number* : épaisseur du trait *(par défaut : 5)*
  - `fill?` *string* : couleur de remplissage *(par défaut : 'none')*
-->

<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import type { Coordonnées2D } from './*';

	type Props = SVGAttributes<SVGCircleElement> & {
		centre: Coordonnées2D;
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
