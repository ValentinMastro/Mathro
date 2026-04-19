<!--
  @component
  ## Cube
  Trace un cube en perspective cavalière

  ### Props
  - `arête` *(number)* : longueur de l'arête du cube
  - `projecteur` *(Projecteur)* : projecteur utilisé pour la perspective cavalière
  - `coin` *{ x: number; y: number }* : coin devant, en bas à gauche
-->
<script lang="ts">
	import { PavéDroit, Projecteur } from '../*';

	type Props = {
		arête: number;
		projecteur: Projecteur;
		coin: { x: number; y: number };
	};

	let { arête, projecteur, coin }: Props = $props();
</script>

<PavéDroit longueur={arête} largeur={arête} hauteur={arête} {projecteur} {coin} />
