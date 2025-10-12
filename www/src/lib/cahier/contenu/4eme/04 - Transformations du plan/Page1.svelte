<script lang="ts">
	import { Chapitre, Contenu, DansLaMarge, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Schema, Propriete } from '$lib/cahier/composants/de_cours/*';
	import { AngleDroit, Codage, DroiteVerticale, Médiatrice, Point, Polygone, Segment, SegmentHorizontal } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';

	let scale_1 = $state(1);
	let scale_2 = $state(1);

	const sommets_trapeze = [
		{ x: 0, y: 400 },
		{ x: 200, y: 200 },
		{ x: 600, y: 200 },
		{ x: 800, y: 400 }
	];
</script>

<Chapitre titre="Transformations du plan" />

<DansLaMarge apres_un_titre lignes_vides={5}>
	<input type="range" min="-1" max="1" step="0.01" bind:value={scale_1} style="width: 80%;" />
	<input type="range" min="-1" max="1" step="0.01" bind:value={scale_2} style="width: 80%;" />
</DansLaMarge>

<Contenu apres_un_titre>
	<Partie numero={1} titre="Symétrie axiale" />
	<Definition lignes={2}>
		Deux figures sont symétriques par rapport à une droite si, en repliant le plan le long de cette droite, les deux figures se superposent.
	</Definition>
	<Schema lignes={10} aspectRatioSVG={2.05}>
		{#snippet svg()}
			<!-- Axes de symétrie -->
			<SegmentHorizontal x1={0} x2={800} y={500} stroke-dasharray="30,30" />
			<DroiteVerticale x={1500} stroke-dasharray="30,30" />

			<!-- Figure 1 -->
			<Polygone points={sommets_trapeze} />
			<Polygone points={sommets_trapeze} style="transform-origin: 400px 500px; transform: scaleY({-scale_1});" stroke="red" />

			<!-- Figure 2 -->
			<defs>
				<g id="figure2">
					<line x1={1200} x2={1200} y1={500} y2={300} stroke-width={8} />
					<circle cx={1200} cy={500} r={200} fill="none" stroke-width={8} />
					<circle cx={1200} cy={300} r={200} fill="none" stroke-width={8} />
				</g>
			</defs>

			<use href="#figure2" stroke="black" />
			<use href="#figure2" style="transform-origin: 1500px 400px; transform: scaleX({-scale_2});" stroke="red" />
		{/snippet}
	</Schema>
	<Propriete lignes={2}>
		Si deux points {@html math('\\text{A}')} et {@html math("\\text{A}'")} sont symétriques par rapport à {@html math('(d)')}, <br />
		alors {@html math('(d)')} est la médiatrice du segment {@html math("[\\text{AA}']")}.
	</Propriete>

	<Schema lignes={8} aspectRatioSVG={2}>
		{#snippet svg()}
			{@const c = 1000 / 8}
			{@const type = { forme: 'croix', taille: 20 }}
			{@const A = { x: 4 * c, y: 2 * c }}
			{@const B = { x: 12 * c, y: 6 * c }}
			{@const C = { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 }}
			{@const O = { x: 10 * c, y: 0 }}
			<Point nom="A" point={A} {type} />
			<Point nom="A'" point={B} {type} />
			<Segment points={[A, B]} />
			<Médiatrice extrémités_segment={[A, B]} stroke="red" />
			<AngleDroit points={[B, C, O]} fill="red" taille={50} />
			<Codage points={[A, C]} />
			<Codage points={[B, C]} />
		{/snippet}
	</Schema>
</Contenu>
