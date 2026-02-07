<!---
    @component
    ## Grille  (extends SVGLineElement)
    Grillage SVG
    ### Props
    - `pas`: *number | { x: number; y: number }* : pas de la grille
    - `avec_contours`: boolean : faut-il afficher le contour de la grille ? (par défaut : false)

    ### Cas n°1
    - `points` *[{x: number, y: number}, {x: number, y: number}]* : coins opposés de la grille
    ### Cas n°2
    - `point` *{x: number, y: number}* : coin en haut à gauche
    - `width` *number* : largeur de la grille
    - `height` *number* : hauteur de la grille
-->

<script lang="ts">
	import { type SVGAttributes } from 'svelte/elements';

	type Pt = { x: number; y: number };
	type Without<T, U> = { [K in Exclude<keyof T, keyof U>]?: never };
	type XOR<A, B> = (A & Without<B, A>) | (B & Without<A, B>);

	type LineAttrs = Omit<SVGAttributes<SVGLineElement>, 'x1' | 'y1' | 'x2' | 'y2' | 'points' | 'point' | 'width' | 'height'>;
	type Common = LineAttrs & {
		pas: number | { x: number; y: number };
		avec_contours?: boolean;
	};

	type PtsVariant = { points: readonly [Pt, Pt] };
	type RectVariant = { point: Pt; width: number; height: number };

	type Props = Common & XOR<PtsVariant, RectVariant>;

	let { pas, avec_contours = false, ...props }: Props = $props();

	let valeursParDefaut = {
		stroke: 'black',
		'stroke-width': 5
	};

	const dims = $derived.by(() => {
		if ('points' in props && props.points) {
			const [p1, p2] = props.points;
			const x = Math.min(p1.x, p2.x);
			const y = Math.min(p1.y, p2.y);
			const longueur = Math.abs(p1.x - p2.x);
			const largeur = Math.abs(p1.y - p2.y);
			return { x, y, longueur, largeur };
		} else {
			return {
				x: props.point.x,
				y: props.point.y,
				longueur: props.width,
				largeur: props.height
			};
		}
	});

	const x = $derived(dims.x);
	const y = $derived(dims.y);
	const longueur = $derived(dims.longueur);
	const largeur = $derived(dims.largeur);

	const pasX = $derived(typeof pas === 'object' && pas !== null ? pas.x : pas);
	const pasY = $derived(typeof pas === 'object' && pas !== null ? pas.y : pas);

	const valeurs_x = $derived.by(() => {
		if (!pasX || pasX <= 0) return [];
		const n = Math.floor(longueur / pasX);
		const internes = Array.from({ length: Math.max(0, n - 1) }, (_, i) => x + (i + 1) * pasX);
		return avec_contours ? [x, ...internes, x + longueur] : internes;
	});

	const valeurs_y = $derived.by(() => {
		if (!pasY || pasY <= 0) return [];
		const n = Math.floor(largeur / pasY);
		const internes = Array.from({ length: Math.max(0, n - 1) }, (_, i) => y + (i + 1) * pasY);
		return avec_contours ? [y, ...internes, y + largeur] : internes;
	});

	const attrs: LineAttrs = $derived.by(() => {
		const { points: _p, point: _pt, width: _w, height: _h, ...rest } = props as any;
		return rest as LineAttrs;
	});
</script>

{#each valeurs_x as xx}
	<line x1={xx} y1={y} x2={xx} y2={y + largeur} {...valeursParDefaut} {...attrs} />
{/each}

{#each valeurs_y as yy}
	<line x1={x} y1={yy} x2={x + longueur} y2={yy} {...valeursParDefaut} {...attrs} />
{/each}
