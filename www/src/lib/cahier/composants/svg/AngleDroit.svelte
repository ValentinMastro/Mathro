<!--
  @component
  ## AngleDroit — (extends SVGPolygonElement)
  Tracer un angle droit

  ### Props
  - `points` *[Coordonnées2D, Coordonnées2D, Coordonnées2D]* : sommets de l'angle droit
  - `taille?` *number* : taille du carré *(par défaut : 100)*
  - `decalage?` *number* : décalage depuis le sommet vers l'intérieur de l'angle *(par défaut : 0)*
  - `stroke?` *string* : couleur du trait *(par défaut : 'none')*
  - `stroke-width?` *number* : épaisseur du trait *(par défaut : 10)*
  - `fill?` *string* : couleur de remplissage *(par défaut : 'black')*
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
		stroke: 'none',
		'stroke-width': '10',
		fill: 'black'
	};

	const A = $derived(points[0]);
	const B = $derived(points[1]);
	const C = $derived(points[2]);

	function normalise(v: { x: number; y: number }) {
		const n = Math.hypot(v.x, v.y);
		return n > 1e-12 ? { x: v.x / n, y: v.y / n } : { x: 0, y: 0 };
	}

	// Vecteur BA
	const u = $derived(normalise({ x: A.x - B.x, y: A.y - B.y }));

	// Perpendiculaire à BA, orientée vers BC
	const v = $derived.by(() => {
		const vC = { x: C.x - B.x, y: C.y - B.y };
		const v0 = { x: -u.y, y: u.x }; // rotation +90°
		return v0.x * vC.x + v0.y * vC.y < 0 ? { x: -v0.x, y: -v0.y } : v0;
	});

	// Premier point du carré (proche du sommet)
	const P0 = $derived({
		x: B.x + u.x * decalage + v.x * decalage,
		y: B.y + u.y * decalage + v.y * decalage
	});

	// Autres points du carré
	const P1 = $derived({ x: P0.x + u.x * taille, y: P0.y + u.y * taille });
	const P2 = $derived({ x: P1.x + v.x * taille, y: P1.y + v.y * taille });
	const P3 = $derived({ x: P0.x + v.x * taille, y: P0.y + v.y * taille });

	const pointsCarre = $derived(`${P0.x},${P0.y} ${P1.x},${P1.y} ${P2.x},${P2.y} ${P3.x},${P3.y}`);
</script>

<polygon points={pointsCarre} {...valeursParDefaut} {...props} />
