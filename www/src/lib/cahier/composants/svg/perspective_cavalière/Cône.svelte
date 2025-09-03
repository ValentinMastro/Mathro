<!--
  @component
  ## Cône
  Trace un cône en perspective cavalière

  ### Props
  - `projecteur` *(Projecteur)* : projecteur utilisé pour la perspective cavalière
  - `apex` *{ x: number; y: number }* : apex du cône
  - `centre` *{ x: number; y: number }* : centre de la base du cône
  - `rayon` *number* : rayon de la base du cône
-->
<script lang="ts">
	import { Polylignes, Projecteur } from '../*';

	type Props = {
		projecteur: Projecteur;
		apex: { x: number; y: number; z: number };
		centre: { x: number; y: number; z: number };
		rayon: number;
	};

	let { projecteur, apex, centre, rayon }: Props = $props();

	let APEX = projecteur.P(apex);
	let CENTRE = projecteur.P(centre);
</script>

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
	stroke-dasharray="25,15"
/>
<Polylignes points={[APEX, { x: CENTRE.x - rayon, y: CENTRE.y }]} />
<Polylignes points={[APEX, { x: CENTRE.x + rayon, y: CENTRE.y }]} />
