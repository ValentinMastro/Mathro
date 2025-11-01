<!--
  @component
  ## ArcDeCercle -- (extends SVGPathElement)
  Trace un arc de cercle à partir du centre et des deux angles

  ### Props
  - `centre` *Coordonnées2D* : centre du cercle
  - `r` *(number)* : rayon du secteur (distance du sommet à l’arc)
  - `angle1` *(number)* : angle de départ de l'arc en radians
  - `angle2` *(number)* : angle de fin de l'arc en radians
-->
<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import type { Coordonnées2D } from './*';

	type Props = SVGAttributes<SVGPathElement> & {
		centre: Coordonnées2D;
		r: number;
		angle1: number;
		angle2: number;
	};
	let { centre, r, angle1, angle2, ...props }: Props = $props();
	let { x: cx, y: cy } = centre;
	let valeursParDefault = {
		fill: props['fill'] || 'none',
		stroke: props['stroke'] || 'black',
		'stroke-width': props['stroke-width'] || 5
	};

	// Pour que l'angle ne soit pas concave
	if (angle1 < angle2) [angle1, angle2] = [angle2, angle1];
</script>

{#if Math.abs(angle1 - angle2) < Math.PI}
	<path
		d="
    M {cx + r * Math.cos(angle1)} {cy - r * Math.sin(angle1)}
    A {r} {r} 0 0 1 {cx + r * Math.cos(angle2)} {cy - r * Math.sin(angle2)}
    "
		{...props}
		{...valeursParDefault}
	/>
{:else}
	<path
		d="
    M {cx + r * Math.cos(angle1)} {cy - r * Math.sin(angle1)}
    A {r} {r} 0 0 1 {cx + r * Math.cos(angle1 + Math.PI)} {cy - r * Math.sin(angle1 + Math.PI)}
    "
		{...props}
		{...valeursParDefault}
	/>
	<path
		d="
    M {cx + r * Math.cos(angle1 + Math.PI)} {cy - r * Math.sin(angle1 + Math.PI)}
    A {r} {r} 0 0 1 {cx + r * Math.cos(angle2)} {cy - r * Math.sin(angle2)}
    "
		{...props}
		{...valeursParDefault}
	/>
{/if}
