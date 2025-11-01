<!--
    @component
    ## AngleDroit -- (extends SVGPolygonElement)
    Tracer un angle droit
    ### Props
    - `points`: *{x: number, y: number}[3]* sommets de l'angle droit
    - `taille`: *number* Taille du carré (par défaut : 100)
    - `decalage`: *number* Décalage depuis le sommet vers l'intérieur de l'angle
-->

<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import type { Coordonnées2D } from './*';

	type Props = Omit<SVGAttributes<SVGPolygonElement>, 'points'> & {
		points: [Coordonnées2D, Coordonnées2D, Coordonnées2D];
		taille?: number;
		decalage?: number;
	};

	let { points, taille = 100, decalage = 0, ...props }: Props = $props();
	let valeursParDefaut = {
		stroke: props['stroke'] || 'none',
		'stroke-width': props['stroke-width'] || '10',
		fill: props['fill'] || 'black'
	};

	const A = points[0];
	const B = points[1];
	const C = points[2];

	function normalise(v: { x: number; y: number }) {
		const n = Math.hypot(v.x, v.y);
		return n > 1e-12 ? { x: v.x / n, y: v.y / n } : { x: 0, y: 0 };
	}

	// Vecteur BA
	const u = normalise({ x: A.x - B.x, y: A.y - B.y });

	// Perpendiculaire à BA
	const vC = { x: C.x - B.x, y: C.y - B.y };
	let v = { x: -u.y, y: u.x }; // rotation +90°

	// Oriente v vers BC
	if (v.x * vC.x + v.y * vC.y < 0) {
		v = { x: -v.x, y: -v.y };
	}

	// Premier point du carré (proche du sommet)
	const P0 = {
		x: B.x + u.x * decalage + v.x * decalage,
		y: B.y + u.y * decalage + v.y * decalage
	};

	// Autres points du carré
	const P1 = { x: P0.x + u.x * taille, y: P0.y + u.y * taille };
	const P2 = { x: P1.x + v.x * taille, y: P1.y + v.y * taille };
	const P3 = { x: P0.x + v.x * taille, y: P0.y + v.y * taille };

	const pointsCarre = `${P0.x},${P0.y} ${P1.x},${P1.y} ${P2.x},${P2.y} ${P3.x},${P3.y}`;
</script>

<polygon points={pointsCarre} {...props} {...valeursParDefaut} />
