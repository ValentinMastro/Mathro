<!--
  @component
  ## Sphere
  Trace une sphère en perspective cavalière

  ### Props
  - `projecteur` *(Projecteur)* : projecteur utilisé pour la perspective cavalière
  - `centre` *{ x: number; y: number; z: number }* : centre de la base
  - `rayon` *number* : rayon de la sphère
-->

<script lang="ts">
	import { V3 } from './vecteur3D';
	import { Projecteur } from './projecteur';

	type Props = {
		projecteur: Projecteur;
		centre: { x: number; y: number; z: number };
		rayon: number;
	};

	let { projecteur, centre, rayon }: Props = $props();

	let CENTRE = projecteur.P(centre);
</script>

<circle cx={CENTRE.x} cy={CENTRE.y} r={rayon} fill="none" stroke="black" stroke-width={5} />
<!-- Partie haute de l’ellipse -->
<path
	d={`M ${CENTRE.x - rayon} ${CENTRE.y}
      A ${rayon} ${rayon / 2.5} 0 0 0 ${CENTRE.x + rayon} ${CENTRE.y}`}
	fill="none"
	stroke="black"
	stroke-width={5}
/>

<!-- Partie basse de l’ellipse -->
<path
	d={`M ${CENTRE.x - rayon} ${CENTRE.y}
      A ${rayon} ${rayon / 2.5} 0 0 1 ${CENTRE.x + rayon} ${CENTRE.y}`}
	fill="none"
	stroke="black"
	stroke-width={5}
	stroke-dasharray="25,15"
/>
