<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import type { ExtrémitésSegment } from './*';

	export type Props = Omit<SVGAttributes<SVGLineElement>, 'x1' | 'y1' | 'x2' | 'y2'> & {
		passantPar: ExtrémitésSegment;
	};

	let { passantPar, ...props }: Props = $props();
	let valeursParDefaut = {
		stroke: props['stroke'] || 'black',
		'stroke-width': props['stroke-width'] || 5
	};

	let x1 = $derived(passantPar[0].x);
	let x2 = $derived(passantPar[1].x);
	let y1 = $derived(passantPar[0].y);
	let y2 = $derived(passantPar[1].y);

	function equationDeDroite(x: number): number | undefined {
		if (x1 != x2 && y1 != y2) {
			const m = (y2 - y1) / (x2 - x1);
			const p = y1 - m * x1;
			return m * x + p;
		} else {
			return undefined;
		}
	}
</script>

{#if x1 == x2}
	<line {x1} {x2} y1={0} y2={1000} {...props} {...valeursParDefaut} />
{:else if y1 == y2}
	<line x1="0%" x2="100%" {y1} {y2} {...props} {...valeursParDefaut} />
{:else}
	{@const fx1 = equationDeDroite(0)}
	{@const fx2 = equationDeDroite(10000)}
	<line x1={0} x2={10000} y1={fx1} y2={fx2} {...props} {...valeursParDefaut} />
{/if}
