<!--
	@component
	## DemiDroite — (extends SVGLineElement)
	Trace une demi-droite à partir d'une origine, passant par un point

	### Props
	- `origine` *Coordonnées2D* : point de départ de la demi-droite
	- `passantPar` *Coordonnées2D* : point par lequel passe la demi-droite
-->
<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import { SVG_INFINI, type Coordonnées2D } from './*';

	type Props = Omit<SVGAttributes<SVGLineElement>, 'x1' | 'y1' | 'x2' | 'y2'> & {
		origine: Coordonnées2D;
		passantPar: Coordonnées2D;
	};

	let { origine, passantPar, ...props }: Props = $props();
	let valeursParDefaut = {
		stroke: 'black',
		'stroke-width': 10
	};

	function equationDeDroite(x: number): number | undefined {
		let x1 = origine.x;
		let y1 = origine.y;
		let x2 = passantPar.x;
		let y2 = passantPar.y;
		if (x1 != x2 && y1 != y2) {
			const m = (y2 - y1) / (x2 - x1);
			const p = y1 - m * x1;
			return m * x + p;
		} else {
			return undefined;
		}
	}
</script>

{#if origine.x == passantPar.x}
	{@const x = origine.x}
	{@const extremite = origine.y <= passantPar.y ? SVG_INFINI : -SVG_INFINI}
	<line x1={x} x2={x} y1={origine.y} y2={extremite} {...valeursParDefaut} {...props} />
{:else if origine.y == passantPar.y}
	{@const y = origine.y}
	{@const extremite = origine.x <= passantPar.x ? SVG_INFINI : -SVG_INFINI}
	<line x1={origine.x} x2={extremite} y1={y} y2={y} {...valeursParDefaut} {...props} />
{:else}
	{@const extremite = origine.x <= passantPar.x ? SVG_INFINI : -SVG_INFINI}
	{@const y1 = equationDeDroite(origine.x)}
	{@const y2 = equationDeDroite(extremite)}
	<line x1={origine.x} x2={extremite} {y1} {y2} {...valeursParDefaut} {...props} />
{/if}
