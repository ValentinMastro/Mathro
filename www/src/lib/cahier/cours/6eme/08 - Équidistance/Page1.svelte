<script lang="ts">
	import { Contenu, DansLaMarge, Chapitre, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Schema, Propriete, Texte, Definitions } from '$lib/cahier/composants/de_cours/*';
	import { Slider } from '$lib/cahier/composants/de_marge/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { Point, Segment } from '$lib/cahier/composants/svg/*';

	import { math } from 'mathlifier';

	let nombre_de_points: number = 30_000;
	let r: number = $state(400);
	let slider_1: number = $state(nombre_de_points / 10);

	let O = { x: 500, y: 500 };
	let O2 = { x: 1500, y: 500 };

	let angles_aleatoires = Array(nombre_de_points)
		.fill(0)
		.map(() => {
			const angle = Math.random() * 2 * Math.PI;
			return { cos: Math.cos(angle), sin: Math.sin(angle) };
		});

	let rayons_aleatoires = Array(nombre_de_points)
		.fill(0)
		.map(() => Math.random());

	const rPoint1 = 2.5; // nuage sur le cercle
	const rPoint2 = 5; // nuage dans le disque

	// ---- d des paths (un seul path par nuage) ----
	const d_nuage_cercle = $derived.by(() => {
		let d = '';
		const arcs = `a ${rPoint1} ${rPoint1} 0 1 1 ${2 * rPoint1} 0 a ${rPoint1} ${rPoint1} 0 1 1 ${-2 * rPoint1} 0`;
		const segs: string[] = new Array(slider_1);
		for (let i = 0; i < slider_1; i++) {
			const { cos, sin } = angles_aleatoires[i]!;
			const x = O.x + r * cos,
				y = O.y + r * sin;
			segs[i] = `M ${x - rPoint1} ${y}${arcs}`;
		}
		return segs.join(' ');
	});

	const d_nuage_disque = $derived.by(() => {
		let d = '';
		const arcs = ` a ${rPoint2} ${rPoint2} 0 1 1 ${2 * rPoint2} 0 a ${rPoint2} ${rPoint2} 0 1 1 ${-2 * rPoint2} 0 `;
		const segs: string[] = new Array(slider_1);
		for (let i = 0; i < slider_1; i++) {
			const { cos, sin } = angles_aleatoires[i]!;
			const R = r * rayons_aleatoires[i]!;
			const x = O2.x + R * cos,
				y = O2.y + R * sin;
			segs[i] = ` M ${x - rPoint2} ${y} `;
		}
		return segs.join(arcs);
	});

	const dernier_point_cercle = $derived.by(() => {
		const i = Math.min(slider_1, nombre_de_points) - 1;
		const { cos, sin } = angles_aleatoires[i]!;
		return { x: O.x + r * cos, y: O.y + r * sin };
	});

	const dernier_point_disque = $derived.by(() => {
		const i = Math.min(slider_1, nombre_de_points) - 1;
		const { cos, sin } = angles_aleatoires[i]!;
		const R = r * rayons_aleatoires[i]!;
		return { x: O2.x + R * cos, y: O2.y + R * sin };
	});
</script>

<Chapitre titre="Équidistance" />

<DansLaMarge>
	<LigneVide lignes={13} />
	<Slider label={math(`r`)} bind:valeur={r} min={1} max={400} pas={1} />
	<Slider bind:valeur={slider_1} min={1} max={nombre_de_points} pas={100} />
</DansLaMarge>

<Contenu apres_un_titre>
	<Partie numero={1} titre="Autour du cercle" />
	<Definitions lignes={6}>
		Soit un point {@html math('\\text{O}')}. <br />
		Soit une distance {@html math('r')}. <br />
		L'ensemble des points situés à une distance {@html math('r')} du point {@html math('\\text{O}')} est appelé <br />
		cercle de centre {@html math('\\text{O}')} et de rayon {@html math('r')}. <br />
		L'ensemble des points situés à une distance {@html math('\\leqslant r')} du point {@html math('\\text{O}')} est appelé <br />
		disque de centre {@html math('\\text{0}')} et de rayon {@html math('r')}. <br />
	</Definitions>

	<Schema lignes={10} aspectRatioSVG={2}>
		{#snippet svg()}
			<Point nom="O" point={O} type={{ forme: 'disque', taille: 13 }} dy={-30} />
			<Point nom="O" point={O2} type={{ forme: 'disque', taille: 13 }} dy={-30} />
			<path d={d_nuage_cercle} fill="black" stroke="none" style="pointer-events: none" />
			<path d={d_nuage_disque} fill="black" stroke="none" style="pointer-events: none" />
			<Segment points={[O, dernier_point_cercle]} stroke="red" />
			<Segment points={[O2, dernier_point_disque]} stroke="red" />
		{/snippet}
	</Schema>
</Contenu>
