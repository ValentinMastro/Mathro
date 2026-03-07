<!--
  @component
  ## Carré — (extends SVGRectElement)
  Tracer un carré

  ### Props
  - `coin` *Coordonnées2D* : coin du carré supérieur gauche
  - `côté` *number* : côté du carré
  - `stroke?` *string* : couleur du trait *(par défaut : 'black')*
  - `stroke-width?` *number* : épaisseur du trait *(par défaut : 5)*
  - `fill?` *string* : couleur de remplissage *(par défaut : 'none')*
-->

<script lang="ts">
	import { type SVGAttributes } from 'svelte/elements';
	import type { Coordonnées2D } from './*';

	type Props = Omit<SVGAttributes<SVGRectElement>, 'x' | 'y' | 'width' | 'height'> & {
		coin: Coordonnées2D;
		côté: number;
	};
	let { coin, côté, ...props }: Props = $props();

	let valeursParDefaut = {
		stroke: 'black',
		'stroke-width': 5,
		fill: 'none'
	};
</script>

<rect x={coin.x} y={coin.y} width={côté} height={côté} {...valeursParDefaut} {...props} />
