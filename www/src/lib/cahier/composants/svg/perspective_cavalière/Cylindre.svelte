<!--
  @component
  ## Sphere
  Trace une sphère en perspective cavalière

  ### Props
  - `projecteur` *(Projecteur)* : projecteur utilisé pour la perspective cavalière
  - `centre1` *{ x: number; y: number; z: number }* : centre de la base 1
  - `centre2` *{ x: number; y: number; z: number }* : centre de la base 2
  - `rayon` *number* : rayon de la sphère
-->
<script lang="ts">
	import { Polylignes } from '../*';
	import { Projecteur } from './projecteur';
	import { V3 } from './vecteur3D';

	type Props = {
		projecteur: Projecteur;
		centre1: { x: number; y: number; z: number };
		centre2: { x: number; y: number; z: number };
		rayon: number;
	};

	let { projecteur, centre1, centre2, rayon }: Props = $props();

	let CENTRE1 = projecteur.P(centre1);
	let CENTRE2 = projecteur.P(centre2);

	let A1 = { x: CENTRE1.x - rayon, y: CENTRE1.y };
	let A2 = { x: CENTRE1.x + rayon, y: CENTRE1.y };
	let B1 = { x: CENTRE2.x - rayon, y: CENTRE2.y };
	let B2 = { x: CENTRE2.x + rayon, y: CENTRE2.y };
</script>

{#each [CENTRE1, CENTRE2] as centre, index}
	<!-- Partie basse de l’ellipse -->
	<path
		d={`M ${centre.x - rayon} ${centre.y}
          A ${rayon} ${rayon / 2.5} 0 0 0 ${centre.x + rayon} ${centre.y}`}
		fill="none"
		stroke="black"
		stroke-width={5}
	/>

	<!-- Partie haute de l’ellipse -->
	<path
		d={`M ${centre.x - rayon} ${centre.y}
          A ${rayon} ${rayon / 2.5} 0 0 1 ${centre.x + rayon} ${centre.y}`}
		fill="none"
		stroke="black"
		stroke-width={5}
		stroke-dasharray={index === 0 ? '25,15' : '1,0'}
	/>
{/each}

<Polylignes points={[A1, B1]} />
<Polylignes points={[A2, B2]} />
