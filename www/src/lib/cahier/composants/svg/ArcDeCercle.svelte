<!--
  @component
  ## ArcDeCercle — (extends SVGPathElement)
  Trace un arc de cercle à partir du centre et des deux angles

  ### Props
  - `centre` *Coordonnées2D* : centre du cercle
  - `r` *number* : rayon du secteur (distance du sommet à l’arc)
  - `angle1` *number* : angle de départ de l’arc en radians
  - `angle2` *number* : angle de fin de l’arc en radians
  - `fill?` *string* : couleur de remplissage *(par défaut : ‘none’)*
  - `stroke?` *string* : couleur du trait *(par défaut : ‘black’)*
  - `stroke-width?` *number* : épaisseur du trait *(par défaut : 5)*
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
	let { centre, r, angle1: angle1_brut, angle2: angle2_brut, ...props }: Props = $props();
	let cx = $derived(centre.x);
	let cy = $derived(centre.y);
	let valeursParDefaut = {
		fill: 'none',
		stroke: 'black',
		'stroke-width': 5
	};

	// Pour que l'angle ne soit pas concave
	let angle1 = $derived(angle1_brut < angle2_brut ? angle2_brut : angle1_brut);
	let angle2 = $derived(angle1_brut < angle2_brut ? angle1_brut : angle2_brut);
</script>

{#if Math.abs(angle1 - angle2) < Math.PI}
	<path
		d="
    M {cx + r * Math.cos(angle1)} {cy - r * Math.sin(angle1)}
    A {r} {r} 0 0 1 {cx + r * Math.cos(angle2)} {cy - r * Math.sin(angle2)}
    "
		{...valeursParDefaut}
		{...props}
	/>
{:else}
	<path
		d="
    M {cx + r * Math.cos(angle1)} {cy - r * Math.sin(angle1)}
    A {r} {r} 0 0 1 {cx + r * Math.cos(angle1 + Math.PI)} {cy - r * Math.sin(angle1 + Math.PI)}
    "
		{...valeursParDefaut}
		{...props}
	/>
	<path
		d="
    M {cx + r * Math.cos(angle1 + Math.PI)} {cy - r * Math.sin(angle1 + Math.PI)}
    A {r} {r} 0 0 1 {cx + r * Math.cos(angle2)} {cy - r * Math.sin(angle2)}
    "
		{...valeursParDefaut}
		{...props}
	/>
{/if}
