<!--
  @component
  ## SecteurDeCouronne
  Trace le secteur angulaire connaissant 2 angles

  ### Props
  - `centre` *Coordonnées2D* : abscisse et ordonnée du centre du cercle
  - `rayon1` *(number)* : petit rayon du secteur
  - `rayon2` *(number)* : grand rayon du secteur
  - `angle1` *(number)* : angle de départ en radians
  - `angle2` *(number)* : angle de fin en radians
-->

<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import type { Coordonnées2D } from './*';

	type Props = SVGAttributes<SVGPathElement> & {
		centre: Coordonnées2D;
		rayon1: number;
		rayon2: number;
		angle1: number;
		angle2: number;
	};

	let { centre, rayon1, rayon2, angle1, angle2, ...props }: Props = $props();

	if (angle1 > angle2) [angle2, angle1] = [angle1, angle2];

	let valeursParDefaut = {
		stroke: 'none',
		'stroke-width': 5,
		fill: 'black'
	};

	let petitRayonAngle1 = { x: centre.x + rayon1 * Math.cos(angle1), y: centre.y + rayon1 * Math.sin(angle1) };
	let petitRayonAngle2 = { x: centre.x + rayon1 * Math.cos(angle2), y: centre.y + rayon1 * Math.sin(angle2) };
	let grandRayonAngle1 = { x: centre.x + rayon2 * Math.cos(angle1), y: centre.y + rayon2 * Math.sin(angle1) };
	let grandRayonAngle2 = { x: centre.x + rayon2 * Math.cos(angle2), y: centre.y + rayon2 * Math.sin(angle2) };

	let d = `
	    M ${petitRayonAngle1.x} ${petitRayonAngle1.y}
		L ${grandRayonAngle1.x} ${grandRayonAngle1.y}
		A ${rayon2} ${rayon2} 0 ${angle2 - angle1 > Math.PI ? 1 : 0} 1 ${grandRayonAngle2.x} ${grandRayonAngle2.y}
		L ${petitRayonAngle2.x} ${petitRayonAngle2.y}
		A ${rayon1} ${rayon1} 0 ${angle2 - angle1 > Math.PI ? 1 : 0} 0 ${petitRayonAngle1.x} ${petitRayonAngle1.y}
		Z
	`;
</script>

<path {d} {...valeursParDefaut} {...props} />
