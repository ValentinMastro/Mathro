<!--
  @component
  ## Codage — (extends SVGPathElement)
  Code le segment selon le type de codage choisi

  ### Props
  - `points` *ExtrémitésSegment* : extrémités du segment
  - `position?` *number* : position du codage sur le segment (entre 0 et 1) *(par défaut : 0.5)*
  - `type?` *'1 trait' | '2 traits' | '3 traits'* : type de codage *(par défaut : '1 trait')*
  - `taille?` *number* : longueur du petit trait *(par défaut : 80)*
  - `fill?` *string* : couleur de remplissage *(par défaut : 'none')*
  - `stroke?` *string* : couleur du trait *(par défaut : 'black')*
  - `stroke-width?` *number* : épaisseur du trait *(par défaut : 5)*
-->
<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import type { ExtrémitésSegment } from './*';

	type Props = Omit<SVGAttributes<SVGPathElement>, 'd' | 'points'> & {
		points: ExtrémitésSegment;
		position?: number;
		type?: '1 trait' | '2 traits' | '3 traits';
		taille?: number;
	};

	let { points, position = 0.5, type = '1 trait', taille = 80, ...props }: Props = $props();
	let valeursParDefaut = {
		fill: 'none',
		stroke: 'black',
		'stroke-width': 5
	};

	const P = $derived(points[0]);
	const Q = $derived(points[1]);
	const vx = $derived(Q.x - P.x);
	const vy = $derived(Q.y - P.y);
	const L = $derived(Math.hypot(vx, vy));

	// vecteurs unité
	const ux = $derived(vx / L);
	const uy = $derived(vy / L);
	const px = $derived(-uy);
	const py = $derived(ux);

	// Centre du codage
	const cx = $derived(P.x + position * vx);
	const cy = $derived(P.y + position * vy);

	// Espacement entre traits (si 2 ou 3 traits)
	const espacement = $derived(typeof valeursParDefaut['stroke-width'] === 'number' ? valeursParDefaut['stroke-width'] * 5 : 0.6 * taille);

	function trait(x: number, y: number) {
		const demi = taille / 2;
		const ax = x - demi * px;
		const ay = y - demi * py;
		const bx = x + demi * px;
		const by = y + demi * py;
		return `M ${ax} ${ay} L ${bx} ${by}`;
	}

	function d(): string {
		if (type === '1 trait') {
			return trait(cx, cy);
		} else if (type === '2 traits') {
			return [trait(cx - (espacement / 2) * ux, cy - (espacement / 2) * uy), trait(cx + (espacement / 2) * ux, cy + (espacement / 2) * uy)].join(' ');
		}
		return [trait(cx, cy), trait(cx - espacement * ux, cy - espacement * uy), trait(cx + espacement * ux, cy + espacement * uy)].join(' ');
	}
</script>

<path d={d()} {...valeursParDefaut} {...props} />
