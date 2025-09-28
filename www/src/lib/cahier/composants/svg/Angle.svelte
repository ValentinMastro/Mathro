<!--
  @component
  ## Angle — (extends SVGPathElement)
  Trace le petit angle formé par trois points, avec le deuxième point comme sommet.

  ### Props
  - `r` *(number)* : rayon du secteur (distance du sommet à l’arc)
  - `points` *[{ x: number; y: number }, { x: number; y: number }, { x: number; y: number }]* : tableau de points
  - `afficher_mesure` *(boolean)* : affiche la mesure de l’angle
  - `mesure` *(Writable<number>)* : mesure de l’angle en degrés
-->
<script lang="ts">
	import { type SVGAttributes } from 'svelte/elements';
	import { type Writable } from 'svelte/store';
	import { TexteSVG } from './*';

	type Props = Omit<SVGAttributes<SVGPathElement>, 'points'> & {
		r: number;
		points: [{ x: number; y: number }, { x: number; y: number }, { x: number; y: number }];
		afficher_mesure?: boolean;
		mesure?: Writable<number>;
	};
	let { r, points, afficher_mesure = false, mesure, ...props }: Props = $props();

	let [P1, P2, P3] = $derived(points);

	function differenceAngle(ang1: number, ang2: number): number {
		// différence d’angle signée dans ]-π, π]
		return ((ang2 - ang1 + Math.PI) % (2 * Math.PI)) - Math.PI;
	}

	// vecteurs
	const v1 = $derived({ x: P1.x - P2.x, y: P1.y - P2.y });
	const v3 = $derived({ x: P3.x - P2.x, y: P3.y - P2.y });

	// angles
	const angle1 = $derived((Math.atan2(v1.y, v1.x) + 2 * Math.PI) % (2 * Math.PI));
	const angle3 = $derived((Math.atan2(v3.y, v3.x) + 2 * Math.PI) % (2 * Math.PI));
	const angleMoitié = $derived((angle1 + angle3) / 2);

	// extrémités de l’arc à distance r du sommet
	const extremite1 = $derived({ x: P2.x + r * Math.cos(angle1), y: P2.y + r * Math.sin(angle1) });
	const extremite3 = $derived({ x: P2.x + r * Math.cos(angle3), y: P2.y + r * Math.sin(angle3) });

	// on suit le plus petit angle entre a1 et a3
	const sweep = $derived(differenceAngle(angle1, angle3) >= 0 ? 1 : 0);
	const largeArc = 0;

	// secteur rempli : centre -> extremite1 -> arc -> extremite3 -> retour centre
	const d = $derived(
		`
		M ${P2.x} ${P2.y}
        L ${extremite1.x} ${extremite1.y}
        A ${r} ${r} 0 ${largeArc} ${sweep} ${extremite3.x} ${extremite3.y}
        Z
        `
	);

	$effect(() => {
		const angle = Math.abs(Math.max(angle3, angle1) - Math.min(angle3, angle1)) % (2 * Math.PI);
		const en_degres = (angle * 180) / Math.PI;
		mesure?.set(en_degres);
	});
</script>

<path {d} {...props} />
{#if afficher_mesure}
	<TexteSVG point={{ x: P2.x + 2 * r * Math.cos(angleMoitié), y: P2.y + 2 * r * Math.sin(angleMoitié) }} fill={props['fill']}>
		{$mesure?.toFixed()}°
	</TexteSVG>
{/if}
