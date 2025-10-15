<script lang="ts">
	import { Contenu } from '$lib/cahier/composants/de_chapitrage/*';
	import { Definition, Exemple, Propriete, Schema } from '$lib/cahier/composants/de_cours/*';
	import { Angle, Codage, Polygone, TexteSVG } from '$lib/cahier/composants/svg/*';
	import { math } from 'mathlifier';

	let c = 1000 / 11;
	let [D, E, F] = [
		{ x: 1 * c, y: 2 * c },
		{ x: 10 * c, y: 2 * c },
		{ x: ((1 + 10) / 2) * c, y: 9 * c }
	];
</script>

<Contenu>
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
			<Polygone points={[D, E, F]} stroke-width={5} afficher_points noms={['D', 'E', 'F']} />
		{/snippet}
	</Schema>
	<Exemple lignes={2}>
		Le triangle {@html math('\\widehat{\\text{DEF}}')} est isocèle en {@html math('\\text{D}')}.<br />
		Les angles {@html math('\\widehat{\\text{DEF}}')} et {@html math('\\widehat{\\text{EDF}}')} sont égaux.
	</Exemple>
</Contenu>
