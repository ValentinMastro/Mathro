<!--
	@component
	## Médiatrice — (extends Droite)
	Trace la médiatrice d'un segment

	### Props
	- `extrémités_segment` *ExtrémitésSegment* : extrémités du segment dont on trace la médiatrice
-->
<script lang="ts">
	import { Droite, type ExtrémitésSegment } from './*';
	import type { SVGAttributes } from 'svelte/elements';

	type Props = Omit<SVGAttributes<SVGLineElement>, 'x1' | 'y1' | 'x2' | 'y2'> & {
		extrémités_segment: ExtrémitésSegment;
	};

	let { extrémités_segment, ...props }: Props = $props();
	let [A, B] = extrémités_segment;

	// Milieu
	const M = $derived({ x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 });

	// Vecteur perpendiculaire non normalisé
	const v = $derived({ x: B.y - A.y, y: -(B.x - A.x) });

	// Deux points pour définir la médiatrice : milieu et milieu+v
	const passantPar: ExtrémitésSegment = $derived([M, { x: M.x + v.x, y: M.y + v.y }]);
</script>

<Droite {passantPar} {...props} />
