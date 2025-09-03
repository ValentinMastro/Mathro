<!--
  @component
  ## SecteurAngulaire
  Trace le secteur angulaire connaissant 2 angles

  ### Props
  - `cx` *(number)* : abscisse du centre du cercle
  - `cy` *(number)* : ordonnée du centre du cercle
  - `r` *(number)* : rayon du secteur (distance du sommet à l’arc)
  - `angle1` *(number)* : angle de départ en radians
  - `angle2` *(number)* : angle de fin en radians
-->
<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';

	type Props = SVGAttributes<SVGPathElement> & {
		cx: number;
		cy: number;
		r: number;
		angle1: number;
		angle2: number;
	};
	let { cx, cy, r, angle1, angle2, ...props }: Props = $props();

	// Pour que l'angle ne soit pas concave
	if (angle1 < angle2) [angle1, angle2] = [angle2, angle1];
</script>

{#if Math.abs(angle1 - angle2) < Math.PI}
	<path
		d="
    M {cx} {cy}
    L {cx + r * Math.cos(angle1)} {cy - r * Math.sin(angle1)}
    A {r} {r} 0 0 1 {cx + r * Math.cos(angle2)} {cy - r * Math.sin(angle2)}
    Z
    "
		{...props}
	/>
{:else}
	<path
		d="
    M {cx} {cy}
    L {cx + r * Math.cos(angle1)} {cy - r * Math.sin(angle1)}
    A {r} {r} 0 0 1 {cx + r * Math.cos(angle1 + Math.PI)} {cy - r * Math.sin(angle1 + Math.PI)}
    Z
    "
		{...props}
	/>
	<path
		d="
    M {cx} {cy}
    L {cx + r * Math.cos(angle1 + Math.PI)} {cy - r * Math.sin(angle1 + Math.PI)}
    A {r} {r} 0 0 1 {cx + r * Math.cos(angle2)} {cy - r * Math.sin(angle2)}
    Z
    "
		{...props}
	/>
{/if}
