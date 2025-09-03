<!-- Médiatrice.svelte -->
<script lang="ts">
	import Droite from './Droite.svelte';
	import type { SVGAttributes } from 'svelte/elements';

	// On évite les recombinaisons de gros types : on tape "léger"
	type LigneAttrs = Omit<SVGAttributes<SVGLineElement>, 'x1' | 'y1' | 'x2' | 'y2'>;

	type PropsMediatrice = {
		extrémités_segment: [{ x: number; y: number }, { x: number; y: number }];
	} & LigneAttrs;

	let { extrémités_segment, ...rest }: PropsMediatrice = $props();
	let [A, B] = extrémités_segment;

	// Milieu
	const M = $derived({ x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 });

	// Vecteur perpendiculaire non normalisé
	const v = $derived({ x: B.y - A.y, y: -(B.x - A.x) });

	// Deux points pour définir la médiatrice : milieu et milieu+v
	const passantPar = $derived<[{ x: number; y: number }, { x: number; y: number }]>([M, { x: M.x + v.x, y: M.y + v.y }]);
</script>

<Droite {passantPar} {...rest} />
