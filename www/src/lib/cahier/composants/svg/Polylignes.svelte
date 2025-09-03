<!--
  @component
  ## Polylignes -- (extends SVGPolylineElement)
  Trace le polygone formé par les points donnés

  ### Props
  - `points` *{ x: number; y: number }[]* : sommets du polygone
  - `noms` *string[]* : noms des sommets *(par défaut : A, B, C, ...)*
  - `afficher_points` *boolean* : afficher les points *(par défaut : false)*
  - `distance_nom` *number* : distance entre le point et son nom *(par défaut : 60)*
  - `taille_nom` *number* : taille du texte des noms *(par défaut : même valeur que distance_nom)*
  - `type` *{ forme: 'croix' | 'disque' | string; taille: number }* : type et taille des points *(par défaut : { forme: 'croix', taille: 20 })*
-->

<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import { Point } from './*';

	type Props = Omit<SVGAttributes<SVGPolylineElement>, 'points' | 'type'> & {
		points: { x: number; y: number }[];
		noms?: string[];
		afficher_points?: boolean;
		distance_nom?: number;
		taille_nom?: number;
		type?: {
			forme: 'croix' | 'disque' | string;
			taille: number;
		};
	};

	let {
		points,
		noms = Array(points.length)
			.fill('')
			.map((_, index) => String.fromCharCode(index + 65)),
		afficher_points = false,
		distance_nom = 60,
		taille_nom = distance_nom,
		type = { forme: 'croix', taille: 20 },
		...rest
	}: Props = $props();

	let autreProps = {
		fill: rest['fill'] || 'none',
		stroke: rest['stroke'] || 'black',
		'stroke-width': rest['stroke-width'] || 5
	};

	/**
	 * Calcule le centroïde (centre de gravité de l'aire) d'un polygone simple.
	 * Les sommets doivent être donnés dans l'ordre (horaire ou antihoraire).
	 *
	 * @param sommets Liste des sommets du polygone (au moins 3 points).
	 * @returns { x, y } Coordonnées du centroïde.
	 *
	 * Remarques :
	 * - Si l'aire est quasi nulle (polygone dégénéré), on renvoie la moyenne des sommets.
	 * - Pour un polygone auto-intersecté, le résultat est le centroïde de l’aire signée,
	 *   ce qui peut être contre-intuitif.
	 */
	function centroide(sommets: { x: number; y: number }[]): { x: number; y: number } {
		const nombreSommets = sommets.length;

		// Cas particuliers : 0, 1 ou 2 points
		if (nombreSommets === 0) return { x: NaN, y: NaN };
		if (nombreSommets === 1) return { x: sommets[0].x, y: sommets[0].y };
		if (nombreSommets === 2) {
			return {
				x: (sommets[0].x + sommets[1].x) / 2,
				y: (sommets[0].y + sommets[1].y) / 2
			};
		}

		// Variables pour la formule de l'aire signée
		let sommeCroix = 0; // correspond à la somme des (x_i * y_{i+1} - x_{i+1} * y_i)
		let sommeCx = 0; // somme pour calculer la coordonnée x du centroïde
		let sommeCy = 0; // somme pour calculer la coordonnée y du centroïde

		// Parcours de chaque arête du polygone
		for (let i = 0; i < nombreSommets; i++) {
			const j = (i + 1) % nombreSommets; // sommet suivant (boucle fermée)
			const xi = sommets[i].x;
			const yi = sommets[i].y;
			const xj = sommets[j].x;
			const yj = sommets[j].y;

			const produitCroise = xi * yj - xj * yi; // x_i * y_{i+1} - x_{i+1} * y_i

			sommeCroix += produitCroise;
			sommeCx += (xi + xj) * produitCroise;
			sommeCy += (yi + yj) * produitCroise;
		}

		// Aire signée du polygone
		const aire = sommeCroix / 2;
		const EPSILON = 1e-12;

		if (Math.abs(aire) < EPSILON) {
			// Polygone dégénéré : on retourne la moyenne des sommets
			let sommeX = 0,
				sommeY = 0;
			for (const p of sommets) {
				sommeX += p.x;
				sommeY += p.y;
			}
			return { x: sommeX / nombreSommets, y: sommeY / nombreSommets };
		}

		// Calcul final du centroïde
		return {
			x: sommeCx / (3 * sommeCroix), // équivalent à (1 / (6A)) * sommeCx
			y: sommeCy / (3 * sommeCroix)
		};
	}

	let centre_polygone = $derived(centroide(points));

	/**
	 * Décalages (dx, dy) pour chaque nom, orientés à l'opposé du centre :
	 * on prend u = (point - centre) / ||point - centre|| puis (dx,dy) = distance_nom * u.
	 */
	const positions_noms = $derived(
		points.map((p) => {
			const vx = p.x - centre_polygone.x;
			const vy = p.y - centre_polygone.y;
			const norme = Math.hypot(vx, vy);
			// si le point est (quasi) au centre, on choisit une direction par défaut (→)
			const ux = norme > 10 ? vx / norme : 50;
			const uy = norme > 10 ? vy / norme : 0;
			return { dx: ux * distance_nom, dy: uy * distance_nom };
		})
	);
</script>

<polyline points={points.map(({ x, y }) => `${x},${y}`).join(' ')} {...rest} {...autreProps} />
{#if afficher_points}
	{#each points as point, index}
		{@const nom = noms[index]}
		{@const { dx, dy } = positions_noms[index]}
		<Point {nom} {point} {dx} {dy} {type} font-size={taille_nom} />
	{/each}
{/if}
