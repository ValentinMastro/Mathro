<!--
  @component
  ## Angle — (extends SVGPathElement)
  Trace le petit angle formé par trois points, avec le deuxième point comme sommet.

  ### Props
  - `r` *(number)* : rayon du secteur (distance du sommet à l’arc)
  - `points` *[{ x: number; y: number }, { x: number; y: number }, { x: number; y: number }]* : tableau de points
-->
<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';

	type Props = Omit<SVGAttributes<SVGPathElement>, 'points'> & {
		r: number;
		points: [{ x: number; y: number }, { x: number; y: number }, { x: number; y: number }];
	};
	let { r, points, ...props }: Props = $props();

	let point1 = points[0];
	let point2 = points[1];
	let point3 = points[2];

	function differenceAngle(ang1: number, ang2: number): number {
		// différence d’angle signée dans ]-π, π]
		return ((ang2 - ang1 + Math.PI) % (2 * Math.PI)) - Math.PI;
	}

	// vecteurs
	const vecteur1 = { x: point1.x - point2.x, y: point1.y - point2.y };
	const vecteur3 = { x: point3.x - point2.x, y: point3.y - point2.y };

	// angles
	const angle1 = Math.atan2(vecteur1.y, vecteur1.x);
	const angle3 = Math.atan2(vecteur3.y, vecteur3.x);

	// extrémités de l’arc à distance r du sommet
	const extremite1 = { x: point2.x + r * Math.cos(angle1), y: point2.y + r * Math.sin(angle1) };
	const extremite3 = { x: point2.x + r * Math.cos(angle3), y: point2.y + r * Math.sin(angle3) };

	// on suit le plus petit angle entre a1 et a3
	const sweep = differenceAngle(angle1, angle3) >= 0 ? 1 : 0;
	const largeArc = 0;

	// secteur rempli : centre -> extremite1 -> arc -> extremite3 -> retour centre
	const d = $derived(
		`
		M ${point2.x} ${point2.y}
        L ${extremite1.x} ${extremite1.y}
        A ${r} ${r} 0 ${largeArc} ${sweep} ${extremite3.x} ${extremite3.y}
        Z
        `
	);
</script>

<path {d} {...props} />
