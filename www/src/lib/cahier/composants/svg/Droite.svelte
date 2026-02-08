<!--
	@component
	## Droite — (extends SVGLineElement)
	Trace une droite passant par deux points

	### Props
	- `passantPar` *ExtrémitésSegment* : deux points par lesquels passe la droite
-->
<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import { SVG_INFINI, type ExtrémitésSegment } from './*';

	export type Props = Omit<SVGAttributes<SVGLineElement>, 'x1' | 'y1' | 'x2' | 'y2'> & {
		passantPar: ExtrémitésSegment;
	};

	let { passantPar, ...props }: Props = $props();
	let valeursParDefaut = {
		stroke: 'black',
		'stroke-width': 5
	};

	let x1 = $derived(passantPar[0].x);
	let x2 = $derived(passantPar[1].x);
	let y1 = $derived(passantPar[0].y);
	let y2 = $derived(passantPar[1].y);

	function equationDeDroite(x: number): number | undefined {
		// Droite verticale : pas d'équation y = f(x)
		if (x1 == x2) {
			return undefined;
		}
		// Droite horizontale : y constant
		if (y1 == y2) {
			return y1;
		}
		// Droite oblique : calculer avec la pente
		const m = (y2 - y1) / (x2 - x1);
		const p = y1 - m * x1;
		return m * x + p;
	}
</script>

{#if x1 == x2}
	<line {x1} {x2} y1={-SVG_INFINI} y2={SVG_INFINI} {...valeursParDefaut} {...props} />
{:else if y1 == y2}
	<line x1={-SVG_INFINI} x2={SVG_INFINI} {y1} {y2} {...valeursParDefaut} {...props} />
{:else}
	{@const fx1 = equationDeDroite(-SVG_INFINI)}
	{@const fx2 = equationDeDroite(SVG_INFINI)}
	<line x1={-SVG_INFINI} x2={SVG_INFINI} y1={fx1} y2={fx2} {...valeursParDefaut} {...props} />
{/if}
