<!--
  @component
  ## Disque — (extends SVGCircleElement)
  Trace un disque

  ### Props
  - `centre` *Coordonnées2D* : centre du disque
  - `rayon` *number* : rayon du disque
  - `stroke?` *string* : couleur du trait *(par défaut : 'none')*
  - `stroke-width?` *number* : épaisseur du trait *(par défaut : 5)*
  - `fill?` *string* : couleur de remplissage *(par défaut : 'black')*
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
		stroke: 'none',
		'stroke-width': '5',
		fill: 'black'
	};
</script>

<circle cx={centre.x} cy={centre.y} r={rayon} {...valeursParDefaut} {...props} />
