<script lang="ts">
	import { Contenu, Partie } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Propriete, Schema } from '$lib/cahier/composants/de_cours/*';
	import { Angle, AngleDroit, Codage, Polygone, TexteSVG } from '$lib/cahier/composants/svg/*';

	let [A, B, C] = [
		{ x: 0, y: 200 },
		{ x: 800, y: 200 },
		{ x: 800, y: 800 }
	];
	let [D, E, F] = [
		{ x: 0, y: (2 * 1000) / 11 },
		{ x: 900, y: (2 * 1000) / 11 },
		{ x: 450, y: (9 * 1000) / 11 }
	];
</script>

<Contenu>
	<Partie numero={2} titre="Les différents types de triangles et leurs angles" />
	<Definition>Un triangle rectangle possède un angle droit.</Definition>
	<Schema lignes={5} centré>
		{#snippet svg()}
			<Polygone points={[A, B, C]} stroke-width={10} />
			<AngleDroit points={[A, B, C]} taille={80} />
		{/snippet}
	</Schema>
	<Definition lignes={2}>
		Un triangle isocèle a deux côtés de même longueur. <br />
		Le troisième côté est appelé la <i>base</i>.
	</Definition>
	<Propriete lignes={2}>
		Un triangle isocèle possède deux angles de même mesure :<br />
		il s'agit des angles adjacents à la base du triangle.
	</Propriete>
	<Schema lignes={11} centré>
		{#snippet svg()}
			<TexteSVG point={{ x: (D.x + E.x) / 2, y: D.y + 10 }} fill="red" font-size={70} dy={-50}>base</TexteSVG>
			<Codage points={[D, F]} type="2 traits" stroke="red" />
			<Codage points={[E, F]} type="2 traits" stroke="red" />
			<Angle r={80} points={[D, E, F]} fill="green" />
			<Angle r={80} points={[E, D, F]} fill="green" />
			<Polygone points={[D, E, F]} stroke-width={5} />
		{/snippet}
	</Schema>
</Contenu>
