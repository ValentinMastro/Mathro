<!--
	@component
	## Point — (extends SVGPathElement)
	Trace un point (croix ou disque) avec un nom optionnel

	### Props
	- `point` *Coordonnées2D* : coordonnées du point
	- `type` *{ forme: 'croix' | 'disque' | 'rien'; taille: number }* : forme et taille du point *(par défaut : { forme: 'croix', taille: 20 })*
	- `nom` *string* : nom affiché à côté du point
	- `font-size` *number* : taille du texte *(par défaut : 80)*
	- `dx` *number* : décalage horizontal du nom *(par défaut : 0)*
	- `dy` *number* : décalage vertical du nom *(par défaut : 2 * font-size)*
-->
<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import type { Coordonnées2D } from './*';

	type Props = Omit<SVGAttributes<SVGPathElement>, 'd' | 'points' | 'type'> & {
		point: Coordonnées2D;
		type?: {
			forme: 'croix' | 'disque' | 'rien' | string;
			taille: number;
		};
		nom?: string;
		'font-size'?: number;
		dx?: number;
		dy?: number;
	};

	let { point, type = { forme: 'croix', taille: 20 }, nom, 'font-size': fontSize = 80, dx = 0, dy = 2 * fontSize, ...props }: Props = $props();
	let { x, y } = $derived(point);

	function couleur(): string {
		if (type.forme == 'croix') {
			return (props['stroke'] as string) || 'black';
		} else if (type.forme == 'disque') {
			return (props['fill'] as string) || 'black';
		}
		return 'black';
	}

	let valeursParDefaut = {
		'stroke-width': type.taille / 5
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
	<path d={d_croix} {...valeursParDefaut} {...props} fill="none" stroke={couleur()} />
{:else if type.forme == 'disque'}
	<path d={d_disque} {...valeursParDefaut} {...props} fill={couleur()} stroke="none" />
{/if}

{#if nom}
	<text {x} {y} {dx} {dy} fill={couleur()} font-size={fontSize} text-anchor="middle" alignment-baseline="middle">{nom}</text>
{/if}
