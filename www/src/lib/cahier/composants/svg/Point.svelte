<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import type { Coordonnées2D } from './*';

	type Props = Omit<SVGAttributes<SVGPathElement>, 'd' | 'points' | 'type'> & {
		point: Coordonnées2D;
		type: {
			forme: 'croix' | 'disque' | 'rien' | string;
			taille: number;
		};
		nom?: string;
		'font-size'?: number;
		dx?: number;
		dy?: number;
	};

	let { point, type, nom, 'font-size': fontSize = 80, dx = 0, dy = 2 * fontSize, ...props }: Props = $props();
	let { x, y } = $derived(point);

	function couleur() {
		if (type.forme == 'croix') {
			return props['stroke'] || 'black';
		} else if (type.forme == 'disque') {
			return props['fill'] || 'black';
		}
	}

	let valeursParDefault = {
		'stroke-width': props['stroke-width'] || type.taille / 5
	};

	let t = type.taille;
	let r = type.taille;
	let d_croix = $derived(`
	    M ${x - t} ${y - t}
		L ${x + t} ${y + t}
		M ${x - t} ${y + t}
		L ${x + t} ${y - t}
	`);
	let d_disque = $derived(`
        M ${x - r} ${y}
        A ${r} ${r} 0 1 1 ${x + r} ${y}
        A ${r} ${r} 0 1 1 ${x - r} ${y}
    `);
</script>

{#if type.forme == 'croix'}
	<path d={d_croix} {...props} {...valeursParDefault} fill="none" stroke={couleur()} />
{:else if type.forme == 'disque'}
	<path d={d_disque} {...props} {...valeursParDefault} fill={couleur()} stroke="none" />
{/if}

{#if nom}
	<text {x} {y} {dx} {dy} fill={couleur()} font-size={fontSize} text-anchor="middle" alignment-baseline="middle">{nom}</text>
{/if}
