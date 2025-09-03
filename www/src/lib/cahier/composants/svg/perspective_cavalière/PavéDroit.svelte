<!--
  @component
  ## PavéDroit
  Trace un pavé droit en perspective cavalière

  ### Props
  - `longueur` *(number)* : longueur (horizontale) de l'arête du pavé droit
  - `largeur` *(number)* : largeur (profondeur) de l'arête du pavé droit
  - `hauteur` *(number)* : hauteur (verticale) de l'arête du pavé droit
  - `projecteur` *(Projecteur)* : projecteur utilisé pour la perspective cavalière
  - `coin` *{ x: number; y: number }* : coin devant, en bas à gauche
  - `stroke-dasharray` *(string)* : style de trait pour les arêtes cachées du pavé droit
-->
<script lang="ts">
	import type { Projecteur } from './projecteur';
	import { Polylignes } from '../*';

	type Props = {
		longueur: number;
		largeur: number;
		hauteur: number;
		projecteur: Projecteur;
		coin: { x: number; y: number };
		'stroke-dasharray'?: string;
	};

	let { longueur, largeur, hauteur, projecteur, coin, 'stroke-dasharray': strokeDasharray = '15 25' }: Props = $props();

	// points 3D
	/// face avant
	let a = $derived({ x: coin.x, y: coin.y, z: 0 });
	let b = $derived({ x: a.x + longueur, y: a.y, z: 0 });
	let c = $derived({ x: a.x + longueur, y: a.y - hauteur, z: 0 });
	let d = $derived({ x: a.x, y: a.y - hauteur, z: 0 });
	/// face arrière
	let e = $derived({ x: a.x, y: a.y, z: largeur });
	let f = $derived({ x: b.x, y: b.y, z: largeur });
	let g = $derived({ x: c.x, y: c.y, z: largeur });
	let h = $derived({ x: d.x, y: d.y, z: largeur });

	// points 2D projetés
	let A = $derived(projecteur.P(a));
	let B = $derived(projecteur.P(b));
	let C = $derived(projecteur.P(c));
	let D = $derived(projecteur.P(d));
	let E = $derived(projecteur.P(e));
	let F = $derived(projecteur.P(f));
	let G = $derived(projecteur.P(g));
	let H = $derived(projecteur.P(h));
</script>

<Polylignes points={[D, A, B, C, D, H, G, C, G, F, B]} />
<Polylignes points={[A, E, H]} stroke-dasharray={strokeDasharray} />
<Polylignes points={[E, F]} stroke-dasharray={strokeDasharray} />
