<!--
  @component
  ## Carré -- (extends SVGRectElement)
  Tracer un carré

  ### Props
  - `coin` *{x: number, y: number}* : coin du carré supérieur gauche
  - `côté` *number* : côté du carré
-->

<script lang="ts">
	import { type SVGAttributes } from 'svelte/elements';

	type Props = Omit<SVGAttributes<SVGRectElement>, 'x' | 'y' | 'width' | 'height'> & {
		coin: { x: number; y: number };
		côté: number;
	};
	let { coin, côté, ...props }: Props = $props();

	let valeursParDefaut = {
		stroke: props['stroke'] || 'black',
		'stroke-width': props['stroke-width'] || 5,
		fill: props['fill'] || 'none'
	};
</script>

<rect x={coin.x} y={coin.y} width={côté} height={côté} {...props} {...valeursParDefaut} />
