<script lang="ts">
	import { Contenu, DansLaMarge, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Schema, Propriete } from '$lib/cahier/composants/de_cours/*';
	import { Slider } from '$lib/cahier/composants/de_marge/*';
	import LigneVide from '$lib/cahier/composants/LigneVide.svelte';
	import { Carré, Point, Polygone, Segment } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';

	let rotate_1 = $state(180);
	let rotate_2 = $state(180);
	let rotate_3 = $state(180);

	const sommets_trapeze = [
		{ x: 100, y: 400 },
		{ x: 200, y: 200 },
		{ x: 500, y: 200 },
		{ x: 600, y: 400 }
	];
	const type = { forme: 'disque', taille: 10 };

	// Schéma de la propriété
	const CENTRE = { x: 500, y: 500 };
	const A1 = { x: 400, y: 400 };
	const A2 = { x: 600, y: 600 };
	const B1 = { x: 400, y: 100 };
	const B2 = { x: 600, y: 900 };
	const C1 = { x: 100, y: 400 };
	const C2 = { x: 900, y: 600 };
</script>

<DansLaMarge lignes_vides={8}>
	<Slider min={0} max={180} pas={0.01} bind:valeur={rotate_1} />
	<Slider min={0} max={180} pas={0.01} bind:valeur={rotate_2} />
	<LigneVide lignes={12} />
	<Slider min={0} max={180} pas={0.01} bind:valeur={rotate_3} />
</DansLaMarge>

<Contenu>
	<Partie numero={2} titre="Symétrie centrale" />
	<Definition lignes={3}>
		Deux figures sont symétriques par rapport à un point O si en "pivotant le plan" autour de O, les deux figures se superposent.<br />
		Ce point O est le <i>centre de symétrie</i>.
	</Definition>
	<Schema lignes={10} aspectRatioSVG={2}>
		{#snippet svg()}
			<!-- Centres de symétrie -->
			<Point point={{ x: 600, y: 500 }} {type} fill="red" nom="O" dx={50} dy={70} />
			<Point point={{ x: 1500, y: 400 }} {type} fill="red" nom="P" dx={50} dy={70} />

			<!-- Figure 1 -->
			<Polygone points={sommets_trapeze} />
			<Polygone points={sommets_trapeze} stroke="red" style="transform-origin: 600px 500px; transform: rotate({rotate_1}deg);" />

			<!-- Figure 2 -->
			<defs>
				<g id="centrale2">
					<line x1={1200} x2={1300} y1={400} y2={200} stroke-width={5} />
					<circle cx={1200} cy={400} r={100} fill="none" stroke-width={5} />
				</g>
			</defs>

			<use href="#centrale2" stroke="black" />
			<use href="#centrale2" stroke="red" style="transform-origin: 1500px 400px; transform: rotate({rotate_2}deg);" />
		{/snippet}
	</Schema>
	<Propriete lignes={2}>
		Si deux points {@html math('\\text{A}')} et {@html math("\\text{A}'")} sont symétriques par rapport à O, <br />
		alors O est le milieu du segment {@html math("\\text{AA}'")}.
	</Propriete>
	<Schema lignes={10}>
		{#snippet svg()}
			<Segment points={[A1, A2]} stroke="green" />
			<Segment points={[B1, B2]} stroke="green" />
			<Segment points={[C1, C2]} stroke="green" />
			<Carré coin={{ x: 100, y: 100 }} côté={300} />
			<Carré coin={{ x: 100, y: 100 }} côté={300} stroke="red" style="transform-origin: 500px 500px; transform: rotate({rotate_3}deg);" />
			<Point point={CENTRE} {type} fill="red" />
		{/snippet}
	</Schema>
</Contenu>
